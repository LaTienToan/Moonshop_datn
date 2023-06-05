import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { categoriesApi } from "../api_slice/api_categories";
import { productApi } from "../api_slice/api_product";
import { colorsApis } from "../api_slice/api_color";
import { imagesApis } from "../api_slice/api_images";
import { voucherApi } from "../api_slice/api_voucher";

const store = configureStore({
  reducer: {
    categoriesApi: categoriesApi.reducer,
    productApi: productApi.reducer,
    colorsApis: colorsApis.reducer,
    uploadImages: imagesApis.reducer,
    voucherApi: voucherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoriesApi.middleware,
      productApi.middleware,
      colorsApis.middleware,
      imagesApis.middleware,
      voucherApi.middleware
    ),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
