// utils.js

const imageUrls = {
    halal: "https://rotibotilaval.com/img/halal-logo-halal-badge-round-stamp-vector-logo-halal-sign-design_526569-735-fotor-20230706201841.png",
    logo512: "https://rotiboti.github.io/website/logo512.png",
    // Add more image URLs here as needed
};

const getImageUrl = (imageName) => {
    return imageUrls[imageName] || '';
};

export default getImageUrl;
