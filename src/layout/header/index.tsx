import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ActionIcon, Burger, Drawer, Group, Image, Menu, Stack, Text, TextInput, Tooltip, Transition } from "@mantine/core";
import { AppShellContext, TypeAppShellContext } from "@/layout/appShell";


import { Link, useNavigate } from "react-router-dom";
import { ROUTER } from "@/constants/router";
import { TOKEN_TYPE } from "@/model/variable";
import { useMediaQuery } from "@mantine/hooks";

import Cookies from "js-cookie";
import IconDemon from "@/assets/icon/demon.svg";
import IconSearch from "@/assets/icon/search.svg";
import IconUser from "@/assets/icon/user-svgrepo-com.svg";
import IconLogin from "@/assets/icon/login.svg";
import IconLogout from "@/assets/icon/logout.svg";
import classes from "./style.module.css";
import { ModalUser } from "./components/modal";



const AppHeader: React.FC = () => {
    const {
        links,
        setSearch
    } = useContext<TypeAppShellContext>(AppShellContext);
    const [openSearch, setOpenSearch] = useState<boolean>(false);
    const [openLinks, setOpenLinks] = useState<boolean>(true);
    const [boxSearch, setBoxSearch] = useState<string>("");
    const [menu, setMenu] = useState<boolean>(false);
    const [modalInfo, setModalInfo] = useState<boolean>(false);

    const navigate = useNavigate();

    const token = Cookies.get(TOKEN_TYPE.ACCESS_TOKEN);
    const matches = useMediaQuery('(min-width: 760px)');

    const linkActive = useMemo(() => {
        return window.location.pathname;
    }, [window.location.pathname]);

    useEffect(() => {
        if (openSearch) setOpenLinks(false);
    }, [openSearch]);

    useEffect(() => {
        const searchDelay = setTimeout(() => {
            setSearch(boxSearch);
        }, 500);

        return () => {
            clearTimeout(searchDelay);
        }
    }, [boxSearch]);

    useEffect(() => {
        if (!matches) {
            setMenu(false);
        }
    }, [matches]);

    const handleLogout = () => {
        Cookies.remove(TOKEN_TYPE.ACCESS_TOKEN);
        Cookies.remove(TOKEN_TYPE.REFRESH_TOKEN);
        navigate(ROUTER.LOGIN.href);
    }

    return (
        <HeaderContext.Provider
            value={{
                modalInfo,
                setModalInfo,
            }}
        >
            <Group classNames={{ root: classes.root }}>
                {matches && <Group h="100%" w="100%" px="md" justify="space-between">
                    <Group>
                        <Text classNames={{ root: classes.title }}>H SHOP</Text>
                    </Group>
                    <Stack gap={30} h={"100%"} justify="center" style={{ overflow: "hidden" }}>
                        {openLinks &&
                            <Group>
                                {
                                    links.map((item, index) =>
                                        <Link
                                            className={linkActive === item.href ? classes.link_active : classes.link}
                                            to={item.href}
                                            key={index}
                                        >{item.name}</Link>
                                    )
                                }
                            </Group>
                        }
                        <Transition
                            mounted={openSearch}
                            duration={200}
                            transition="slide-down"
                            onExited={() => setOpenLinks(true)}
                        >
                            {
                                (transitionStyle) =>
                                    <TextInput
                                        placeholder="Tìm kiếm"
                                        value={boxSearch}
                                        w={!matches ? "100%" : 400}
                                        onChange={e => setBoxSearch(e.target.value)}
                                        style={transitionStyle}
                                    />
                            }
                        </Transition>
                    </Stack>
                    <Group>
                        <Group className={classes.group_option} gap={30}>
                            <Tooltip label="Tìm kiếm">
                                <ActionIcon
                                    size={24}
                                    onClick={() => setOpenSearch(!openSearch)}
                                >
                                    <Image src={IconSearch} />
                                </ActionIcon>
                            </Tooltip>
                            <Menu>
                                <Menu.Target>
                                    <ActionIcon size={24}>
                                        <Image src={IconUser} />
                                    </ActionIcon>
                                </Menu.Target>

                                <Menu.Dropdown
                                    style={{
                                        border: "1px solid black",
                                        minWidth: 200,
                                    }}>
                                    {
                                        token ?
                                            <>
                                                <Menu.Item
                                                    onClick={() => setModalInfo(true)}
                                                    className={classes.menu_item}
                                                    leftSection={<Image src={IconUser} width="20px" height="20px" />}
                                                >
                                                    Thông tin người dùng
                                                </Menu.Item>
                                                <Menu.Item
                                                    onClick={handleLogout}
                                                    className={classes.menu_item}
                                                    leftSection={<Image src={IconLogout} width="20px" height="20px" />}
                                                >
                                                    Đăng xuất
                                                </Menu.Item>
                                            </>
                                            :
                                            <Menu.Item
                                                onClick={() => navigate(ROUTER.LOGIN.href)}
                                                className={classes.menu_item}
                                                leftSection={<Image src={IconLogin} width="20px" height="20px" />}
                                            >
                                                Đăng nhập
                                            </Menu.Item>
                                    }
                                </Menu.Dropdown>
                            </Menu>
                        </Group>
                    </Group>
                </Group>}

                {
                    !matches &&
                    <Group h="100%" w="100%" px="md" justify="space-between">
                        <Group>
                            <Image src={IconDemon} height={30} width={30} />
                            <Text classNames={{ root: classes.title }}>H SHOP</Text>
                        </Group>
                        <Stack gap={30} h={"100%"} justify="center" style={{ overflow: "hidden" }}>
                            <Transition
                                mounted={openSearch}
                                duration={200}
                                transition="slide-down"
                                onExited={() => setOpenLinks(true)}
                            >
                                {
                                    (transitionStyle) =>
                                        <TextInput
                                            placeholder="Tìm kiếm"
                                            value={boxSearch}
                                            w={!matches ? "100%" : 400}
                                            onChange={e => setBoxSearch(e.target.value)}
                                            style={transitionStyle}
                                        />
                                }
                            </Transition>
                        </Stack>
                        <Group>
                            <Burger
                                opened={menu}
                                onClick={() => setMenu(!menu)}
                                aria-label="Toggle navigation"
                                style={{
                                    backgroundColor: "#FFF"
                                }}
                            />
                        </Group>
                    </Group>
                }

                <Drawer
                    opened={menu} onClose={() => setMenu(false)}
                    size="xs"
                    title={<span style={{ fontWeight: 600 }}>Thanh điều hướng</span>}
                    classNames={{
                        header: classes.d_header,
                        body: classes.d_body,
                    }}
                >
                    <Stack h={"100%"} justify="space-between">
                        <Stack>
                            {
                                links.map((item, index) =>
                                    <Link
                                        className={linkActive === item.href ? classes.link_active : classes.link}
                                        to={item.href}
                                        key={index}
                                    >{item.name}</Link>
                                )
                            }
                        </Stack>
                        <Group w={"100%"} justify="center">
                            <Group className={classes.group_option} gap={30}>
                                <Tooltip label="Tìm kiếm">
                                    <ActionIcon
                                        size={24}
                                        onClick={() => setOpenSearch(!openSearch)}
                                    >
                                        <Image src={IconSearch} />
                                    </ActionIcon>
                                </Tooltip>
                                <Menu>
                                    <Menu.Target>
                                        <ActionIcon size={24}>
                                            <Image src={IconUser} />
                                        </ActionIcon>
                                    </Menu.Target>

                                    <Menu.Dropdown
                                        style={{
                                            border: "1px solid black",
                                            minWidth: 200,
                                        }}>
                                        {
                                            token ?
                                                <>
                                                    <Menu.Item
                                                        onClick={() => setModalInfo(true)}
                                                        className={classes.menu_item}
                                                        leftSection={<Image src={IconUser} width="20px" height="20px" />}
                                                    >
                                                        Thông tin người dùng
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        onClick={handleLogout}
                                                        className={classes.menu_item}
                                                        leftSection={<Image src={IconLogout} width="20px" height="20px" />}
                                                    >
                                                        Đăng xuất
                                                    </Menu.Item>
                                                </>
                                                :
                                                <Menu.Item
                                                    onClick={() => navigate(ROUTER.LOGIN.href)}
                                                    className={classes.menu_item}
                                                    leftSection={<Image src={IconLogin} width="20px" height="20px" />}
                                                >
                                                    Đăng nhập
                                                </Menu.Item>
                                        }
                                    </Menu.Dropdown>
                                </Menu>
                            </Group>
                        </Group>
                    </Stack>
                </Drawer>
            </Group>

            <ModalUser/>
        </HeaderContext.Provider>
    )
}

export type TypeHeaderContext = {
    modalInfo: boolean
    setModalInfo: (value: boolean) => void
}

export const HeaderContext = createContext<TypeHeaderContext>({
    modalInfo: false,
    setModalInfo: (_: boolean) => { },
})

export default AppHeader;