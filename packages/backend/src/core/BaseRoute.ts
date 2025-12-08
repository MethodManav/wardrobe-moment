import express from 'express'
export abstract class commonRouteConfig{
    app:express.Application;
    path:string;
    name:string
    constructor(_app:express.Application, _name:string, _path:string){
        this.app=_app;
        this.name=_name;
        this.path=_path;
        this.configureRoute()
    }
    abstract configureRoute():express.Application
}