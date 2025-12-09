import { Response } from 'express';
import { logger } from '../logs';
export async function sendResponse(
    res: Response,
    data: ILooseObject,
    message: string | undefined,
    success: boolean,
    code = 200,
): Promise<void> {
    try {
        const responseObj: IResponse = {
            data: data,
            message: message ?? 'undefined',
            success: success,
        };

        res.status(code).json(responseObj);
    } catch (error) {
        logger.error('Error sending response:', error);
    }

}

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ILooseObject {
    [key: string]: any;
}

export interface IResponse {
    data?: ILooseObject;
    message?: string;
    success: boolean;
}

