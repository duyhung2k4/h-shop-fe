import React, { useEffect, useState } from "react";
import { Group, Image, TextInput, NavLink, Box } from "@mantine/core";
import classes from "./style.module.css";

import UserIcon from "@/assets/icon/user-svgrepo-com.svg";
import TrashIcon from "@/assets/icon/trash-alt-svgrepo-com.svg";
import CarIcon from "@/assets/icon/car-round-645-svgrepo-com.svg";
import RingIcon from "@/assets/icon/ring-ringing-alert-bell-svgrepo-com.svg";
import FindIcon from "@/assets/icon/find-svgrepo-com.svg";
import { ObjectRouter, ROUTER } from "@/constants/router";
import { useNavigate } from "react-router";

const AppHeader: React.FC = () => {
  const [navlinks, setNavlinks] = useState<ObjectRouter[]>([]);

  const navigation = useNavigate();

  useEffect(() => {
    setNavlinks([
      ROUTER.SHOPS,
      ROUTER.HOME,
      ROUTER.TOP_SALE,
    ])
  }, []);

  return (
    <Group
      align="center"
      justify="center"
      gap={"10%"}
      className={classes.root}
    >
      <Group>
        <Image src={FindIcon} height={24} width={24} />
        <TextInput
          variant="unstyled"
          className={classes.text__input}
        />
      </Group>
      <Group gap={50}>
        {
          navlinks.map((item, i) => (
            <Box key={i}>
              <NavLink
                className={classes.nav__link}
                onClick={() => navigation(item.href)}
                label={item?.name || ""}
                active={(item?.href || "") == window.location.pathname}
              />
            </Box>
          ))
        }
      </Group>
      <Group gap={30}>
        <Image src={CarIcon} height={24} width={24} />
        <Image src={RingIcon} height={24} width={24} />
        <Image src={TrashIcon} height={24} width={24} />
        <Image src={UserIcon} height={24} width={24} />
      </Group>
    </Group>
  )
}

export default AppHeader;