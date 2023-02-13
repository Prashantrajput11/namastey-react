import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import cartSlice from "../features/cart/cartSlice";
import userSlice from "../features/user/userSlice";
import restaurantSlice from "../features/restaurant/restaurantSlice";
import storage from "redux-persist/lib/storage";

// config
let persistConfig = { key: "root", storage };

// root reducer
const rootReducer = combineReducers({
	cart: cartSlice,
	user: userSlice,
	restaurant: restaurantSlice,
});

let persistedReducer = persistReducer(persistConfig, rootReducer);

//store
const store = configureStore({
	reducer: persistedReducer,
});

// export store
export default store;
