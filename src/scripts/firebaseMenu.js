// firebaseMenu.js

const firebaseURL = "https://on-menu-request-6s7xisfexa-uc.a.run.app";

const fetchLavalMenuData = async () => {
    return await fetch(firebaseURL)
        .then(response => {return response.json();})
        .catch(error => {
            console.error('Error fetching menu data:', error);
            throw error;
        });
};

export default fetchLavalMenuData;
