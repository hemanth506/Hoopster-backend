import { AdminModel } from "./admin.model";
import { IAdmin } from "../../interfaces/admin.interface";

export const createAdmin = (admin: IAdmin) => AdminModel.create(admin);
export const fetchAllAdmins = () => AdminModel.find();
export const fetchAdminByPhoneNumber = (phoneNumber: number) =>
  AdminModel.findOne({ phoneNumber });
export const deleteAdminByPhoneNumber = (phoneNumber: number) =>
  AdminModel.findOneAndDelete({ phoneNumber });
