"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const chalk_1 = __importDefault(require("chalk"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
    console.log(chalk_1.default.cyan('\nServer running on http://localhost:3000'));
}
bootstrap();
//# sourceMappingURL=main.js.map