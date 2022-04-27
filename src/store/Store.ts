import rootReducer from "./RootReducer";
import { configureStore } from '@reduxjs/toolkit'

function saveToLocalStorage(state:any) {
  try {
    const serialisedState = JSON.stringify(state);
    sessionStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = sessionStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const Store = configureStore({ reducer: rootReducer, preloadedState:loadFromLocalStorage()});
Store.subscribe(() => saveToLocalStorage(Store.getState()));

export default Store; 