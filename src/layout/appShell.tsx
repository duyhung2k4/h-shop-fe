import React, { createContext, useEffect, useRef, useState } from "react";
import AppHeader from "@/layout/header";

import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ObjectRouter, ROUTER } from "@/constants/router";
import { useNavigate, useOutlet } from "react-router";
import useWindowDimensions from "@/hook/screen.hook";
import { useGetCategoryQuery } from "@/redux/api/typeProduct.api";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { loadCacheOrder } from "@/redux/slice/orderSlice";
import Footer from "./footer";

export type TypeAppShellContext = {
    mobileOpened: boolean
    desktopOpened: boolean
    widthMain: number
    search: string
    toggleMobile: () => void
    toggleDesktop: () => void
    setWidthMain: React.Dispatch<React.SetStateAction<number>>
    setSearch: React.Dispatch<React.SetStateAction<string>>
    links: ObjectRouter[]
}

export const AppShellContext = createContext<TypeAppShellContext>({
    mobileOpened: false,
    desktopOpened: false,
    widthMain: 0,
    search: "",
    toggleMobile: () => { },
    toggleDesktop: () => { },
    setWidthMain: () => { },
    setSearch: () => {},
    links: [],
})

const AppshellLayout: React.FC = () => {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
    const [widthMain, setWidthMain] = useState<number>(0);
    const [search, setSearch] = useState<string>("");
    const outlet = useOutlet();
    const refMain = useRef<HTMLDivElement | null>(null);
    
    const dispatch = useAppDispatch();
    const navigation = useNavigate();

    const { order } = useAppSelector(state => state.orderSlice);
    const { width } = useWindowDimensions();
    const { refetch: refetchGetCategoryQuery } = useGetCategoryQuery(null);

    useEffect(() => {
        setWidthMain(refMain.current?.offsetWidth || 0);
    }, [width]);

    useEffect(() => {
        refetchGetCategoryQuery();
        dispatch(loadCacheOrder())
    }, []);

    useEffect(() => {
        if(order) {
            navigation(ROUTER.ORDER.href);
        }
    }, [order]);

    return (
        <AppShellContext.Provider
            value={{
                mobileOpened,
                desktopOpened,
                widthMain,
                search,
                toggleMobile,
                toggleDesktop,
                setWidthMain,
                setSearch,
                links: [
                    ROUTER.HOME,
                    ROUTER.SHOPPING,
                    ROUTER.HEART,
                    ROUTER.PUCHASE_ORDER,
                ],
            }}
        >
            <AppShell
                header={{ 
                    height: 60,
                }}
                padding="md"
            >
                <AppShell.Header
                    style={{
                        border: 0,
                        marginBottom: 30,
                    }}
                >
                    <AppHeader />
                </AppShell.Header>



                <AppShell.Main>
                    {outlet}
                </AppShell.Main>



                <AppShell.Footer pos={"relative"} zIndex={0}>
                    <Footer/>
                </AppShell.Footer>
            </AppShell>
        </AppShellContext.Provider>
    )
}

export default AppshellLayout;