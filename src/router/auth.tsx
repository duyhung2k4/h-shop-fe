import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

import { TOKEN_TYPE } from "@/model/variable";
import { LoadingOverlay } from "@mantine/core";
import { useNavigate } from "react-router";

const AuthComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isToken, setIsToken] = useState<boolean | null>(null);
  const navigation = useNavigate();

  useEffect(() => {
    const accessToken = Cookies.get(TOKEN_TYPE.ACCESS_TOKEN);
    const refreshToken = Cookies.get(TOKEN_TYPE.REFRESH_TOKEN);

    setIsToken(!accessToken || !refreshToken ? false : true);
  }, []);

  if (isToken === null) {
    return <LoadingOverlay visible overlayProps={{ radius: "sm", blur: 2 }} />
  }
  if (isToken === true) {
    navigation(window.location.href);
  }
  if (isToken === false) {
    navigation("/login");
  }

  return (
    <>{children}</>
  )
}

export default AuthComponent;