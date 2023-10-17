import { Request, Response } from "express";
import { IAdmin } from "../interfaces/admin.interface";
import adminRepository from "../repositories/admin.repository";
import { HydratedDocument } from "mongoose";

export default class AdminController {
  async fetchAdmin(req: Request, res: Response) {
    try {
      const adminPhoneNumber: number | undefined = Number(req.body.phoneNumber);
      console.log(
        "🚀 ~ file: admin.controller.ts:9 ~ AdminController ~ fetchAdmin ~ adminPhoneNumber:",
        adminPhoneNumber
      );
      let response = {};
      if (adminPhoneNumber) {
        const data: IAdmin | undefined =
          await adminRepository.retrieveAdminByPhoneNumber(adminPhoneNumber);
        console.log("🉑 Admin fetched 🉑", data);
        if (data) {
          response = { result: "Successful", data };
          res.status(200).send(response);
        } else {
          console.log(" ❌ Error while fetching Admin ❌");
          response = {
            result: "Unsuccessful",
            err: { message: "Admin not found" },
          };
          res.status(404).send(response);
        }
      } else {
        const data: IAdmin[] = await adminRepository.retrieveAllAdmins();
        console.log("🉑 All admins fetched 🉑", data);
        response = { result: "Successful", data };
        res.status(200).send(response);
      }
      return res;
    } catch (err) {
      console.log(" ❌ Error while fetching Admins ❌");
      const response = { result: "Unsuccessful", err };
      return res.status(500).send(response);
    }
  }

  async addNewAdmin(req: Request, res: Response) {
    try {
      const name: string = req.body.name;
      const phoneNumber: number = req.body.phoneNumber;
      const email: string = req.body.email;
      const password: string = req.body.password;
      if (!name || !phoneNumber || !email || !password) {
        const response = {
          result: "Unsuccessful",
          err: {
            message: "Invalid request data",
          },
        };
        return res.status(400).send(response);
      }
      const newAdmin: IAdmin = {
        name,
        phoneNumber,
        email,
        password,
      };
      const createdAdmin: any = await adminRepository.createAdmin(newAdmin);
      console.log("🉑 New admin created 🉑", createdAdmin);
      const response = { result: "Successful", data: createdAdmin };
      return res.status(201).send(response);
    } catch (err) {
      console.log(" ❌ Error while creating new admin ❌");
      const response = { result: "Unsuccessful", err };
      return res.status(500).send(response);
    }
  }

  async deleteAdmin(req: Request, res: Response) {
    try {
      const adminPhoneNumber: number = Number(req.body.phoneNumber);
      if (!adminPhoneNumber) {
        const response = {
          result: "Unsuccessful",
          err: {
            message: "Invalid request data",
          },
        };
        return res.status(400).send(response);
      }
      const deletedAdmin = await adminRepository.removeAdminByPhoneNumber(
        adminPhoneNumber
      );
      if (deletedAdmin) {
        console.log("🉑 Admin deleted 🉑", deletedAdmin);
        res.status(201).send();
      } else {
        console.log("🉑 Admin not found 🉑", deletedAdmin);
        const response = {
          result: "Unsuccessful",
          err: { message: "Admin not found" },
        };
        res.status(404).send(response);
      }
      return res;
    } catch (err) {
      console.log(" ❌ Error while deleting Admin ❌");
      const response = { result: "Unsuccessful", err };
      return res.status(500).send(response);
    }
  }
}
