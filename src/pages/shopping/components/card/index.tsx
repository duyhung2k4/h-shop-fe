import React, { useEffect } from "react";
import { ActionIcon, Group, Image, NumberFormatter, Stack, Text } from "@mantine/core";
import { ProductObjectDefaultField } from "@/model/product";

import { useGetAvatarByProductIdQuery } from "@/redux/api/file.api";
import { useNavigate } from "react-router";
import { ROUTER } from "@/constants/router";
import { convertByteToSrc } from "@/utils/file";
import { useHeartMutation, useIsHeartQuery } from "@/redux/api/product.api";
import { TOKEN_TYPE } from "@/model/variable";

import IconHeaderWhite from "@/assets/icon/heart_white.svg";
import classes from "./style.module.css";
import Cookies from "js-cookie";
import { useNotification } from "@/hook/notification.hook";



export type CardProductProps = Record<string, any>;
const CardProduct: React.FC<CardProductProps> = (props) => {
    const {
        data,
        refetch,
    } = useGetAvatarByProductIdQuery(props[ProductObjectDefaultField._id]);

    const navigation = useNavigate();
    const noti = useNotification();
    const [heart, { isLoading: isLoadingHeart }] = useHeartMutation();
    const {
        data: dataIsHeart,
        refetch: refetchIsHeart,
        isFetching: isLoadingIsHeart,
    } = useIsHeartQuery(props[ProductObjectDefaultField._id]);

    useEffect(() => {
        refetch();
        refetchIsHeart();
    }, []);

    const handleNavigation = () => {
        navigation(`${ROUTER.DETAIL_PRODUCT.href}/${props[ProductObjectDefaultField._id]}`)
    }

    const handleHeart = async () => {
        if(!Cookies.get(TOKEN_TYPE.ACCESS_TOKEN)) {
            noti.warning("Bạn chưa đăng nhập");
            return;
        }

        await heart(props[ProductObjectDefaultField._id]);
        refetchIsHeart();
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
                <NumberFormatter 
                    suffix=" VND" 
                    value={props[ProductObjectDefaultField.price]} 
                    thousandSeparator 
                    style={{
                        width: "100%",
                        padding: 8,
                        borderRadius: 8,
                        backgroundColor: "#000",
                        color: "#FFF",
                        textAlign: "center",
                        marginTop: 20,
                    }}
                />
            </Stack>
        </Stack>
    )
}

export default CardProduct;