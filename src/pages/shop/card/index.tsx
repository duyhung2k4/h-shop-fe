import React from "react";

import {
    Card,
    Image,
    Text,
    Button,
    Group,
    Tooltip
} from '@mantine/core';
import { ShopModel } from "@/model/shop";
import { useNavigate } from "react-router";


const CardShop: React.FC<ShopModel> = (props) => {
    const navigation = useNavigate();

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                    height={160}
                    alt="Norway"
                />
            </Card.Section>

            <Tooltip label={props.name}>
                <Group justify="start" mt="md" mb="xs">
                    <Text fw={500} lineClamp={1}>{props.name}</Text>
                </Group>
            </Tooltip>

            <Text size="sm" lineClamp={4} c="dimmed">
                {props.describe}
            </Text>

            <Button onClick={() => navigation(`/me/shop/${props.ID}`)} color="blue" fullWidth mt="md" radius="md">
                Đi đến shop
            </Button>
        </Card>
    )
}

export default CardShop;