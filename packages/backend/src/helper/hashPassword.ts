import { randomBytes, scrypt, timingSafeEqual } from 'crypto';
import { promisify } from 'util';
export class HashPassword {
    private static readonly SALT_BYTES = 16;
    private static readonly KEY_LEN = 64;

    static async hashPassword(password: string): Promise<string> {
        const scryptAsync = promisify(scrypt);
        const salt = randomBytes(HashPassword.SALT_BYTES).toString('hex');
        const derivedKey = (await scryptAsync(password, salt, HashPassword.KEY_LEN)) as Buffer;
        return `${salt}:${derivedKey.toString('hex')}`;
    }

    static async comparePassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
        try {
            const scryptAsync = promisify(scrypt);

            const parts = hashedPassword.split(':');
            if (parts.length !== 2) return false;

            const [salt, keyHex] = parts;
            const keyBuffer = Buffer.from(keyHex, 'hex');

            const derivedKey = (await scryptAsync(plainPassword, salt, keyBuffer.length)) as Buffer;

            if (derivedKey.length !== keyBuffer.length) return false;
            return timingSafeEqual(derivedKey, keyBuffer);
        } catch {
            return false;
        }
    }
}
