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


// utils.js

// Function to get the base URL based on the current hostname
function getBaseUrl() {
    if (window.location.hostname === 'localhost') {
        return 'http://localhost:3000/website/';
    } else if (window.location.hostname === 'rotiboti.github.io') {
        return 'https://rotiboti.github.io/website/';
    } else {
        return 'https://rotiboti.github.io/website/';
    }
}

const baseUrl = getBaseUrl();

const imageUrls = {
    halal: `${baseUrl}halal.png`,
    logo512: `${baseUrl}logo512.png`,
    skip: `${baseUrl}skip.png`,
    uber: `${baseUrl}uber.png`,
    doordash: `${baseUrl}doordash.png`,
    tariq: `${baseUrl}tariq.png`,
    // Add more image URLs here as needed
};


const getImageUrl = (imageName) => {
    return imageUrls[imageName] || '';
};

export default getImageUrl;
