import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { Group, Text } from "@mantine/core";
import React from "react";
import { useNavigate, useParams } from "react-router";

const ShopDetail: React.FC = () => {
    const { shop_id } = useParams();
    const navigation = useNavigate();
    const profile = useAppSelector((state: RootState) => state.authSlice.profile);

    if(shop_id === undefined || profile === undefined) {
        navigation("/me/shop/not-found");
    }

    return (
        <Group>
            <Text>Shop {shop_id} của {profile?.name}</Text>
        </Group>
    )
}

export default ShopDetail;