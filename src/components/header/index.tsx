import React, { useContext } from "react";
import { Avatar, Burger, Group, Image } from "@mantine/core";
import Logo from "@/assets/icon/app_icon.svg";
import { AppShellContext } from "@/layout/appShell";
import { ProfileModel } from "@/model/profile";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { NavLink } from "react-router-dom";

const AppHeader: React.FC = () => {

  const profile: ProfileModel | undefined = useAppSelector((state: RootState) => state.authSlice.profile);

  const {
    mobileOpened,
    desktopOpened,
    toggleMobile,
    toggleDesktop,

  } = useContext(AppShellContext);

  if(profile === undefined) {
    return <NavLink to={"/login"} />
  }

  return (
    <Group h="100%" px="md" justify="space-between">
      <Group h="100%">
        <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
        <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
        <Image src={Logo} height={30} width={30} />
      </Group>
      <Group h="100%">
        <Avatar 
          src={profile.picture}
          style={{
            cursor: "pointer"
          }}
        />
      </Group>
    </Group>
  )
}

export default AppHeader;