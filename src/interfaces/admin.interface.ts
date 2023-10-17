export interface Admin {
  name: string;
  phoneNumber: number;
  password: string;
  email: string;
}

export interface IAdminsRepository {
  createAdmin(admin: Admin): Promise<number>;
  retrieveAllAdmins(): Promise<Admin[]>;
  retrieveAdminByPhoneNumber(phoneNumber: number): Promise<Admin | undefined>;
  removeAdminByPhoneNumber(phoneNumber: number): Promise<number>;
}
