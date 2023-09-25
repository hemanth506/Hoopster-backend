import { Request, Response } from "express";
import Admin from "../models/admin.model";
import adminRepository from "../repositories/admin.repository";

export default class AdminController {
  async fetchAllAdmins(req: Request, res: Response) {
    try {
      const data: Admin[] = await adminRepository.retrieveAll();
      const response = { result: "Successful", data };
      return res.status(200).send(response);
    } catch (err) {
      const response = { result: "Unsuccessful", err };
      return res.status(500).send(response);
    }
  }

  async fetchAdminByPhoneNumber(req: Request, res: Response) {
    try {
      const adminPhoneNumber: number = Number(req.params.phoneNumber);
      const data: Admin | undefined =
        await adminRepository.retrieveByPhoneNumber(adminPhoneNumber);

      let response = {};
      if (data) {
        response = { result: "Successful", data };
        return res.status(200).send(response);
      } else {
        response = {
          result: "Unsuccessful",
          err: { message: "Admin not found" },
        };
        return res.status(404).send(response);
      }
    } catch (err) {
      const response = { result: "Unsuccessful", err };
      return res.status(404).send(response);
    }
  }

  async addNewAdmin(req: Request, res: Response) {
    try {
      const name: String = req.body.name;
      const phoneNumber: number = req.body.phoneNumber;
      if (!name || !phoneNumber) {
        const response = {
          result: "Unsuccessful",
          err: {
            message: "Invalid request data",
          },
        };
        return res.status(400).send(response);
      }
      const newAdmin: Admin = req.body;
      await adminRepository.createAdmin(newAdmin);
      return res.status(201).send();
    } catch (err) {
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
      await adminRepository.deleteAdmin(adminPhoneNumber);
      return res.status(201).send();
    } catch(err) {
      const response = { result: "Unsuccessful", err };
      return res.status(500).send(response);
    }
  }
}
