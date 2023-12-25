const express = require("express");
import { register } from "controllers/auth";
export default (router: express.Router) => {
    router.post("/auth/register", register);
};
