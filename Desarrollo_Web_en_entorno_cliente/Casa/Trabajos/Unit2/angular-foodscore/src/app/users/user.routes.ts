import { Routes } from "@angular/router";
import { userResolver } from "./resolvers/user-resolver.resolver";

export const APP_ROUTES: Routes = [
    {
        path: "",
        loadComponent: () =>
            import("./user-details/user-details.component").then(
                (m) => m.UserDetailsComponent
            ),
    },
    {
        path: "me",
        loadComponent: () =>
            import("./user-details/user-details.component").then(
                (m) => m.UserDetailsComponent
            ),
    },
    {
        path: "edit/:id",
        loadComponent: () =>
            import("./user-form/user-form.component").then(
                (m) => m.UserFormComponent
            ),
        resolve: { user: userResolver },
    },
    {
        path: ":id",
        loadComponent: () =>
            import("./user-details/user-details.component").then(
                (m) => m.UserDetailsComponent
            ),
        resolve: {
            user: userResolver,
        },
    },
];
