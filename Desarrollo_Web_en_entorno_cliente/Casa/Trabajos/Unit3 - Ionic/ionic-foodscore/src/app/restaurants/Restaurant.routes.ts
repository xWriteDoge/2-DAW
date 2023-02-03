import { Routes } from "@angular/router";
import { RestaurantsPageComponent } from "./restaurants-page/restaurants-page.component";

export const APP_ROUTES: Routes = [
    { path: "", component: RestaurantsPageComponent },
    // {
    //     path: "add",
    //     loadComponent: () =>
    //         import("./restaurant-form/restaurant-form.component").then(
    //             (m) => m.RestaurantFormComponent
    //         ),
    // },
    // {
    //     path: "edit/:id",
    //     loadComponent: () =>
    //         import("./restaurant-form/restaurant-form.component").then(
    //             (m) => m.RestaurantFormComponent
    //         ),
    //     canActivate: [restaurantIdGuard],
    //     resolve: {
    //         restaurant: restaurantResolve,
    //     },
    // },
    // {
    //     path: ":id",
    //     loadComponent: () =>
    //         import("./restaurant-details/restaurant-details.component").then(
    //             (m) => m.RestaurantDetailsComponent
    //         ),
    //     canActivate: [restaurantIdGuard],
    //     resolve: {
    //         restaurant: restaurantResolve,
    //     },
    // },
];