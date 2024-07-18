import React, { useContext, useEffect, useMemo } from "react";
import { Grid, Group, LoadingOverlay, Text } from "@mantine/core";
import { useAppSelector } from "@/redux/hook";
import { useSearchQuery } from "@/redux/api/product.api";
import { AppShellContext, TypeAppShellContext } from "@/layout/appShell";

import HomeFilter from "./components/filter";

import classes from "./style.module.css";
import CardProduct from "./components/card";

const Shopping: React.FC = () => {
    const {
        initObjectCategoryFilter,
        categorys,
        categoryId,
    } = useAppSelector(state => state.typeProductSlice);

    const { search } = useContext<TypeAppShellContext>(AppShellContext);

    const {
        data,
        refetch,
        isFetching,
    } = useSearchQuery({
        name: search,
        category: `${categoryId}`,
    })

    const category = useMemo(() => {
        let keyIsChecked = "";
        Object.keys(initObjectCategoryFilter).forEach(key => {
            if (initObjectCategoryFilter[key] === true) {
                keyIsChecked = key;
            }
        })
        return categorys.find(item => item.code === keyIsChecked);
    }, [initObjectCategoryFilter]);

    useEffect(() => {
        refetch();
    }, [categoryId, search]);

    return (
        <Group>
            <LoadingOverlay pos={"absolute"} visible={isFetching} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
            <Group
                style={{
                    borderBottom: "1px solid gray",
                    width: "100%",
                    padding: "0px 16px 20px 16px",
                }}
            >
                {
                    category &&
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: 600,
                        }}
                    >{category.name}</Text>
                }
            </Group>
            <Group w={"100%"} gap={0} align="start">
                <Group classNames={{ root: classes.filter }}>
                    <HomeFilter />
                </Group>
                <Group classNames={{ root: classes.products }}>
                    <Grid w={"100%"}>
                        {
                            (data?.data || []).map((item: Record<string, any>, index: number) =>
                                <Grid.Col span={4} key={index}>
                                    <CardProduct {...item} />
                                </Grid.Col>)
                        }
                    </Grid>
                </Group>
            </Group>

            
        </Group>
    )
}

export default Shopping;