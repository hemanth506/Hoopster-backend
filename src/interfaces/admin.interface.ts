export interface IAdmin {
  name: string;
  phoneNumber: number;
  password: string;
  email: string;
}

export interface IAdminsRepository {
  createAdmin(admin: IAdmin): Promise<IAdmin>;
  retrieveAllAdmins(): Promise<IAdmin[]>;
  retrieveAdminByPhoneNumber(phoneNumber: number): Promise<IAdmin | undefined>;
  removeAdminByPhoneNumber(phoneNumber: number): Promise<IAdmin>;
}
