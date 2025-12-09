
import { RentalUser } from "../model/RentalUser";
import { IRentalUserDocument, TRentalUser } from "../types/RentalUserTypes";

export class RentalUserService {
  public async createRentalUser(data: TRentalUser): Promise<TRentalUser> {
    try {
      await RentalUser.create(data);
      return data;
    } catch (error) {
      console.error("Error creating rental user:", error);
      throw new Error("Error creating rental user");
    }
  }
  public async getUserByEmail(email: string): Promise<IRentalUserDocument | null> {
    try {
      const user = await RentalUser.findOne({ email: email }).exec();
      return user;
    } catch (error) {
      console.error("Error fetching user by email:", error);
      throw new Error("Error fetching user by email");
    }
  }
}
