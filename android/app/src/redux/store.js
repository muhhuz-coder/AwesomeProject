import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterSlice  from './features/counter/CounterSlice'
import AuthSlice from './features/AuthSlice'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import AsyncStorage from '@react-native-async-storage/async-storage'

const reducers = combineReducers({
  counter: counterSlice,
    auth: AuthSlice,
})

const persistConfig = {
  key:'root',
  storage: AsyncStorage,
  whitelist : ['auth','counter']
};
const persistedReducer = persistReducer(persistConfig,reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware({serializableCheck: false}),
});

const persistor = persistStore(store);

export {store,persistor};