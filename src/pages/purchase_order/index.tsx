import React, { useEffect } from "react";
import Card from "./card";
import { useGetPurchaseOrderQuery } from "@/redux/api/order.api";
import { Container, LoadingOverlay, Stack } from "@mantine/core";

const PuchaseOrder: React.FC = () => {
    
    const {
        data,
        isFetching,
        refetch
    } = useGetPurchaseOrderQuery(null);

    useEffect(() => {
        refetch();
    }, []);

    return (
        <Container>
            <LoadingOverlay visible={isFetching} overlayProps={{ radius: "sm", blur: 2 }} />
            <Stack gap={20} mt={20}>
                {
                    data?.data?.map(item =>
                        <Card
                            key={item.ID}
                            {...item}
                        />
                    )
                }
            </Stack>
        </Container>
    )
}

export default PuchaseOrder;