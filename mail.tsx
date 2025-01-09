import React from 'react';
import {
    Body,
    Container,
    Heading,
    Img,
    Link,
    Preview,
    Text,
} from '@react-email/components';

interface MailProps {
    username: string;
    eventName: string;
}

const Mail = (props: MailProps) => {
    return (
        <Container style={{
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
            margin: 'auto',
            maxWidth: '600px',
            textAlign: 'center',
            color: '#333',
        }}>
            <Img
                src={`${process.env.CDN_DOMAIN}/kosenconfsyuto/mail/apply-thanks.png`}
                alt="SEE YOU IN TOKYO!"
                style={{ width: '100%', height: 'auto' }}
            />
            <Heading>お申し込みいただき、ありがとうございます</Heading>
            <Text>高専カンファレンスin首都では、参加者向けDiscordサーバーがあります。</Text>
            <Text>ぜひご参加ください。</Text>
            <Link href="https://discord.gg/kosenconf-syuto" style={{
                color: '#fff',
                backgroundColor: '#1155cc',
                padding: '10px 20px',
                borderRadius: '5px',
                textDecoration: 'none',
            }}>Discordサーバーへの招待リンク</Link>
            <Container style={{
                textAlign: 'left',
                width: '100%',
                marginTop: '24px',
            }}>
                <Img
                    src={`${process.env.CDN_DOMAIN}/kosenconfsyuto/images/logo/logo.png`}
                    alt="logo"
                    width={400}
                    height={400}
                    style={{
                        width: "3rem",
                        height: "3rem",
                        marginBottom: '10px',
                    }}
                />

                <Link href="https://kosenconfsyuto.com" style={footerLink}>高専カンファレンスin首都</Link>
                <br />
                <Link href="https://kosenconfsyuto.com/contact" style={footerLink}>お問い合わせ</Link>
                <br />
                <Link href="https://kosenconfsyuto.com/privacy-policy" style={footerLink}>プライバシーポリシー</Link>
                <br />
                <Link href="https://sponsor.kosenconfsyuto.com" style={footerLink}>スポンサーサイト</Link>
                <br />
                <Link href="https://kosenconf.jp" style={footerLink}>高専カンファレンス</Link>
                <br />
                <Text>主催: 高専カンファレンスin首都実行委員会</Text>
            </Container>
        </Container>
    );
}

export default Mail;

const footerLink = {
    color: '#a0a0a0',
    textDecoration: 'none',
    marginBottom: '16px',
}