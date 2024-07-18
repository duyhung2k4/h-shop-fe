import { TypeInWarehouseRes } from "@/dto/response/typeInWarehouse.response";
import { WarehouseRes } from "@/dto/response/warehouse.response";
import { ProductModel } from "@/model/product";
import { getCache } from "@/utils/cache";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TypeOrderSlice {
    order?: {
        product: ProductModel
        warehouse: WarehouseRes
        typeInWarehouse?: TypeInWarehouseRes
    }
}

const initialState: TypeOrderSlice = {
}

const orderSlice = createSlice({
    name: "order",
    reducers: {
        pendingOrder: (state, action: PayloadAction<{
            product: ProductModel
            warehouse: WarehouseRes
            typeInWarehouse?: TypeInWarehouseRes
        }>) => {
            state.order = action.payload;
        },
        clearOrder: (state) => {
            state.order = undefined;
        },
        loadCacheOrder: (state) => {
            const orderCache = getCache<{
                product: ProductModel
                warehouse: WarehouseRes
                typeInWarehouse?: TypeInWarehouseRes
            }>("order");

            state.order = orderCache;
        }
    },
    initialState,
});

export const {
    pendingOrder, 
    clearOrder,
    loadCacheOrder,
} = orderSlice.actions;

export default orderSlice;