import {  createSlice } from "@reduxjs/toolkit";
const Cartslice=createSlice(
    {
        name:"cart",
        initialState:{items:[]},
        reducers:{
            additem:(state,action)=>{
state.items.push(action.payload);
            },

                clearcart:(state,actions)=>{
                    state.items.length=0;
                        }
        }
    }
);
export const{additem,clearcart}=Cartslice.actions;   
export default Cartslice.reducer;