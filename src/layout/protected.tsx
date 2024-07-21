import React, { Suspense, useEffect } from "react";

import { LoadingOverlay } from "@mantine/core";
import { useNavigate, useOutlet } from "react-router-dom";
import { useRefreshTokenMutation } from "@/redux/api/auth.api";
import { useAppSelector } from "@/redux/hook";
import Cookies from "js-cookie";
import { TOKEN_TYPE } from "@/model/variable";

const ProtectedLayout: React.FC = () => {
  const outlet = useOutlet();

  const isLoading = useAppSelector(state => Object.values(state.authApi.mutations).some(mutation => mutation?.status === 'pending'))

  const [ refresh ] = useRefreshTokenMutation();
  const navigation = useNavigate();

  const handleRefresh = async () => {
    const res = await refresh(null);
    if("error" in res) {
      navigation("/login");
    }
  }

  useEffect(() => {
    if(Cookies.get(TOKEN_TYPE.ACCESS_TOKEN)) {
        handleRefresh();
    }
  }, []);

  if(isLoading) {
    return <LoadingOverlay visible overlayProps={{ radius: "sm", blur: 2 }} />
  }

  return (
    <Suspense fallback={<LoadingOverlay visible overlayProps={{ radius: "sm", blur: 2 }} />}>
      {outlet}
    </Suspense>
  )
}

export default ProtectedLayout;