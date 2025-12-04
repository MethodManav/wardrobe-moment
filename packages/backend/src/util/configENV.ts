import dotenv from 'dotenv'
dotenv.config();
export const CustomEnv = {
    port: process.env.PORT,
    db_url: process.env.DB_URL as string,
    env: process.env.ENV as string
}