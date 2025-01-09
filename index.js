"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const mail_1 = __importDefault(require("./mail"));
const resend_1 = require("./utils/resend");
require('dotenv').config();
const app = (0, express_1.default)();
const port = 3002;
app.use(express_1.default.json());
app.post('/notice-event', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ticketInfo, userInfo, eventInfo } = req.body;
    try {
        yield resend_1.resend.emails.send({
            from: 'no-reply@kosenconfsyuto.com',
            to: userInfo.email,
            subject: `申し込みいただき、ありがとうございます`,
            react: (0, mail_1.default)({
                username: userInfo.name,
                eventName: eventInfo.eventName
            }),
        });
    }
    catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).send('Error sending email');
    }
    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL || "";
    const discordMessage = {
        content: `## ${userInfo.name}さんが申し込みました🎉\n高専カンファレンス in 首都へようこそ！`,
    };
    try {
        yield axios_1.default.post(discordWebhookUrl, discordMessage);
    }
    catch (error) {
        console.error('Error sending Discord message:', error);
        return res.status(500).send('Error sending Discord message');
    }
    res.status(200).send('Notification sent successfully');
}));
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
