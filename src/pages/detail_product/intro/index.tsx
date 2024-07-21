import React, { useContext, useEffect, useMemo } from "react";
import { Modal, Select, Stack, Text, TextInput } from "@mantine/core";

import { ProductObjectDefaultField } from "@/model/product";
import { DetailProductContext, TypeDetailProductContext } from "..";
import { DateInput } from "@mantine/dates";
import { useGetProfileQuery } from "@/redux/api/auth.api";

import classes from "../style.module.css";
import dayjs from "dayjs";



const DetailProductIntro: React.FC = () => {

    const { product } = useContext<TypeDetailProductContext>(DetailProductContext);
    const { modalInfo, setModalInfo } = useContext<TypeDetailProductContext>(DetailProductContext);
    
    const {
        data: dataProfile,
        refetch: refetchProfile,
    } = useGetProfileQuery(product?.[ProductObjectDefaultField.profileId] || 0);

    const profile = useMemo(() => {
        return dataProfile?.data;
    }, [dataProfile]);

    useEffect(() => {
        refetchProfile();
    }, []);

    if (!product) {
        return <></>
    }

    return (
        <Stack gap={0}>
            <Text classNames={{ root: classes.name_product }}>{product[ProductObjectDefaultField.name]}</Text>
            <Modal
                opened={modalInfo}
                title="Thông tin người đăng bán"
                onClose={() => setModalInfo(false)}
                centered
                classNames={{
                    header: classes.header,
                    title: classes.title,
                }}
            >
                <form>
                    <Stack gap={12} w={"100%"} mt={20}>
                        <TextInput
                            label="Tên người dùng"
                            value={profile?.name}
                            readOnly
                        />
                        <TextInput
                            label="Số điện thoại"
                            value={profile?.phone}
                            readOnly
                        />
                        <Select
                            label="Giới tính"
                            value={profile?.gender}
                            readOnly
                            data={[
                                { label: "Nam", value: "Nam" },
                                { label: "Nữ", value: "Nữ" },
                            ]}
                        />
                        <TextInput
                            label="Địa chỉ"
                            value={profile?.address}
                            readOnly
                        />
                        <DateInput
                            label="Ngày sinh"
                            value={dayjs(profile?.birth).toDate()}
                            readOnly
                            valueFormat="DD/MM/YYYY"
                        />
                    </Stack>
                </form>
            </Modal>
        </Stack>
    )
}

export default DetailProductIntro;