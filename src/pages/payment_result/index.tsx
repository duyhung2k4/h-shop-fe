import React, { useEffect } from "react";
import { Button, Image, LoadingOverlay, Stack, Text } from "@mantine/core";

import IconCheck from "@/assets/icon/check.svg";
import classes from "./style.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTER } from "@/constants/router";
import { useChangeStatusMutation } from "@/redux/api/order.api";

const PaymentResult: React.FC = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const [post, { isLoading }] = useChangeStatusMutation();

    useEffect(() => {
        handleChangeStatus();
    }, []);

    const handleChangeStatus = async () => {
        const orderId = queryParams.get("vnp_TxnRef");
        const status = queryParams.get("vnp_ResponseCode");

        if(!orderId || !status) {
            return;
        }
        await post({ orderId, status });
    }

    return (
        <Stack
            w={"100%"}
            h={"100vh"}
            justify="center"
            align="center"
        >
            <LoadingOverlay visible={isLoading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
            <Stack className={classes.card}>
                <Image
                    className={classes.icon}
                    src={IconCheck}
                />
                <Text>Thanh toán thành công</Text>
                <Button 
                    w={"100%"}
                    mt={20}
                    onClick={() => navigation(ROUTER.SHOPPING.href)}
                >Trang chủ</Button>
            </Stack>
        </Stack>
    )
}

export default PaymentResult;