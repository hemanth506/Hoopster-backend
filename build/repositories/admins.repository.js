"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const default_1 = require("../config/default");
class AdminRepository {
    save(admin) {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO ADMINS (name, phoneNumber) VALUES(?,?)`;
            default_1.connection.query(query, [admin.name, admin.phoneNumber], (err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    console.log("new admin created");
                    resolve(admin);
                }
            });
        });
    }
    retrieveAll() {
        throw new Error("Method not implemented.");
    }
    retrieveByPhoneNumber(phoneNumber) {
        throw new Error("Method not implemented.");
    }
    delete(phoneNumber) {
        throw new Error("Method not implemented.");
    }
}
