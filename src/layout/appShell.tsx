import React, { createContext } from "react";
import { AppShell, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useOutlet } from "react-router";
import AppHeader from "@/components/header";

export type AppShellContextType = {
  mobileOpened: boolean
  desktopOpened: boolean
  toggleMobile: () => void
  toggleDesktop: () => void
}

export const AppShellContext = createContext<AppShellContextType>({
  mobileOpened: false,
  desktopOpened: false,
  toggleMobile: () => { },
  toggleDesktop: () => { },
})

const AppshellLayout: React.FC = () => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(false);
  const outlet = useOutlet();

  return (
    <AppShellContext.Provider 
      value={{
        mobileOpened,
        desktopOpened,
        toggleMobile,
        toggleDesktop,
      }}
    >
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <AppHeader/>
        </AppShell.Header>
        <AppShell.Navbar p="md">
          {Array(15)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} h={28} mt="sm" animate={false} />
            ))}
        </AppShell.Navbar>
        <AppShell.Main>{outlet}</AppShell.Main>
        <AppShell.Footer p="md">Footer</AppShell.Footer>
      </AppShell>
    </AppShellContext.Provider>
  )
}

export default AppshellLayout;