import React, { useContext } from "react";
import { Grid, Group, Stack, Text } from "@mantine/core";
import { DetailProductContext, TypeDetailProductContext } from "..";

import classes from "./style.module.css";


const DetailProductTypeProduct: React.FC = () => {

    const {
        listTypeProduct,
        typeSelect,
        setTypeSelect,
    } = useContext<TypeDetailProductContext>(DetailProductContext);

    return (
        <Stack>
            <Text>Số lượng: {typeSelect?.count}</Text>
            <Grid gutter={8}>
                {
                    listTypeProduct.map(item =>
                        <Grid.Col key={item.id} span={4}>
                            <Group
                                classNames={{
                                    root: `${classes.type_product} ${typeSelect?.id === item.id && classes.active}`,
                                }}
                                onClick={() => setTypeSelect(item)}
                                justify="center"
                            >{item.name}</Group>
                        </Grid.Col>
                    )
                }
            </Grid>
        </Stack>
    )
}

export default DetailProductTypeProduct;