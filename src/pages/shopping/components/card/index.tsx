import React, { useEffect } from "react";
import { ActionIcon, Group, Image, NumberFormatter, Rating, Stack, Text } from "@mantine/core";
import { ProductObjectDefaultField } from "@/model/product";

import IconHeaderWhite from "@/assets/icon/heart_white.svg";
import IconTrolley from "@/assets/icon/trolley.svg";
import IconTrolleyWhite from "@/assets/icon/trolley_white.svg";

import classes from "./style.module.css";
import { useGetAvatarByProductIdQuery } from "@/redux/api/file.api";
import { useNavigate } from "react-router";
import { ROUTER } from "@/constants/router";
import { convertByteToSrc } from "@/utils/file";
import { useCartMutation, useHeartMutation, useIsCartQuery, useIsHeartQuery } from "@/redux/api/product.api";

export type CardProductProps = Record<string, any>;
const CardProduct: React.FC<CardProductProps> = (props) => {
    const {
        data,
        refetch,
    } = useGetAvatarByProductIdQuery(props[ProductObjectDefaultField._id]);

    const navigation = useNavigate();
    const [heart, { isLoading: isLoadingHeart }] = useHeartMutation();
    const {
        data: dataIsHeart,
        refetch: refetchIsHeart,
        isFetching: isLoadingIsHeart,
    } = useIsHeartQuery(props[ProductObjectDefaultField._id]);

    const [cart, { isLoading: isLoadingCart }] = useCartMutation();
    const {
        data: dataIsCart,
        refetch: refetchIsCart,
        isFetching: isLoadingIsCart,
    } = useIsCartQuery(props[ProductObjectDefaultField._id]);

    useEffect(() => {
        refetch();
        refetchIsHeart();
        refetchIsCart();
    }, []);

    const handleNavigation = () => {
        navigation(`${ROUTER.DETAIL_PRODUCT.href}/${props[ProductObjectDefaultField._id]}`)
    }

    const handleHeart = async () => {
        await heart(props[ProductObjectDefaultField._id]);
        refetchIsHeart();
    }

    const handleCart = async () => {
        await cart(props[ProductObjectDefaultField._id]);
        refetchIsCart();
    }

    return (
        <Stack classNames={{ root: classes.root }} gap={0}>
            <Group w={"100%"} justify="end">
                <ActionIcon 
                    classNames={{ root: `${classes.icon} ${dataIsHeart?.data && classes.icon_active}` }}
                    loading={isLoadingHeart || isLoadingIsHeart}
                    onClick={handleHeart}
                >
                    <Image src={IconHeaderWhite} />
                </ActionIcon>
            </Group>
            <Image
                classNames={{ root: classes.avatar }}
                onClick={handleNavigation}
                src={ data?.data ? convertByteToSrc(data.data.format, data.data.data) : undefined }
            />
            <Stack gap={8} mt={8}>
                <Text 
                    classNames={{ root: classes.name }}
                    onClick={handleNavigation}
                >{props[ProductObjectDefaultField.name]}</Text>
                <Group justify="space-between">
                    <Rating value={5} />
                    <ActionIcon 
                        classNames={{ root: `${classes.trolley} ${dataIsCart?.data && classes.trolley_active}` }}
                        loading={isLoadingCart || isLoadingIsCart}
                        onClick={handleCart}
                    >
                        <Image src={dataIsCart?.data ? IconTrolleyWhite : IconTrolley} />
                    </ActionIcon>
                </Group>
                <NumberFormatter suffix="VND" value={props[ProductObjectDefaultField.price]} thousandSeparator />
            </Stack>
        </Stack>
    )
}

export default CardProduct;