import express, { Router } from "express";
import { commonRouteConfig } from "../core/BaseRoute";
import { AuthRoute } from "./authRoute";
export class RouteConfig{
    public routerArray: Array<commonRouteConfig> = [];
    public constructor(app: express.Application) {
        this.initializeRoutes(app);
    }
    private initializeRoutes(app: express.Application) {
        console.log('Initializing AuthRoute');
        this.routerArray.push(new AuthRoute(app));
        this.routerArray.forEach((route: commonRouteConfig) => {
            console.log(`Route configured: ${route.name}`);
        });
    }   
}