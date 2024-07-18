import React, { createContext, useEffect, useState } from "react";
import { ROUTER } from "@/constants/router";
import { ProductModel } from "@/model/product";
import { useGetDetailProductQuery, useGetTypeInWarehouseQuery, useGetWarehouseQuery } from "@/redux/api/product.api";
import { ActionIcon, Container, Grid, Group, Image, LoadingOverlay, Text } from "@mantine/core";
import { useNavigate, useParams } from "react-router";
import { useGetImagesByProductIdQuery } from "@/redux/api/file.api";
import { ImageProductModel } from "@/model/imageProduct";
import { TypeInWarehouseRes } from "@/dto/response/typeInWarehouse.response";
import { WarehouseRes } from "@/dto/response/warehouse.response";

import DetailProductImages from "./images";
import DetailProductIntro from "./intro";
import DetailProductTypeProduct from "./typeProduct";
import DetailProductWarehouse from "./warehouse";
import DetailProductOrder from "./order";

import IconBack from "@/assets/icon/back-svgrepo-com.svg";
import DetaiProductDetails from "./details";



const DetailProduct: React.FC = () => {
    const { id } = useParams();
    const navigation = useNavigate();
    const [product, setProduct] = useState<ProductModel | null>(null);
    const [show, setShow] = useState<ImageProductModel | null>(null);
    const [warehouse, setWarehouse] = useState<WarehouseRes | null>(null);
    const [listImage, setListImage] = useState<ImageProductModel[]>([]);
    const [listTypeProduct, setListTypeProduct] = useState<TypeInWarehouseRes[]>([]);
    const [price, setPrice] = useState<number | null>(null);
    const [typeSelect, setTypeSelect] = useState<TypeInWarehouseRes | null>(null);

    const {
        data: dataProduct,
        refetch: refetchProduct,
    } = useGetDetailProductQuery(id || "");
    const {
        data: dataImages,
        refetch: refetchImages,
    } = useGetImagesByProductIdQuery(id || "");
    const {
        data: dataTypeInWarehouses,
        refetch: refetchTypeInWarehouses,
    } = useGetTypeInWarehouseQuery(id || "");
    const {
        data: dataWarehouse,
        refetch: refetchWarehouse,
    } = useGetWarehouseQuery(id || "");

    useEffect(() => {
        setProduct(dataProduct?.data || null);

        setShow(dataImages?.data?.avatar || null);

        setListImage(dataImages?.data ? [
            dataImages.data.avatar,
            ...dataImages.data.images,
        ] : []);

        setWarehouse(dataWarehouse?.data || null);

        setListTypeProduct(dataTypeInWarehouses?.data || []);
    }, [
        dataProduct,
        dataImages,
        dataTypeInWarehouses,
        dataWarehouse,
    ]);

    useEffect(() => {
        if (listTypeProduct.length > 0) {
            setTypeSelect(listTypeProduct[0]);
        }
    }, [listTypeProduct]);

    useEffect(() => {
    }, [dataImages]);

    useEffect(() => {
        refetchProduct();
        refetchImages();
        refetchTypeInWarehouses();
        refetchWarehouse();
    }, []);

    if (!product) {
        return (
            <LoadingOverlay visible overlayProps={{ radius: "sm", blur: 2 }} />
        )
    }

    return (
        <DetailProductContext.Provider
            value={{
                show,
                product,
                warehouse,
                listImage,
                listTypeProduct,
                price,
                typeSelect,
                setShow,
                setProduct,
                setWarehouse,
                setListImage,
                setListTypeProduct,
                setPrice,
                setTypeSelect,
            }}
        >
            <Container>
                <Group w={"100%"} mt={20}>
                    <Group>
                        <ActionIcon
                            style={{
                                backgroundColor: "#FFF"
                            }}
                            onClick={() => navigation(ROUTER.SHOPPING.href)}
                        >
                            <Image src={IconBack} height={26} width={26} />
                        </ActionIcon>
                        <Text fw={600} size="xl" >Chi tiết sản phẩm</Text>
                    </Group>
                    <Grid w={"100%"}>
                        <Grid.Col span={3}>
                            <DetailProductIntro />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <DetailProductImages />
                            <DetaiProductDetails/>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            {
                                listTypeProduct.length > 0 ?
                                    <DetailProductTypeProduct /> :
                                    <DetailProductWarehouse />
                            }
                        </Grid.Col>
                    </Grid>
                </Group>

            </Container>
            <DetailProductOrder />
        </DetailProductContext.Provider>
    )
}

export const DetailProductContext = createContext<TypeDetailProductContext>({
    show: null,
    product: null,
    warehouse: null,
    listImage: [],
    listTypeProduct: [],
    price: null,
    typeSelect: null,
    setShow: () => { },
    setListImage: () => { },
    setProduct: () => { },
    setWarehouse: () => { },
    setListTypeProduct: () => { },
    setPrice: () => { },
    setTypeSelect: () => { },
})

export type TypeDetailProductContext = {
    show: ImageProductModel | null
    product: ProductModel | null
    warehouse: WarehouseRes | null
    listImage: ImageProductModel[]
    listTypeProduct: TypeInWarehouseRes[]
    price: number | null
    typeSelect: TypeInWarehouseRes | null
    setShow: React.Dispatch<React.SetStateAction<ImageProductModel | null>>
    setProduct: React.Dispatch<React.SetStateAction<ProductModel | null>>
    setWarehouse: React.Dispatch<React.SetStateAction<WarehouseRes | null>>
    setListImage: React.Dispatch<React.SetStateAction<ImageProductModel[]>>
    setListTypeProduct: React.Dispatch<React.SetStateAction<TypeInWarehouseRes[]>>
    setPrice: React.Dispatch<React.SetStateAction<number | null>>
    setTypeSelect: React.Dispatch<React.SetStateAction<TypeInWarehouseRes | null>>
}

export default DetailProduct;