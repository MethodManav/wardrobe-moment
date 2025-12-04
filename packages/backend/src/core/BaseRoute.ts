import express from 'express'
export abstract class commonRouteConfig{
    app:express.Application;
    name:string
    constructor(_app, _name){
        this.app=_app;
        this.name=_name;
        this.configureRoute()
    }
    abstract configureRoute()
}