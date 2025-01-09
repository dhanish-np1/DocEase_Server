export interface IUser{
    userName: string;
    email: string;
    password:string;
    phone:string;
    is_verified: boolean;
    is_blocked: boolean;
    created_at: Date;
    updated_at: Date;
}