import { connection } from "../config/default";
import Admin from "../models/admin.model";
import { OkPacket } from "mysql2";

interface IAdminsRepository {
  createAdmin(admin: Admin): Promise<number>;
  retrieveAll(): Promise<Admin[]>;
  retrieveByPhoneNumber(phoneNumber: number): Promise<Admin | undefined>;
  deleteAdmin(phoneNumber: number): Promise<number>;
}

class AdminRepository implements IAdminsRepository {
  retrieveAll(): Promise<Admin[]> {
    return new Promise((resolve, reject) => {
      const query = `Select * from ADMINS`;
      connection.query(query, (err: Error, res: any) => {
        if (err) {
          reject(err);
        } else {
          console.log("🚀Fetch all admins🚀", res);
          resolve(res);
        }
      });
    });
  }

  retrieveByPhoneNumber(phoneNumber: number): Promise<Admin | undefined> {
    return new Promise((resolve, reject) => {
      const query = `Select * FROM ADMINS WHERE phoneNumber=${phoneNumber}`;
      connection.query(query, (err: Error, res: any) => {
        if (err) {
          reject(err);
        } else {
          console.log("🚀Fetch data by phone number🚀");
          resolve(res?.[0]);
        }
      });
    });
  }

  createAdmin(newAdmin: Admin): Promise<number> {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO ADMINS (name, phoneNumber) VALUES ("${newAdmin.name}", ${newAdmin.phoneNumber})`;
      connection.query(query, (err: Error, res: any) => {
        if (err) reject(err);
        else {
          console.log("🚀New Admin Created🚀");
          resolve(res);
        }
      });
    });
  }

  deleteAdmin(phoneNumber: number): Promise<number> {
    return new Promise((resolve, reject) => {
      const query = `Delete from ADMINS where phoneNumber=${phoneNumber}`;
      connection.query(query, (err: Error, res: any) => {
        if(err) reject(err);
        else {
          console.log("🚀Admin deleted🚀");
          resolve(res);
        }
      })
    })
  }
}

export default new AdminRepository();
