import React from "react";
import { Checkbox, Stack, Text } from "@mantine/core";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

import classes from "./styles.module.css";
import { changeStatusFilter } from "@/redux/slice/typeProductSlice";


const HomeFilter: React.FC = () => {

    const dispatch = useAppDispatch();

    const {
        categorys,
        initObjectCategoryFilter,
    } = useAppSelector((state: RootState) => state.typeProductSlice);

    return (
        <Stack>
            <Text className={classes.type_product}>Loại sản phẩm</Text>
            <Stack gap={15}>
                {
                    categorys.map((item) =>
                        <Checkbox
                            key={item.ID}
                            label={item.name}
                            color="#000"
                            classNames={{
                                root: classes.checkbox,
                                label: classes.checkbox,
                                input: classes.checkbox,
                            }}
                            checked={initObjectCategoryFilter[item.code]}
                            onChange={(e) => {
                                if (!e.currentTarget.checked && initObjectCategoryFilter[item.code]) {
                                    return
                                }
                                dispatch(changeStatusFilter({
                                    key: item.code,
                                    value: e.currentTarget.checked,
                                }))
                            }}
                        />
                    )
                }
            </Stack>
        </Stack>
    )
}

export default HomeFilter;