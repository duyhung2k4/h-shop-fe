import React, { createContext, Suspense } from "react";
import { AppShell, LoadingOverlay } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useOutlet } from "react-router";
import AppHeader from "@/components/header";
import AppNavbar from "@/components/navbar";

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
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
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
          width: 230,
          breakpoint: 'sm',
          collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <AppHeader/>
        </AppShell.Header>
        <AppShell.Navbar p={0}>
            <AppNavbar/>
        </AppShell.Navbar>
        <AppShell.Main>
            <Suspense fallback={<LoadingOverlay visible overlayProps={{ radius: "sm", blur: 2 }}/>}>
                {outlet}
            </Suspense>
        </AppShell.Main>
        <AppShell.Footer p="md">Footer</AppShell.Footer>
      </AppShell>
    </AppShellContext.Provider>
  )
}

export default AppshellLayout;