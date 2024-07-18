import React, { useContext } from "react";
import { Stack, Text } from "@mantine/core";
import { DetailProductContext, TypeDetailProductContext } from "..";

const DetailProductWarehouse: React.FC = () => {
    const { warehouse } = useContext<TypeDetailProductContext>(DetailProductContext);

    return (
        <Stack>
            <Text>Số lượng: {warehouse?.count}</Text>
        </Stack>
    )
}

export default DetailProductWarehouse;