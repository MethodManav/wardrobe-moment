import { SignOptions, } from 'jsonwebtoken';
import { CustomEnv } from './configENV';
import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

type TPayLoadForJwt = {
    email: string,
    id: Types.ObjectId
}
export class JWTToken {
    private static secret: string = CustomEnv.jwt_secret;
    private static defaultOptions: SignOptions = { expiresIn: '1h' };

    private static get jwt() {
        return jwt;
    }

    static setSecret(secret: string) {
        this.secret = secret;
    }

    static setDefaultOptions(options: SignOptions) {
        this.defaultOptions = options;
    }

    static generate(payload: TPayLoadForJwt, expiresIn?: string | number): string {
        const opts = { ...this.defaultOptions, ...(expiresIn ? { expiresIn } : {}) };
        return this.jwt.sign(payload, this.secret as string, opts as SignOptions);
    }

    static verify(token: string): TPayLoadForJwt | null {
        return this.jwt.verify(token, this.secret as string) as TPayLoadForJwt | null;
    }

    static decode(token: string): TPayLoadForJwt | null {
        return this.jwt.decode(token) as TPayLoadForJwt | null;
    }
}