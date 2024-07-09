import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    product : {
        id : 1,
        details : [{
            title : "",
            price : 0,
            ratings : "",
            no_of_reviews : 0
        }],
        recommendation : ""
        
    }
}

export const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {
        addProduct : (state , action) => {
            const product = {
                id : nanoid(),
                details : action.payload,
                recommendation : ""
            }
            state.product = (product);
        },
        getRecommendation : (state,action) => {
            const product = {
                id : nanoid(),
                details : state.product.details,
                recommendation : action.payload
            }
            state.product = (product);
        }
    }
})

export const {addProduct,getRecommendation} = productSlice.actions

export const productReducer = productSlice.reducer