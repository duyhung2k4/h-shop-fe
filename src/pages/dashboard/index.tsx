import { useCheckDuplicateQuery, useCreateShopMutation } from "@/redux/api/shop.api";
import { Button, Group, Input } from "@mantine/core";
import React, { useEffect, useState } from "react";

const Dashboard: React.FC = () => {

    const [post, { isLoading }] = useCreateShopMutation();
    const [name, setName] = useState<string>("");
    const { data, refetch } = useCheckDuplicateQuery({ name });

    const handleCreateShop = async () => {
        post({
            name: "hihi 1",
            address: "thanh hoa"
        })
    }

    
    useEffect(() => {
        console.log(data);
    }, [data]);
    
    useEffect(() => {
        refetch();
    }, [name]);

    return (
        <Group>
            <Button
                loading={isLoading}
                onClick={handleCreateShop}
            >Create Shop</Button>
            <Input
                onChange={(e) => setName(e.target.value)}
            />
        </Group>
    )
}

export default Dashboard;