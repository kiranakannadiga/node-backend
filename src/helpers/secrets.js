import crypto from "crypto"
let key = crypto.randomBytes(13).toString("hex")
console.log(key)