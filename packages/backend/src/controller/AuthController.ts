import { NextFunction, Request, Response } from 'express';
import { RentalUserService } from '../service/RentalUserService';
import { sendResponse } from '../util/sendReponse';
import { HashPassword } from '../helper/hashPassword';
import { logger } from '../logs';
import { JWTToken } from '../util/Jwt';
class AuthControlller {
    readonly rentalUserService: RentalUserService;
    constructor() {
        this.rentalUserService = new RentalUserService();
    }
    public async signup(req: Request, res: Response, next: NextFunction) {
        try {
            const { body } = req;
            const hashPassword = await HashPassword.hashPassword(body.password);
            body.password = hashPassword;
            const userData = await this.rentalUserService.createRentalUser(body);
            sendResponse(res, userData, "User created successfully", true, 201);
        } catch (error) {
            console.error('Signup error:', error);
            next(error);
        }
    }
    public async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { body } = req;
            //FETCH USER FROM DB USING EMAIL
            const userData = await this.rentalUserService.getUserByEmail(body.email);
            if (!userData) {
                logger.info(`Login attempt with non-existing email: ${body.email}`);
                sendResponse(res, {}, "Invalid email or password", false, 401);
                return;
            }
            const isPasswordValid = await HashPassword.comparePassword(body.password, userData.password);
            if (!isPasswordValid) {
                logger.info(`Invalid password attempt for email: ${body.email}`);
                sendResponse(res, {}, "Invalid email or password", false, 401);
                return;
            }
            //GENERATE JWT TOKEN AND SEND BACK
            const token = JWTToken.generate({ email: userData.email, id: userData._id });

            // Set token in cookie
            res.cookie('token', token, { httpOnly: true });
            return sendResponse(res, { user: userData, token }, "Login successful", true, 200);
        } catch (error) {
            console.error('Login error:', error);
            next(error);
        }
    }
}
export default AuthControlller;

