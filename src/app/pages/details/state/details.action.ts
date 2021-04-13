import { createAction, props } from "@ngrx/store";
import { CityDailyWeather } from "src/app/shared/models/weather.model";

export const loadWeatherDetails = createAction('[Details] Lord Weather Details');

export const loadWeatherDetailsSuccess = createAction(
    '[Details] Lord Weather Details Success',
    props<{ entity: CityDailyWeather }>()
);

export const loadWeatherDetailsFailed = createAction('[Details] Lord Weather Failed');