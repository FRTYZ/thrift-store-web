import { configureStore, createSlice, Middleware } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { MenuState, AuthUserState, CurrentCategoryState, RecentSearch } from './interface';

  
//  Creating loginSlice and defining reducer
const loginSlice = createSlice({
  name: 'authUser',
  initialState: {} as AuthUserState,
  reducers: {
    setLoginData: (state, action) => {
      state.loginData = { ...state.loginData, ...action.payload}
    },
  },
});

const menuSlice = createSlice({
  name: 'Menu',
  initialState: {menuData: []} as MenuState,
  reducers: {
    setMenuData: (state, action) => {
      state.menuData = action.payload;
    },
  },
});

const currentCategorySlice = createSlice({
  name: 'currentCategory',
  initialState: {currentCategory: {}} as CurrentCategoryState,
  reducers: {
    setCurrentCategory: (state, action) => {
      state.currentCategoryData = action.payload;
    },
  },
});


// coinSlice creation and reducer definition
const searchSlice = createSlice({
  name: 'search',
  initialState: { searchData: [] } as RecentSearch,
  reducers: {
    setSearchData: (state, action) => {
      // If action.payload is an array, add it to searchData.
      const newDataArray = Array.isArray(action.payload) ? action.payload : [action.payload];

      newDataArray.forEach((newData) => {
        const existingDataIndex = state.searchData.findIndex(
          (data) => data.title === newData.title
        );

        if (existingDataIndex !== -1) {
          // If the title is the same, let's update only the date.
          state.searchData[existingDataIndex].date = newData.date;
        } else {
          // If there is no data with a title, let's add the new data.
          state.searchData.push(newData);
        }
      });
    },
  },
});



export const { setLoginData } = loginSlice.actions;
export const { setMenuData } = menuSlice.actions;
export const { setCurrentCategory } = currentCategorySlice.actions;
export const { setSearchData } = searchSlice.actions;

// Creating rootReducer and merging all reducers
const rootReducer = {
    authUser: loginSlice.reducer,
    Menu: menuSlice.reducer,
    currentCategory: currentCategorySlice.reducer,
    search: searchSlice.reducer,
};

// Create redux middleware
const saveToLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  localStorage.setItem('authUser', JSON.stringify(store.getState().authUser));
  localStorage.setItem('search', JSON.stringify(store.getState().search));
  return result;
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    // Uploading state from local storage
    authUser: JSON.parse(localStorage.getItem('authUser') || '{}'),
    search: JSON.parse(localStorage.getItem('search') || '{"searchData": []}'),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveToLocalStorageMiddleware),
});

export function removeAllData(){
    localStorage.clear();
}

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;