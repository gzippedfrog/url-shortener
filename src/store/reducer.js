import { createAction, createReducer } from "@reduxjs/toolkit";

export const pageNext = createAction("pageNext");
export const pagePrev = createAction("pagePrev");
export const addUrl = createAction("addUrl");

const initialState = {
  urls: []
};

export const reducer = createReducer(initialState, {
  pageNext: (state) => {
    state.currentPage++;
  },
  pagePrev: (state) => {
    state.currentPage--;
  },
  addUrl: (state, action) => {
    const urlItem = action.payload;
    state.urls.push(urlItem);
  }
});
