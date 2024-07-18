import React, { useContext } from "react";
import { Stack, Text } from "@mantine/core";

import classes from "../style.module.css";
import { ProductObjectDefaultField } from "@/model/product";
import { DetailProductContext, TypeDetailProductContext } from "..";

const DetailProductIntro: React.FC = () => {

    const { product } = useContext<TypeDetailProductContext>(DetailProductContext);

    if (!product) {
        return <></>
    }

    return (
        <Stack gap={0}>
            <Text classNames={{ root: classes.name_product }}>{product[ProductObjectDefaultField.name]}</Text>
            <Text mt={16}>Mô tả</Text>
            <Text>{product[ProductObjectDefaultField.detail]}</Text>
        </Stack>
    )
}

export default DetailProductIntro;