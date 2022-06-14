import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducer";
import { IpApiMiddleware, IpApiReducerPath } from "../features/Ip/Ip.service";
import {
  IpInfoApiMiddleware,
  IpInfoApiReducerPath,
} from "../features/IpInfo/IpInfo.service";
import { IpName } from "../features/Ip/Ip.slice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [IpApiReducerPath, IpInfoApiReducerPath, IpName],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(IpApiMiddleware)
      .concat(IpInfoApiMiddleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
