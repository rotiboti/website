// utils.js
const LOCAL_STORAGE_KEY = 'selectedLanguage';
const DEFAULT_LANGUAGE = 'en';
const FRENCH_LANGUAGE = 'fr';

export const getSelectedLanguage = () => {
    const storedLanguage = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (storedLanguage) {return storedLanguage;}
    const systemLanguage = navigator.language || 'en';
    return systemLanguage.startsWith(FRENCH_LANGUAGE) ? FRENCH_LANGUAGE : DEFAULT_LANGUAGE;
};

export const setSelectedLanguage = (language) => {
    if ([DEFAULT_LANGUAGE, FRENCH_LANGUAGE].includes(language)) {
        localStorage.setItem(LOCAL_STORAGE_KEY, language);
    } else {
        throw new Error('Invalid language code. Use "en" for English or "fr" for French.');
    }
};

export const isLanguageSelected = (language) => {
    const selectedLanguage = getSelectedLanguage();
    return selectedLanguage === language;
};


const imageUrls = {
    halal: "https://rotibotilaval.com/img/halal-logo-halal-badge-round-stamp-vector-logo-halal-sign-design_526569-735-fotor-20230706201841.png",
    logo512: "https://rotiboti.github.io/website/logo512.png",
    // Add more image URLs here as needed
};

const getImageUrl = (imageName) => {
    return imageUrls[imageName] || '';
};

export default getImageUrl;
