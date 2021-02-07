//this suppose to be slice for products of the whole state.
//Slices are used to automatically generate action creators and selectors on the module level. On the application level,
// Slices are combined into a single state shape tree that is used to generate reducers and initialize Redux store.
import {createSlice} from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        value: {
            book: 0,
            bread: 0,
            shoes: 0,
            candle: 0
        }
    },
    reducers: {
        setProducts: (realState, action) => {
            console.log("setProducts: ", realState, " + action  = ", action);
            //payload is the default data that provided. See the component that uses this function
            realState.value = action.payload;
        },
    },
});


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.products.value)`
export const selectProducts = state => state.products.value;

//adding setProducts to the actions
export const {setProducts} = productsSlice.actions;
export default productsSlice.reducer;