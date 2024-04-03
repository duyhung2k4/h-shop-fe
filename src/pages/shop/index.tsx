import React, { useEffect } from "react";

import { useGetShopQuery } from "@/redux/api/shop.api";
import {
    Button,
    Grid,
    Group,
    Image,
    LoadingOverlay,
    Stack,
    Text
} from "@mantine/core";

import IconEmptyData from "@/assets/icon/empty-box-svgrepo-com.svg";
import { useNavigate } from "react-router";
import CardShop from "./card";
import { ShopModel } from "@/model/shop";

const Shop: React.FC = () => {

    const navigation = useNavigate();

    const {
        data: shops,
        refetch,
        isFetching,
    } = useGetShopQuery(null);

    useEffect(() => {
        refetch();
    }, []);

    if (isFetching) {
        return (
            <LoadingOverlay visible overlayProps={{ radius: "sm", blur: 2 }} />
        )
    }

    if ((shops?.data || []).length === 0) {
        return (
            <Stack
                justify="center"
                align="center"
                h={"100%"}
                w={"100%"}
            >
                <Text>Bạn chưa có cửa hàng nào</Text>
                <Group
                    h={"auto"}
                    w={"20%"}
                    justify="center"
                >
                    <Image src={IconEmptyData} />
                </Group>
                <Button onClick={() => navigation("/me/shop/create")}>Tạo mới</Button>
            </Stack>
        )
    }

    return (
        <Stack>
            <Group justify="end">
                <Button onClick={() => navigation("/me/shop/create")}>Tạo mới shop</Button>
            </Group>
            <Grid>
                    {
                        (shops?.data || []).map((shop: ShopModel) =>
                            <Grid.Col span={{ xs: 12, md: 4, lg: 3 }}>
                                <CardShop {...shop} />
                            </Grid.Col>
                        )
                    }
            </Grid>
        </Stack>
    )
}

export default Shop;