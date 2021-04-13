import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BookmarksState } from "./bookmarks.reducer";

export const selectBookmarkState = createFeatureSelector('bookmarks');

export const selectBookmarkList = createSelector(
    selectBookmarkState,
    (bookmarkState: BookmarksState) => bookmarkState.list
);