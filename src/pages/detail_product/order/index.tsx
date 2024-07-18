import React, { useContext } from "react";
import { ActionIcon, Button, Divider, Group, Image, NumberFormatter, Stack, Text } from "@mantine/core";
import IconHeart from "@/assets/icon/heart_white.svg";

import classes from "./style.module.css";
import { DetailProductContext, TypeDetailProductContext } from "..";
import { ProductModel, ProductObjectDefaultField } from "@/model/product";
import { useAppDispatch } from "@/redux/hook";
import { pendingOrder } from "@/redux/slice/orderSlice";
import { useNavigate } from "react-router";
import { ROUTER } from "@/constants/router";
import { cache } from "@/utils/cache";
import { WarehouseRes } from "@/dto/response/warehouse.response";
import { TypeInWarehouseRes } from "@/dto/response/typeInWarehouse.response";

const DetailProductOrder: React.FC = () => {
    const {
        typeSelect,
        product,
        warehouse,
    } = useContext<TypeDetailProductContext>(DetailProductContext);

    const dispatch = useAppDispatch();
    const navigation = useNavigate();

    const handleOrder = () => {
        if (!product || !warehouse) {
            return
        }

        dispatch(pendingOrder({
            product,
            warehouse,
            typeInWarehouse: typeSelect || undefined,
        }));

        cache<{
            product: ProductModel
            warehouse: WarehouseRes
            typeInWarehouse?: TypeInWarehouseRes
        }>("order", {
            product,
            warehouse,
            typeInWarehouse: typeSelect || undefined,
        })

        navigation(ROUTER.ORDER.href);
    }

    return (
        <Stack classNames={{ root: classes.root }}>
            <Group gap={60} classNames={{ root: classes.box_order }}>
                <Text>
                    <span style={{ fontWeight: 600 }}>Giá: </span>
                    <NumberFormatter
                        value={typeSelect ? typeSelect.price : product?.[ProductObjectDefaultField.price]}
                        thousandSeparator
                        suffix=" VND"
                    />
                </Text>
                <Divider size="sm" orientation="vertical" />
                <Group>
                    <Button onClick={handleOrder}>Mua</Button>
                    <ActionIcon classNames={{ root: classes.icon_heart }}>
                        <Image src={IconHeart} />
                    </ActionIcon>
                </Group>
            </Group>
        </Stack>
    )
}

export default DetailProductOrder;