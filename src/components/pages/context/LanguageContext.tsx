import React, { createContext, useContext, useState, useEffect } from "react";

const translations = {
  en: {
    home: "Home",
    bikes: "Motorcycles",
    cars: "Cars",
    locations: "Locations",
    about: "About Us",
    login: "Login",
    register: "Register",
    language: "Language",
    username: "Login",
    password: "Password",
    confirmPassword: "Confirm Password",
    forgotPassword: "Forgot password?",
    noAccount: "Don't have an account?",
    haveAccount: "Already have an account?",
    firstName: "First Name",
    lastName: "Last Name",
    birthDate: "Birth Date",
    acceptTerms: "By clicking the 'Register' button, you accept our",
    terms: "Terms & Conditions",
    and: "and",
    policies: "Policies",
    success: "Success",
  },
  ru: {
    home: "Главная",
    bikes: "Мотоциклы",
    cars: "Автомобили",
    locations: "Местоположения",
    about: "О нас",
    login: "Войти",
    register: "Регистрация",
    language: "Язык",
    username: "Логин",
    password: "Пароль",
    confirmPassword: "Повторите пароль",
    forgotPassword: "Забыли пароль?",
    noAccount: "Нет аккаунта?",
    haveAccount: "Уже есть аккаунт?",
    firstName: "Имя",
    lastName: "Фамилия",
    birthDate: "Дата рождения",
    acceptTerms: "Нажимая кнопку «Зарегистрироваться», Вы принимаете наши",
    terms: "Условия использования",
    and: "и",
    policies: "Политики",
    success: "Успешно",
  },
  th: {
    home: "หน้าหลัก",
    bikes: "รถจักรยานยนต์",
    cars: "รถยนต์",
    locations: "ที่ตั้ง",
    about: "เกี่ยวกับเรา",
    login: "เข้าสู่ระบบ",
    register: "ลงทะเบียน",
    language: "ภาษา",
    username: "ชื่อผู้ใช้",
    password: "รหัสผ่าน",
    confirmPassword: "ยืนยันรหัสผ่าน",
    forgotPassword: "ลืมรหัสผ่าน?",
    noAccount: "ไม่มีบัญชี?",
    haveAccount: "มีบัญชีอยู่แล้ว?",
    firstName: "ชื่อ",
    lastName: "นามสกุล",
    birthDate: "วันเกิด",
    acceptTerms: "โดยการคลิกปุ่ม 'ลงทะเบียน' คุณยอมรับของเรา",
    terms: "ข้อกำหนดและเงื่อนไข",
    and: "และ",
    policies: "นโยบาย",
    success: "สำเร็จ",
  },
};

type Language = keyof typeof translations;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof translations)[Language];
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: translations.en,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get language from localStorage
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("language") as Language;
      return savedLang || "en";
    }
    return "en";
  });

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
