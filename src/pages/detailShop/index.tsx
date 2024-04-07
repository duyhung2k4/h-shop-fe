import React, { useEffect } from "react";
import { useGetDetailShopQuery } from "@/redux/api/shop.api";
import { Button, Group, LoadingOverlay, Stack, Text } from "@mantine/core";
import { useNavigate, useParams } from "react-router";
import { IconLayoutGridAdd, IconSettings } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

const DetailShop: React.FC = () => {
    const { shop_id } = useParams();
    const navigation = useNavigate();
    const matches = useMediaQuery("(max-width: 964px)");

    if (shop_id === undefined) {
        navigation("/me/shop/not-found");
    }

    const {
        data,
        refetch,
        isLoading
    } = useGetDetailShopQuery(Number(shop_id || 0));

    useEffect(() => {
        refetch();
    }, []);

    if (isLoading) {
        return <LoadingOverlay visible overlayProps={{ radius: "sm", blur: 2 }} />
    }

    return (
        <Stack>
            <Group justify="space-between">
                <Text>{data?.data?.name || ""}</Text>
                <Group>
                    <Button
                        leftSection={matches ? undefined : <IconSettings/>}
                        onClick={() => {}}
                    >{matches ? <IconSettings/> : "Chỉnh sửa shop"}</Button>
                    <Button 
                        leftSection={matches ? undefined : <IconLayoutGridAdd />}
                        onClick={() => navigation(`/me/shop/${shop_id}/create-product`)}
                    >{matches ? <IconLayoutGridAdd /> : "Tạo mới sản phẩm"}</Button>
                </Group>
            </Group>
        </Stack>
    )
}

export default DetailShop;