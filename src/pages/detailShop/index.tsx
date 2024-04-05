import React, { useEffect } from "react";
import { useGetDetailShopQuery } from "@/redux/api/shop.api";
import { Group, LoadingOverlay, Text } from "@mantine/core";
import { useNavigate, useParams } from "react-router";

const ShopDetail: React.FC = () => {
    const { shop_id } = useParams();
    const navigation = useNavigate();

    if(shop_id === undefined) {
        navigation("/me/shop/not-found");
    }

    const {
        data,
        refetch,
        isLoading
    } = useGetDetailShopQuery(Number(shop_id || 0))

    useEffect(() => {
        refetch();
    }, []);

    if(isLoading) {
        return <LoadingOverlay visible overlayProps={{ radius: "sm", blur: 2 }} />
    }

    return (
        <Group>
            <Text>{data?.data?.name || ""}</Text>
        </Group>
    )
}

export default ShopDetail;