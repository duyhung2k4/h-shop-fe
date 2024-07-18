import React, { useEffect } from "react";
import Card from "./card";

import { useGetCartQuery } from "@/redux/api/product.api";
import { Container, LoadingOverlay, Stack } from "@mantine/core";
import { ProductObjectDefaultField } from "@/model/product";


const Cart: React.FC = () => {
    const {
        data,
        isFetching,
        refetch,
    } = useGetCartQuery(null);

    useEffect(() => {
        refetch();
    }, []);

    return (
        <Container>
            <LoadingOverlay visible={isFetching} overlayProps={{ radius: "sm", blur: 2 }} />
            <Stack>
                {
                    data?.data?.map(item =>
                        <Card
                            key={item[ProductObjectDefaultField._id]}
                            {...item}
                        />
                    )
                }
            </Stack>
        </Container>
    )
}

export default Cart;