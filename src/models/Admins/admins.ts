import { AdminModel } from "./admin.model";
import { Admin } from "../../interfaces/admin.interface";

export const createAdmin = (admin: Admin) => AdminModel.create(admin);
export const fetchAllAdmins = () => AdminModel.find();
export const fetchAdminByPhoneNumber = (phoneNumber: number) =>
  AdminModel.findOne({ phoneNumber });
export const deleteAdminByPhoneNumber = (phoneNumber: number) =>
  AdminModel.findOneAndDelete({ phoneNumber });
