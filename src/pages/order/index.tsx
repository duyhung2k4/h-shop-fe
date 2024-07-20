import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hook";
import { ActionIcon, Box, Button, Grid, Group, Image, Modal, NumberFormatter, NumberInput, Select, Stack, Text } from "@mantine/core";
import { useNavigate } from "react-router";

import { convertByteToSrc } from "@/utils/file";
import { ROUTER } from "@/constants/router";
import { ProductObjectDefaultField } from "@/model/product";
import { GroupOrderReq } from "@/dto/request/order";
import { useOrderMutation } from "@/redux/api/order.api";
import { useNotification } from "@/hook/notification.hook";
import { removeCache } from "@/utils/cache";

import IconBack from "@/assets/icon/back-svgrepo-com.svg";
import classes from "./style.module.css";
import { useGetAvatarByProductIdQuery } from "@/redux/api/file.api";

const Order: React.FC = () => {

    const order = useAppSelector(state => state.orderSlice.order);
    const [amount, setAmount] = useState<number>(1);
    const [count, setCount] = useState<number>(0);
    const [modal, setModal] = useState<boolean>(false);
    const [typePay, setTypePay] = useState<string>("online");

    const [post, { isLoading }] = useOrderMutation();
    const {
        data: avatar,
        refetch: refetchAvatar,
    } = useGetAvatarByProductIdQuery(order?.product?.[ProductObjectDefaultField._id]);
    const noti = useNotification();
    const navigation = useNavigate();

    useEffect(() => {
        if (!order) {
            navigation(ROUTER.SHOPPING.href);
        }
        refetchAvatar();
    }, []);

    useEffect(() => {
        if (order) {
            setCount(order.typeInWarehouse ? order.typeInWarehouse.count : order.warehouse.count);
        }
    }, [order]);

    const handleOrder = async () => {
        if (!order) {
            return
        }
        const product = order.product;
        const warehouse = order.warehouse;
        const typeInWarehouse = order.typeInWarehouse;

        const groupOrder: GroupOrderReq = {
            address: "",
            typePay,
            orderDescription: "thanh toan san pham",
            orderType: "product",
            orders: [
                {
                    productId: product[ProductObjectDefaultField._id],
                    shopId: product[ProductObjectDefaultField.profileId],
                    warehouseId: warehouse.id,
                    typeWarehouseId: typeInWarehouse?.id,
                    amount: amount,
                    total: amount * (typeInWarehouse ? typeInWarehouse.price : product[ProductObjectDefaultField.price])
                }
            ],
        };

        const result = await post(groupOrder);

        removeCache("order");

        if ("error" in result) {
            noti.error("Đặt hàng thất bại");
            return
        };

        if(typePay === "offline") {
            navigation(ROUTER.SHOPPING.href);
            noti.success("Đặt hàng thành công");
            return;
        }

        const urlPayment = result.data.data?.vnpHref;
        if (!urlPayment) {
            noti.error("Đặt hàng thất bại");
            return
        }

        window.location.href = urlPayment;
    }

    const cancelOrder = () => {
        setModal(false);
        navigation(ROUTER.SHOPPING.href);
        removeCache("order");
    }

    if (!order) {
        return <></>
    }

    return (
        <>
            <Stack pl={100} pr={100} pt={20}>
                <Group>
                    <ActionIcon
                        style={{
                            backgroundColor: "#FFF"
                        }}
                        onClick={() => setModal(true)}
                    >
                        <Image src={IconBack} height={26} width={26} />
                    </ActionIcon>
                    <Text fw={600} size="xl" >Đặt hàng</Text>
                </Group>
                <Grid className={classes.order} gutter={20}>
                    <Grid.Col span={5}>
                        <Group align="start" gap={10}>
                            <Image
                                loading="lazy"
                                src={avatar?.data && convertByteToSrc(avatar.data.format, avatar.data.data)}
                                style={{
                                    objectFit: "cover",
                                    width: `calc(25% - 5px)`,
                                    aspectRatio: 1 / 1,
                                }}
                            />

                            <Box style={{ width: `calc(75% - 5px)` }} className={classes.name}>{order.product?.[ProductObjectDefaultField.name]}</Box>
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <Group h={"100%"} w={"100%"} align="center" justify="center">
                            <Text> <span style={{ fontWeight: 600 }}>Phân loại: </span>{order.typeInWarehouse?.name || "không có"}</Text>
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <Group h={"100%"} w={"100%"} align="center">
                            <NumberInput
                                min={1}
                                max={count}
                                value={amount}
                                onChange={e => setAmount(Number(e))}
                            />
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <Group h={"100%"} w={"100%"} align="center" justify="center">
                            <Text><span style={{ fontWeight: 600 }}>Kho: </span>{count - amount}</Text>
                        </Group>
                    </Grid.Col>
                </Grid>
            </Stack>
            <Stack pos="relative" mt={20}>
                <Group classNames={{ root: classes.payment_bar }} >
                    <Group className={classes.content_payment_bar}>
                        <Text>
                            <span style={{ fontWeight: 600 }}>Thanh toán: &nbsp;</span>
                            <NumberFormatter
                                value={amount * (order.typeInWarehouse?.price || order.product[ProductObjectDefaultField.price])}
                                suffix=" VND"
                                thousandSeparator
                            />
                        </Text>
                        <Group>
                            <Select
                                value={typePay}
                                onChange={value => setTypePay(value || "online")}
                                data={[
                                    { label: "Thanh toán trực tuyến", value: "online" },
                                    { label: "Trả sau", value: "offline" },
                                ]}
                            />
                            <Button
                                loading={isLoading}
                                onClick={handleOrder}
                            >Mua hàng</Button>
                        </Group>
                    </Group>
                </Group>
            </Stack>

            <Modal
                opened={modal}
                onClose={() => setModal(false)}
                title={<Text fw={600}>Xác nhận hủy</Text>}
            >
                <Text>
                    Nếu bạn quay lại, đơn đặt hàng của bạn sẽ bị &nbsp;
                    <span style={{ color: "red", fontWeight: 600 }}>Hủy</span>
                </Text>
                <Grid mt={20}>
                    <Grid.Col span={6}>
                        <Button
                            className={classes.btn_accept}
                            onClick={cancelOrder}
                        >Xác nhận</Button>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Button
                            w={"100%"}
                            onClick={() => setModal(false)}
                        >Hủy</Button>
                    </Grid.Col>
                </Grid>
            </Modal>
        </>
    )
}

export default Order;