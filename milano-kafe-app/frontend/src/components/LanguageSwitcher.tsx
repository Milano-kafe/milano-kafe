import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(event.target.value);
    };

    return (
        <div className="language-switcher">
            <label htmlFor="language-select">Choose Language:</label>
            <select id="language-select" value={language} onChange={handleLanguageChange}>
                <option value="uz">Uzbek</option>
                <option value="tr">Turkish</option>
                <option value="en">English</option>
                <option value="ru">Russian</option>
                <option value="ko">Korean</option>
            </select>
        </div>
    );
};

export default LanguageSwitcher;