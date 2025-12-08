import { Schema } from 'mongoose';

declare global {
    namespace Express {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        interface Request {
            user: {
                id?: Schema.Types.ObjectId;
                
            };
        }
    }
}
