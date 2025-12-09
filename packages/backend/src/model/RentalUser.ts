import { model, Schema } from "mongoose";
import { TRentalUser } from "../types/RentalUserTypes";

const RentalUserSchema= new Schema<TRentalUser>({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    rentalHistory: [{ type: Schema.Types.ObjectId, ref: 'Rental' }],
})

export const RentalUser= model<TRentalUser>('RentalUser', RentalUserSchema);
