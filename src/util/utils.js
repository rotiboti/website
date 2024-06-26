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

export function languageTranslate(inputString) {
    const selectedLanguage = getSelectedLanguage();
    const parts = inputString.split(' / ');

    if (selectedLanguage === 'fr') {
        return parts[0];
    } else {
        return parts[parts.length - 1];
    }
}

export function createImageUrl (imageName) {
    return `${baseUrl}menu/${imageName}`;
}

// utils.js

// Function to get the base URL based on the current hostname
export function getBaseUrl() {
    if (window.location.hostname === 'localhost') {
        return 'http://localhost:3000/website/';
    } else {
        return `https://${window.location.hostname}/`;
    }
}

const baseUrl = getBaseUrl();

const imageUrls = {
    halal: `${baseUrl}images/halal.png`,
    logo512: `${baseUrl}images/logo512.png`,
    skip: `${baseUrl}images/skip.png`,
    uber: `${baseUrl}images/uber.png`,
    doordash: `${baseUrl}images/doordash.png`,
    tariq: `${baseUrl}images/tariq.png`,
    // Add more image URLs here as needed
};


const getImageUrl = (imageName) => {
    return imageUrls[imageName] || '';
};

export default getImageUrl;
