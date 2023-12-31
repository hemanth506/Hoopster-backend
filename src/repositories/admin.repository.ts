// import { connection } from "../config/default";
import { IAdmin, IAdminsRepository } from "../interfaces/admin.interface";
import {
  createAdmin,
  fetchAllAdmins,
  fetchAdminByPhoneNumber,
  deleteAdminByPhoneNumber,
} from "../models/Admins/admins";

import { HydratedDocument } from "mongoose";

class AdminRepository implements IAdminsRepository {
  retrieveAllAdmins(): Promise<IAdmin[]> {
    return new Promise((resolve, reject) => {
      try {
        const allAdmins: any = fetchAllAdmins();
        console.log("🚀 Fetch all admins 🚀");
        resolve(allAdmins);
      } catch (err) {
        reject(err);
      }
    });
  }

  retrieveAdminByPhoneNumber(phoneNumber: number): Promise<IAdmin | undefined> {
    return new Promise((resolve, reject) => {
      try {
        const admin: any = fetchAdminByPhoneNumber(phoneNumber);
        console.log("🚀 Fetch admin by phone number🚀");
        resolve(admin);
      } catch (err) {
        reject(err);
      }
    });
  }

  createAdmin(adminData: IAdmin): Promise<IAdmin> {
    return new Promise((resolve, reject) => {
      try {
        const createdAdmin: any = createAdmin(adminData);
        console.log("🚀 New admin created 🚀", createdAdmin);
        resolve(createdAdmin);
      } catch (err) {
        reject(err);
      }
    });
  }

  removeAdminByPhoneNumber(phoneNumber: number): Promise<IAdmin> {
    return new Promise((resolve, reject) => {
      try {
        const deletedAdmin: any = deleteAdminByPhoneNumber(phoneNumber);
        console.log("🚀 Admin deleted 🚀");
        resolve(deletedAdmin);
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default new AdminRepository();
