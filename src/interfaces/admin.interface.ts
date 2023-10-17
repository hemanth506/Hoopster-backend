export interface IAdmin {
  name: string;
  phoneNumber: number;
  password: string;
  email: string;
}

export interface IAdminsRepository {
  createAdmin(admin: IAdmin): Promise<number>;
  retrieveAllAdmins(): Promise<IAdmin[]>;
  retrieveAdminByPhoneNumber(phoneNumber: number): Promise<IAdmin | undefined>;
  removeAdminByPhoneNumber(phoneNumber: number): Promise<number>;
}
