import React, { useEffect, useMemo } from "react";
import classes from "./style.module.css";
import { Box, Grid, Group, Image, NumberFormatter, Text } from "@mantine/core";
import { GroupOrderModel } from "@/model/groupOrder";
import { useGetDetailProductQuery } from "@/redux/api/product.api";
import { ProductObjectDefaultField } from "@/model/product";
import { useGetAvatarByProductIdQuery } from "@/redux/api/file.api";
import { convertByteToSrc } from "@/utils/file";

import dayjs from "dayjs";
import { useNavigate } from "react-router";
import { ROUTER } from "@/constants/router";

const Card: React.FC<GroupOrderModel> = (props) => {

    const navigate = useNavigate();

    const {
        data: dataProduct,
        refetch: refetchProduct,
    } = useGetDetailProductQuery(props.orders[0].productId || "");
    const {
        data: dataAvatar,
        refetch: refetchAvatar,
    } = useGetAvatarByProductIdQuery(props.orders[0].productId || "");

    useEffect(() => {
        refetchProduct();
        refetchAvatar();
    }, []);

    const product = useMemo(() => {
        return dataProduct?.data;
    }, [dataProduct]);
    const avatar = useMemo(() => {
        return dataAvatar?.data;
    }, [dataAvatar])

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
                        onClick={() => navigate(`${ROUTER.DETAIL_PRODUCT}/${props.orders[0].productId}`)}
                    >{product?.[ProductObjectDefaultField.name]}</Box>
                </Group>
            </Grid.Col>
            <Grid.Col span={4}>
                <Group h={"100%"} w={"100%"} align="center" justify="center">
                    <Text> 
                        <span style={{ fontWeight: 600 }}>Ngày mua: </span> 
                        {props.CreatedAt && dayjs(props.CreatedAt).format("DD-MM-YYYY")}
                    </Text>
                </Group>
            </Grid.Col>
            <Grid.Col span={3}>
                <Group h={"100%"} w={"100%"} align="center" justify="start">
                    <Text>
                        <span style={{ fontWeight: 600 }}>Thanh toán: </span> 
                        <NumberFormatter
                            value={props.total}
                            thousandSeparator
                            suffix="VND"
                        />
                    </Text>
                </Group>
            </Grid.Col>
        </Grid>
    )
}

export default Card;