import express from 'express';
import axios from 'axios';
import MailTemplate from './mail';
import { resend } from './utils/resend';

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.post('/notice-event', async (req:any, res:any) => {
    const { ticketInfo, userInfo, eventInfo } = req.body;

    try {
        await resend.emails.send({
            from: 'no-reply@kosenconfsyuto.com',
            to: userInfo.email,
            subject: `申し込みいただき、ありがとうございます`,
            react: MailTemplate({
                username: userInfo.name, 
                eventName: eventInfo.eventName 
            }),
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).send('Error sending email');
    }

    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL || "";
    const discordMessage = {
        content: `## ${userInfo.name}さんが申し込みました🎉\n高専カンファレンス in 首都へようこそ！`,
    };

    try {
        await axios.post(discordWebhookUrl, discordMessage);
    } catch (error) {
        console.error('Error sending Discord message:', error);
        return res.status(500).send('Error sending Discord message');
    }

    res.status(200).send('Notification sent successfully');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});