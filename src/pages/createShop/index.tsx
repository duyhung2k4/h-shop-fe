import React from "react";
import { Button, Grid, Group, Image, Stack, Text, TextInput, Tooltip } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useCreateShopMutation } from "@/redux/api/shop.api";
import { ShopRequest } from "@/dto/request/shop";
import { useNotification } from "@/hook/notification.hook";
import { useNavigate } from "react-router";

import IconClose from "@/assets/icon/close-bold-svgrepo-com.svg";

const CreateShop: React.FC = () => {

    const [ post, { isLoading } ] = useCreateShopMutation();
    const noti = useNotification();
    const navigation = useNavigate();

    const form = useForm<FormShopCreate>({
        initialValues: {
            name: "",
            address: "",
        },
        validate: {
            name: (value) => value.length === 0 ? "Yêu cầu nhập tên shop" : null,
            address: (value) => value.length === 0 ? "Yêu cầu nhập địa chỉ shop" : null,
        }
    })

    const handleCreate = async (values: FormShopCreate) => {
        const res = await post(values as ShopRequest);
        if("error" in res) {
            noti.error("Thêm mới thất bạn");
            return;
        }

        noti.success("Thêm mới thành công");
        navigation(`/me/shop/${res.data.data?.ID || "not-found"}`)
    }

    return (
        <Stack>
            <Group
                justify="space-between"
            >
                <Text
                    style={{
                        fontWeight: 600,
                        fontSize: 24,
                    }}
                >Tạo mới shop</Text>
                <Tooltip
                    label="Hủy"
                >
                    <Image
                        src={IconClose}
                        height={20}
                        width={20}
                        style={{
                            cursor: "pointer"
                        }}
                        onClick={() => navigation("/me/shop")}
                    />
                </Tooltip>
            </Group>
            <form
                id="create-shop"
                onSubmit={form.onSubmit(handleCreate)}
            >
                <Grid gutter={20}>
                    <Grid.Col 
                        span={{
                            xs: 12,
                            md: 6
                        }}
                    >
                        <TextInput
                            withAsterisk
                            label="Tên shop"
                            placeholder="Nhập tên shop"
                            {...form.getInputProps("name")}
                        />
                    </Grid.Col>
                    <Grid.Col
                        span={{
                            xs: 12,
                            md: 6
                        }}
                    >
                        <TextInput
                            withAsterisk
                            label="Địa chỉ shop"
                            placeholder="Nhập địa chỉ shop"
                            {...form.getInputProps("address")}
                        />
                    </Grid.Col>
                </Grid>
            </form>
            <Group
                justify="end"
            >
                <Button
                    type="submit"
                    form="create-shop"
                    loading={isLoading}
                >Tạo mới</Button>
            </Group>
        </Stack>
    )
}

export default CreateShop;

type FormShopCreate = {
    name: string
    address: string
}