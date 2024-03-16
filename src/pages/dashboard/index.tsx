import { useCreateShopMutation } from "@/redux/api/shop.api";
import { Button, Group } from "@mantine/core";
import React from "react";

const Dashboard: React.FC = () => {

    const [post, { isLoading }] = useCreateShopMutation();

    const handleCreateShop = async () => {
        post({
            name: "hihi haha",
            address: "thanh hoa"
        })
    }

    return (
        <Group>
            <Button
                loading={isLoading}
                onClick={handleCreateShop}
            >Create Shop</Button>
        </Group>
    )
}

export default Dashboard;