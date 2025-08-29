import { Request, Response } from 'express';

const supportedLanguages = ['uz', 'tr', 'ru', 'en', 'ko'];

const translations = {
    uz: {
        welcome: "Xush kelibsiz",
        menu: "Menyu",
        cart: "Savat",
        contact: "Aloqa",
        order: "Buyurtma",
        profile: "Profil",
        admin: "Admin",
        submit: "Yuborish",
        // Add more translations as needed
    },
    tr: {
        welcome: "Hoş geldiniz",
        menu: "Menü",
        cart: "Sepet",
        contact: "İletişim",
        order: "Sipariş",
        profile: "Profil",
        admin: "Admin",
        submit: "Gönder",
        // Add more translations as needed
    },
    ru: {
        welcome: "Добро пожаловать",
        menu: "Меню",
        cart: "Корзина",
        contact: "Контакт",
        order: "Заказ",
        profile: "Профиль",
        admin: "Админ",
        submit: "Отправить",
        // Add more translations as needed
    },
    en: {
        welcome: "Welcome",
        menu: "Menu",
        cart: "Cart",
        contact: "Contact",
        order: "Order",
        profile: "Profile",
        admin: "Admin",
        submit: "Submit",
        // Add more translations as needed
    },
    ko: {
        welcome: "환영합니다",
        menu: "메뉴",
        cart: "장바구니",
        contact: "연락처",
        order: "주문",
        profile: "프로필",
        admin: "관리자",
        submit: "제출",
        // Add more translations as needed
    },
};

export const getTranslation = (lang: string, key: string): string => {
    if (!supportedLanguages.includes(lang)) {
        lang = 'en'; // default to English if the language is not supported
    }
    return translations[lang][key] || key; // return the key if translation is not found
};

export const setLanguage = (req: Request, res: Response): void => {
    const { lang } = req.body;
    if (supportedLanguages.includes(lang)) {
        res.cookie('lang', lang, { maxAge: 900000, httpOnly: true });
        res.status(200).send({ message: 'Language set successfully' });
    } else {
        res.status(400).send({ message: 'Unsupported language' });
    }
};