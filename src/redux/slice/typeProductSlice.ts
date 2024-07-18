import { CategoryModel } from "@/model/category";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { typeProductApi } from "../api/typeProduct.api";

interface TypeProductSlice {
    categorys: CategoryModel[]
    initObjectCategoryFilter: Record<string, boolean>,
    categoryId: number | null
}

const initialState: TypeProductSlice = {
    categorys: [],
    initObjectCategoryFilter: {},
    categoryId: null
}

const typeProductSlice  = createSlice({
    name: "typeProduct",
    initialState,
    reducers: {
        changeStatusFilter: (state, action: PayloadAction<{ key: string, value: boolean }>) => {
            state.initObjectCategoryFilter[action.payload.key] = action.payload.value;
            Object.keys(state.initObjectCategoryFilter).forEach(key => {
                if(key !== action.payload.key) {
                    state.initObjectCategoryFilter[key] = false;
                } else {
                    state.initObjectCategoryFilter[key] = action.payload.value;
                    const category = state.categorys.find(item => item.code === key);
                    state.categoryId = category?.ID || null;
                }
            })
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(typeProductApi.endpoints.getCategory.matchFulfilled, (state, { payload }) => {
            state.categorys = payload.data || [];
            (payload.data || []).forEach((item, index) => {
                state.initObjectCategoryFilter[item.code] = index === 0 ? true : false;
                if(index === 0) {
                    state.categoryId = item.ID;
                }
            })
        })
    }
});

export const {
    changeStatusFilter,
} = typeProductSlice.actions;

export default typeProductSlice;