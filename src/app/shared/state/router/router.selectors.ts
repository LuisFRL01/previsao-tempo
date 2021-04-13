import { RouterReducerState } from "@ngrx/router-store";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RouterState } from "./router.reducer";

const selectRouteReducerState = createFeatureSelector<RouterReducerState<RouterState>>('router');

export const selectRouterState = createSelector(
    selectRouteReducerState,
    (routerReducerState: RouterReducerState<RouterState>) => (routerReducerState && routerReducerState.state) || {}
);

export const selectRouterQueryParams = createSelector(
    selectRouterState,
    (routerState: RouterState) => (routerState && routerState.queryParams) || {}
);