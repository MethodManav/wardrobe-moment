import { Document } from 'mongoose';
import { z } from 'zod';
const RentalUserValidationSchema = z.object({
    fullName: z.string().min(2).max(100),
    email: z.string().email(),
    phoneNumber: z.string().min(10).max(10),
    password: z.string().min(8).max(100),
    address: z.string().min(10).max(200),
    rentalHistory: z.array(z.string().length(24)).optional(),
})

const RentalSignupValidationSchema = RentalUserValidationSchema.omit({ rentalHistory: true });
type TRentalUser = z.infer<typeof RentalUserValidationSchema>;
interface IRentalUserDocument extends Document, TRentalUser {}
export { TRentalUser, RentalSignupValidationSchema, IRentalUserDocument }
