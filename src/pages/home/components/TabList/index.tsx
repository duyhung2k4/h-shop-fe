import React, { useContext } from "react";
import { Group, Tabs } from "@mantine/core";

import classes from "./style.module.css";
import { HomeContext, TypeHomeContext } from "../..";


const HomeTabList: React.FC = () => {
    const { categories } = useContext<TypeHomeContext>(HomeContext);

    return (
        <Group justify="center">
            <Tabs.List className={classes.tab__list}>
                {
                    categories.map((item) =>
                        <Tabs.Tab
                            key={item.ID}
                            className={classes.tab}
                            value={item.code}
                            classNames={{
                                tabLabel: classes.tab__label
                            }}
                        >
                            {item.name}
                        </Tabs.Tab>
                    )
                }
            </Tabs.List>
        </Group>
    )
}

export default HomeTabList;