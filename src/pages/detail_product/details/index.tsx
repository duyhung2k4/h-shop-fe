import React, { useContext } from "react";
import { DetailProductContext, TypeDetailProductContext } from "..";
import { Table } from "@mantine/core";
import { DefaultField } from "@/model/product";

const DetaiProductDetails: React.FC = () => {

    const { product } = useContext<TypeDetailProductContext>(DetailProductContext);

    return (
        <Table mt={20} mb={60}>
            <Table.Thead>
                <Table.Tr>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
                {
                    Object.keys(product || {}).filter(item => DefaultField.filter(f => f === item).length === 0).map((item, index) =>
                        <Table.Tr key={index}>
                            <Table.Td>{item}</Table.Td>
                            <Table.Td>{product?.[item]}</Table.Td>
                        </Table.Tr>
                    )
                }
            </Table.Tbody>
        </Table>
    )
}

export default DetaiProductDetails;