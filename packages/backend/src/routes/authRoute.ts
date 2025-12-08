import AuthControlller from "../controller/AuthController";
import { commonRouteConfig } from "../core/BaseRoute";
import express from "express";
import { RentalUserParser } from "../validator/RentalUserParser";

export class AuthRoute extends commonRouteConfig {
    constructor(_app: express.Application) {
        console.log('Setting up AuthRoute');
        super(_app, "AuthRoute", "/auth");
        this.configureRoute();
    }
    configureRoute(): express.Application {
        const authController = new AuthControlller();
        this.app.post(`${this.path}/signup`, RentalUserParser.SignupValidation, authController.signup);
        return this.app;

    }
}