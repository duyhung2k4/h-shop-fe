import React from "react";
import { Button, FileInput, Grid, Group, NumberInput, Stack, Text, Textarea, TextInput, Tooltip } from "@mantine/core";
import { IconTrash, IconX } from "@tabler/icons-react";
import { useNavigate, useParams } from "react-router";
import { useForm } from "@mantine/form";
import { useCreateProductMutation } from "@/redux/api/product.api";
import { fileToBytes } from "@/utils/file";
import { useNotification } from "@/hook/notification.hook";

const CreateProduct: React.FC = () => {
    const { shop_id } = useParams();
    const navigation = useNavigate();
    const [post, { isLoading }] = useCreateProductMutation();
    const noti = useNotification();

    if (shop_id === undefined) {
        navigation("/me/shop/not-found");
    }

    const form = useForm<FormProductCreate>({
        initialValues: {
            files: [],
            name: "",
            price: 0,
            fields: []
        },
    });

    const handleCreateProduct = async (values: FormProductCreate) => {
        const  { dataReturn, error } = await fileToBytes(values.files);

        if(error !== null) {
            console.log(error);
            return
        }

        let newProduct: Record<string, any> = {
            files: dataReturn,
            infoProduct: {
                name: values.name,
                shopId: Number(shop_id || 0),
                price: values.price,
            },
        };

        values.fields.forEach((f) => {
            newProduct.infoProduct[`${f.name}`] = f.value;
        });

        const result = await post(newProduct);
        if ("error" in result) {
            noti.error("Tạo sản phẩm thất bại");
            return;
          }

          noti.success("Tạo sản phẩm thành công");
          navigation(`/me/shop/${shop_id}`);
    }

    return (
        <Stack>
            <Group
                justify="space-between"
            >
                <Text>Tạo mới sản phẩm</Text>
                <Tooltip label="Hủy">
                    <IconX
                        onClick={() => navigation(`/me/shop/${shop_id}`)}
                        style={{ cursor: "pointer" }}
                    />
                </Tooltip>
            </Group>
            <form
                id="create-product"
                onSubmit={form.onSubmit(handleCreateProduct)}
            >
                <Grid>
                    <Grid.Col span={{ xs: 12, md: 6 }}>
                        <FileInput
                            {...form.getInputProps("files")}
                            placeholder="Chọn file"
                            multiple
                            clearable
                            accept="image/*"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ xs: 12, md: 6 }}>
                        <TextInput
                            placeholder="Tên sản phẩm"
                            {...form.getInputProps("name")}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ xs: 12, md: 6 }}>
                        <NumberInput
                            placeholder="Giá"
                            {...form.getInputProps("price")}
                        />
                    </Grid.Col>
                </Grid>
                {
                    form.values.fields.map((field, index) => (
                        <Grid key={index}>
                            <Grid.Col span={{ xs: 4 }}>
                                <Textarea
                                    placeholder="Mô tả"
                                    value={field.name}
                                    onChange={(e) => {
                                        form.setValues({
                                            ...form.values,
                                            fields: form.values.fields.map((f, i) =>
                                                index === i ? {
                                                    name: e.target.value,
                                                    value: f.value,
                                                } : f
                                            )
                                        })
                                    }}
                                />
                            </Grid.Col>
                            <Grid.Col span={{ xs: 7 }}>
                                <Textarea
                                    placeholder="Giá trị"
                                    value={field.value}
                                    onChange={(e) => {
                                        form.setValues({
                                            ...form.values,
                                            fields: form.values.fields.map((f, i) =>
                                                index === i ? {
                                                    name: f.name,
                                                    value: e.target.value,
                                                } : f
                                            )
                                        })
                                    }}
                                />
                            </Grid.Col>
                            <Grid.Col span={{ xs: 1 }}>
                                <Group h={"100%"} justify="end" align="center" >
                                    <Tooltip label="Xóa">
                                        <IconTrash 
                                            style={{ cursor: "pointer" }}
                                            onClick={() => {
                                                const listField = form.values.fields;
                                                listField.splice(index, 1)
                                                form.setValues({
                                                    ...form.values,
                                                    fields: listField,
                                                })
                                            }}
                                        />
                                    </Tooltip>
                                </Group>
                            </Grid.Col>
                        </Grid>
                    ))
                }
                <Group justify="start" mt={20}>
                    <Button
                        onClick={() => {
                            form.setValues({
                                ...form.values,
                                fields: [...form.values.fields, { name: "", value: "" }]
                            })
                        }}
                    >Thêm mô tả</Button>
                </Group>
            </form>
            <Group justify="end">
                <Button
                    type="submit"
                    form="create-product"
                    loading={isLoading}
                >Hoàn tất</Button>
            </Group>
        </Stack>
    )
}

export default CreateProduct;

type FormProductCreate = {
    files: File[]
    name: string
    price: number
    fields: {
        name: string
        value: any
    }[]
}