import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import Storage from 'redux-persist/lib/storage';
import Reducers from './reducers';
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root',
    // key nya storage bukan Storage
    storage: Storage
}

const persistReducers = persistReducer(persistConfig, Reducers)

// Membuat store Redux
export const store = configureStore({
    reducer: persistReducers,
    middleware: [...getDefaultMiddleware({ serializableCheck: false }), thunk]
})

// Membuat persisStore untuk Redux Persist
export const persistore = persistStore(store);
export default store;