import { Routes } from "@angular/router";
import { loginActivateGuard } from "./guards/loginActivateGuard.guard";
import { logoutActivateGuard } from "./guards/logoutActivateGuard.guard";

export const APP_ROUTES: Routes = [
    {
        path: "auth",
        loadChildren: () =>
            import("./auth/auth.routes").then((p) => p.APP_ROUTES),
        canActivate: [logoutActivateGuard],
    },
    {
        path: "restaurants",
        loadChildren: () =>
            import("./restaurants/Restaurant.routes").then((p) => p.APP_ROUTES),
        canActivate: [loginActivateGuard],
    },
    {
        path: "user",
        loadChildren: () =>
            import("./users/user.routes").then((p) => p.APP_ROUTES),
        canActivate: [loginActivateGuard],
    },
    // Default route (empty) -> Redirect to restaurant page
    { path: "", redirectTo: "auth/login", pathMatch: "full" },
    // Doesn't match any of the above
    { path: "**", redirectTo: "auth/login" },
];
