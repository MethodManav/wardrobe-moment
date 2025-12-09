import { logger } from "../logs";
import { RentalSignupValidationSchema } from "../types/RentalUserTypes";
import { ResponseCode } from "../types/ResponseTypes";
import { sendResponse } from "../util/sendReponse";
import { NextFunction, Request, Response } from "express";

export class RentalUserParser {
    static async SignupValidation(req: Request, res: Response, next: NextFunction) {
        try {
            const parsedData = RentalSignupValidationSchema.safeParse(req.body);
            if (parsedData.success) {
                req.body = parsedData.data;
                next();
            } else {
                sendResponse(res, {}, "Validation Failed", false, ResponseCode.BAD_REQUEST);
            }
        } catch (error) {
            logger.error('Validation error:', error);
            next(error);
        }
    }
    static async LoginValidation(req: Request, res: Response, next: NextFunction) {
        try {
            const parsedData = RentalSignupValidationSchema.pick({ email: true, password: true }).safeParse(req.body);
            if (parsedData.success) {
                req.body = parsedData.data;
                next();
            } else {
                logger.error('Validation error details:', parsedData.error);
                sendResponse(res, {}, "Validation Failed", false, ResponseCode.BAD_REQUEST);
            }
        } catch (error) {
            logger.error('Validation error:', error);
            next(error);
        }
    }
}
