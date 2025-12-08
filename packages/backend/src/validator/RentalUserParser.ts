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
            console.error('Validation error:', error);
            next(error);
        }
    }
}
