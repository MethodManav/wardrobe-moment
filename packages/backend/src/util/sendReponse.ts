import { Response } from 'express';
export async function sendResponse(
    res: Response,
    data: ILooseObject,
    message: string | undefined,
    success: boolean,
    code = 200,
): Promise<void> {
    const responseObj: IResponse = {
        data: data,
        message: message ?? 'undefined',
        success: success,
    };

    res.status(code).json(responseObj);
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

