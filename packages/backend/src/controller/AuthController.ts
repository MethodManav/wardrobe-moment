import { NextFunction, Request, Response } from 'express';
import { RentalUserService } from '../service/RentalUserService';
import { sendResponse } from '../util/sendReponse';
class AuthControlller {
    readonly rentalUserService: RentalUserService;
    constructor(){
        this.rentalUserService = new RentalUserService();
    }
    public async signup(req: Request, res: Response, next:NextFunction) {
        try {
            const { body } = req;
            const userData = await this.rentalUserService.createRentalUser(body);
            sendResponse(res, userData, "User created successfully", true, 201);
        } catch (error) {
            console.error('Signup error:', error);
            next(error);
        }
    }
}
export default AuthControlller;

