import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
  data: any;
}

const initialState: ProductState = {
  data: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { setProductData } = productSlice.actions;
export default productSlice.reducer;