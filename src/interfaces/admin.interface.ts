export interface Admin {
  name: string;
  phoneNumber: number;
  password: string;
  email: string;
}

export interface IAdminsRepository {
  createAdmin(admin: Admin): Promise<number>;
  retrieveAll(): Promise<Admin[]>;
  retrieveByPhoneNumber(phoneNumber: number): Promise<Admin | undefined>;
  deleteAdmin(phoneNumber: number): Promise<number>;
}
