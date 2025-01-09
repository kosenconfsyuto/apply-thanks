"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const components_1 = require("@react-email/components");
const Mail = (props) => {
    return (react_1.default.createElement(components_1.Container, { style: {
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
            margin: 'auto',
            maxWidth: '600px',
            textAlign: 'center',
            color: '#333',
        } },
        react_1.default.createElement(components_1.Img, { src: `${process.env.CDN_DOMAIN}/kosenconfsyuto/mail/apply-thanks.png`, alt: "SEE YOU IN TOKYO!", style: { width: '100%', height: 'auto' } }),
        react_1.default.createElement(components_1.Heading, null, "\u304A\u7533\u3057\u8FBC\u307F\u3044\u305F\u3060\u304D\u3001\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059"),
        react_1.default.createElement(components_1.Text, null, "\u9AD8\u5C02\u30AB\u30F3\u30D5\u30A1\u30EC\u30F3\u30B9in\u9996\u90FD\u3067\u306F\u3001\u53C2\u52A0\u8005\u5411\u3051Discord\u30B5\u30FC\u30D0\u30FC\u304C\u3042\u308A\u307E\u3059\u3002"),
        react_1.default.createElement(components_1.Text, null, "\u305C\u3072\u3054\u53C2\u52A0\u304F\u3060\u3055\u3044\u3002"),
        react_1.default.createElement(components_1.Link, { href: "https://discord.gg/kosenconf-syuto", style: {
                color: '#fff',
                backgroundColor: '#1155cc',
                padding: '10px 20px',
                borderRadius: '5px',
                textDecoration: 'none',
            } }, "Discord\u30B5\u30FC\u30D0\u30FC\u3078\u306E\u62DB\u5F85\u30EA\u30F3\u30AF"),
        react_1.default.createElement(components_1.Container, { style: {
                textAlign: 'left',
                width: '100%',
                marginTop: '24px',
            } },
            react_1.default.createElement(components_1.Img, { src: `${process.env.CDN_DOMAIN}/kosenconfsyuto/images/logo/logo.png`, alt: "logo", width: 400, height: 400, style: {
                    width: "3rem",
                    height: "3rem",
                    marginBottom: '10px',
                } }),
            react_1.default.createElement(components_1.Link, { href: "https://kosenconfsyuto.com", style: footerLink }, "\u9AD8\u5C02\u30AB\u30F3\u30D5\u30A1\u30EC\u30F3\u30B9in\u9996\u90FD"),
            react_1.default.createElement("br", null),
            react_1.default.createElement(components_1.Link, { href: "https://kosenconfsyuto.com/contact", style: footerLink }, "\u304A\u554F\u3044\u5408\u308F\u305B"),
            react_1.default.createElement("br", null),
            react_1.default.createElement(components_1.Link, { href: "https://kosenconfsyuto.com/privacy-policy", style: footerLink }, "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC"),
            react_1.default.createElement("br", null),
            react_1.default.createElement(components_1.Link, { href: "https://sponsor.kosenconfsyuto.com", style: footerLink }, "\u30B9\u30DD\u30F3\u30B5\u30FC\u30B5\u30A4\u30C8"),
            react_1.default.createElement("br", null),
            react_1.default.createElement(components_1.Link, { href: "https://kosenconf.jp", style: footerLink }, "\u9AD8\u5C02\u30AB\u30F3\u30D5\u30A1\u30EC\u30F3\u30B9"),
            react_1.default.createElement("br", null),
            react_1.default.createElement(components_1.Text, null, "\u4E3B\u50AC: \u9AD8\u5C02\u30AB\u30F3\u30D5\u30A1\u30EC\u30F3\u30B9in\u9996\u90FD\u5B9F\u884C\u59D4\u54E1\u4F1A"))));
};
exports.default = Mail;
const footerLink = {
    color: '#a0a0a0',
    textDecoration: 'none',
    marginBottom: '16px',
};
