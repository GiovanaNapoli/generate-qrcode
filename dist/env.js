"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = __importDefault(require("zod"));
const envSchema = zod_1.default.object({
    LOCAL_PORT: zod_1.default
        .preprocess((a) => parseInt(a), zod_1.default.number())
        .default(3333),
});
const env = envSchema.parse(process.env);
exports.default = env;
