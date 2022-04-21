import {createSlice} from  '@reduxjs/toolkit';

const initialState = {
    name:"",
    email:"",
    photo:""
}

const userSlice=createSlice({
    name:"user",
    initialState,
    //if user is logged in
    reducer:{
        setUserLoginDetails: (state, action) => {
            state.name= action.payload.name;
            state.email=action.payload.email;
            state.photo=action.payload.photo; 
        },
        //if user is logged out
        setUserSignedOut: (state) => {
            state.name=null;
            state.email=null;
            state.photo=null; 
        }
    }
});
export const {setUserLoginDetails, setUserSignedOut} =userSlice.actions;

export const selectUserName = state => state.user.name
export const selectUserEmail=state=>state.user.email
export const selectUserPhoto=state=>state.user.photo

export default userSlice.reducer;