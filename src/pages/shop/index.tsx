import { useCreateShopMutation } from "@/redux/api/shop.api";
import { Button, Group, Input } from "@mantine/core";
import React, { useState } from "react";

const Shop: React.FC = () => {
    const [post, { isLoading }] = useCreateShopMutation();
    const [name, setName] = useState<string>("");

    const handleCreate = async () => {
        const res = await post({
            name: name,
            address: "thanh hoa",
        });

        console.log(res);
    }

    return (
        <Group>
            <Input 
                placeholder="name" 
                value={name} 
                onChange={ e => setName(e.target.value)}
            />
            <Button
                onClick={handleCreate}
                loading={isLoading}
            >Create</Button>
        </Group>
    )
}

export default Shop;