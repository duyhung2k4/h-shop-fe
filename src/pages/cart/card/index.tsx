import React, { useEffect, useMemo } from "react";
import { ActionIcon, Box, Grid, Group, Image, Text } from "@mantine/core";
import { ProductModel, ProductObjectDefaultField } from "@/model/product";
import { useGetAvatarByProductIdQuery } from "@/redux/api/file.api";
import { convertByteToSrc } from "@/utils/file";

import IconTrolley from "@/assets/icon/trolley.svg";
import IconTrolleyWhite from "@/assets/icon/trolley_white.svg";
import classes from "./style.module.css";

import dayjs from "dayjs";
import { useCartMutation, useIsCartQuery } from "@/redux/api/product.api";
import { useNavigate } from "react-router";
import { ROUTER } from "@/constants/router";

const Card: React.FC<ProductModel> = (props) => {
    const {
        data: dataAvatar,
        refetch: refetchAvatar,
    } = useGetAvatarByProductIdQuery(props?.[ProductObjectDefaultField._id] || "");

    const navigation = useNavigate();

    const [cart, { isLoading: isLoadingCart }] = useCartMutation();
    const {
        data: dataIsCart,
        refetch: refetchIsCart,
        isFetching: isLoadingIsCart,
    } = useIsCartQuery(props[ProductObjectDefaultField._id]);

    useEffect(() => {
        refetchAvatar();
    }, []);

    const avatar = useMemo(() => {
        return dataAvatar?.data;
    }, [dataAvatar]);

    const handleCart = async () => {
        await cart(props[ProductObjectDefaultField._id]);
        refetchIsCart();
    }

    return (
        <Grid className={classes.order} gutter={20}>
            <Grid.Col span={5}>
                <Group align="start" gap={10}>
                    <Image
                        src={avatar && convertByteToSrc(avatar.format, avatar.data)}
                        style={{
                            objectFit: "cover",
                            width: `calc(30% - 5px)`,
                            aspectRatio: 1 / 1,
                        }}
                    />
                    <Box
                        style={{ width: `calc(70% - 5px)` }}
                        className={classes.name}
                        onClick={() => navigation(`${ROUTER.DETAIL_PRODUCT.href}/${props[ProductObjectDefaultField._id]}`)}
                    >{props?.[ProductObjectDefaultField.name]}</Box>
                </Group>
            </Grid.Col>
            <Grid.Col span={5}>
                <Group h={"100%"} w={"100%"} align="center" justify="center">
                    <Text>
                        <span style={{ fontWeight: 600 }}>Ngày tạo: </span>
                        {props?.[ProductObjectDefaultField.createAt] && dayjs(props[ProductObjectDefaultField.createAt]).format("DD-MM-YYYY")}
                    </Text>
                </Group>
            </Grid.Col>
            <Grid.Col span={2}>
                <Group h={"100%"} w={"100%"} align="center" justify="center">
                    <ActionIcon
                        classNames={{ root: `${classes.trolley} ${dataIsCart?.data && classes.trolley_active}` }}
                        loading={isLoadingCart || isLoadingIsCart}
                        onClick={handleCart}
                    >
                        <Image src={dataIsCart?.data ? IconTrolleyWhite : IconTrolley} />
                    </ActionIcon>
                </Group>
            </Grid.Col>
        </Grid>
    )
}

export default Card;