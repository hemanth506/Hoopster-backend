// import { connection } from "../config/default";
import { Admin, IAdminsRepository } from "../interfaces/admin.interface";
import {
  createAdmin,
  fetchAllAdmins,
  fetchAdminByPhoneNumber,
  deleteAdminByPhoneNumber,
} from "../models/Admins/admins";

class AdminRepository implements IAdminsRepository {
  retrieveAllAdmins(): Promise<Admin[]> {
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

  retrieveAdminByPhoneNumber(phoneNumber: number): Promise<Admin | undefined> {
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

  createAdmin(newAdmin: Admin): Promise<number> {
    return new Promise((resolve, reject) => {
      try {
        const createdAdmin: any = createAdmin(newAdmin);
        console.log("🚀 New admin created 🚀", createdAdmin);
        resolve(createdAdmin);
      } catch (err) {
        reject(err);
      }
    });
  }

  removeAdminByPhoneNumber(phoneNumber: number): Promise<number> {
    return new Promise((resolve, reject) => {
      try {
        const createdAdmin: any = deleteAdminByPhoneNumber(phoneNumber);
        console.log("🚀 Admin deleted 🚀");
        resolve(createdAdmin);
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default new AdminRepository();
