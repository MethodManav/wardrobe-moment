import { RentalUser } from "../Model/RentalUser";
import { TRentalUser } from "../types/RentalUserTypes";

export class RentalUserService {
     public async createRentalUser(data: TRentalUser): Promise<TRentalUser> {
            try {
                await RentalUser.create(data);
                return data;
            } catch (error) {
                console.error('Error creating rental user:', error);
                throw new Error('Error creating rental user');
            }
        }
}