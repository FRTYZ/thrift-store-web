import { configureStore, createSlice, Middleware } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { MenuState, AuthUserState, CurrentCategoryState, RecentSearch, searchDrawerState } from './interface';

const loginSlice = createSlice({
  name: 'authUser',
  initialState: {} as AuthUserState,
  reducers: {
    setLoginData: (state, action) => {
      state.loginData = { ...state.loginData, ...action.payload}
    },
  },
});

const searchSlice = createSlice({
  name: 'search',
  initialState: { searchData: [] } as RecentSearch,
  reducers: {
    setSearchData: (state, action) => {
      // Eğer action.payload bir dizi ise, searchData'ya ekleyelim.
      const newDataArray = Array.isArray(action.payload) ? action.payload : [action.payload];

      newDataArray.forEach((newData) => {
        const existingDataIndex = state.searchData.findIndex(
          (data) => data.title === newData.title
        );

        if (existingDataIndex !== -1) {
          // Eğer title aynı ise, sadece date'i güncelleyelim.
          state.searchData[existingDataIndex].date = newData.date;
        } else {
          // Title'a sahip bir veri yoksa, yeni veriyi ekleyelim.
          state.searchData.push(newData);
        }
      });
    },
  },
});
const searchDrawerSlice = createSlice({
  name: 'searchDrawer',
  initialState: {} as searchDrawerState,
  reducers: {
    setSearchDrawer: (state, action) => {
      state.searchDrawer = action.payload;
    },
  },
});
const saveToLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  localStorage.setItem('authUser', JSON.stringify(store.getState().authUser));
  localStorage.setItem('search', JSON.stringify(store.getState().search));
  return result;
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    authUser: JSON.parse(localStorage.getItem('authUser') || '{}'),
    search: JSON.parse(localStorage.getItem('search') || '{"searchData": []}'),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveToLocalStorageMiddleware),
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;