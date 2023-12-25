const crypto = require("crypto");
export const random = () => crypto.randonBytes(128).toString("base64");
export const authentication = (salt: string, password: string) => {
    return crypto.createHmac("sha256", [salt, password].join("/")).update(process.env.SECRET).digest();
};

