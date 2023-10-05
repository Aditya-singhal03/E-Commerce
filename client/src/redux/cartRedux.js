import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total: 0,
    },
    reducers:{
        addProduct:(state,action)=>{
            state.quantity+=1;
            state.products.push(action.payload);
            state.total+=action.payload.price*action.payload.quantity;
        },
        changeProductQuantity:(state,action)=>{
            let flag = false;
            state.products = state.products.map((prd)=>{
                if(prd._id===action.payload.id){
                    prd.quantity+=action.payload.cnt;
                    state.total+= (action.payload.cnt)* prd.price;
                    if(prd.quantity<=0) flag=true;
                }
                return prd;
            })
            if(flag){
                state.products = state.products.filter((prd)=> prd._id!==action.payload.id);
                state.quantity--;
            }
        }
    }
});

export const {addProduct,changeProductQuantity} = cartSlice.actions
export default cartSlice.reducer;