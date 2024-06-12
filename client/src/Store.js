import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./redux/root_reducer/RootReducer";
import { persistReducer, persistStore } from "redux-persist";
import persistConfig from '../src/redux/persistConfig';

const persistedReducer = persistReducer(persistConfig, RootReducer)
const store =  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:{
            ignoredActions:['persist/PERSIST','persist/REHYDERATE']
        }
    })
});

export const persistor = persistStore(store)
export default store