// AboutUs.jsx

import React from 'react';
import './AboutUs.css';
import { languageTranslate } from "../../util/utils";

const AboutUs = () => {
    const headingAbout = "À PROPOS DE NOUS / ABOUT US";
    // const tariqImageUrl = getImageUrl('tariq');

    return (
        <div className="about-us-main">
            <div className="about-us-wrapper">
                <h1 className="about-us-heading">{languageTranslate(headingAbout)}</h1>
                <div className="about-us-details">
                    <div className="about-us-intro">
                        <section id="about">
                            <p>
                                <strong>Roti Boti</strong>, {languageTranslate("un restaurant gastronomique proposant une cuisine indienne et pakistanaise authentique, donnant vie aux goûts vibrants de l'Inde et du Pakistan dans notre communauté. / a fine dining restaurant that features authentic Indian and Pakistani cuisine, bringing the vibrant tastes of India and Pakistan to life in our community.")}
                            </p>

                            <h2>{languageTranslate("Notre Histoire / Our Story")}</h2>
                            <p>{languageTranslate("Fondée en 2013, Roti Boti est située sur le Boul Cure Labelle, au coeur de Laval, Québec. Nous nous engageons à servir une cuisine fantastique à la communauté lavalloise, en offrant une expérience culinaire unique et inoubliable. / Established in 2013, Roti Boti is located on Boul Cure Labelle, in the heart of Laval, Quebec. We are dedicated to serving fantastic food to the Laval community, offering a unique and unforgettable dining experience.")}</p>

                            <h2>{languageTranslate("Saveurs Authentiques / Authentic Flavors")}</h2>
                            <p>{languageTranslate("Nos chefs sont originaires du Pakistan et de l'Inde, apportant avec eux les saveurs et les goûts authentiques de leur pays d'origine. Grâce à leur savoir-faire et leur passion pour la cuisine, ils élaborent des plats non seulement délicieux mais aussi fidèles à leurs origines culturelles. Nous sommes fiers d'être les meilleurs de la ville en matière de cuisine indienne et pakistanaise. / Our chefs hail from Pakistan and India, bringing with them the authentic flavors and tastes of their homeland. With their expertise and passion for cooking, they craft dishes that are not only delicious but also true to their cultural origins. We pride ourselves on being the best in town for Indian and Pakistani cuisine.")}</p>

                            <h2>{languageTranslate("Notre Menu / Our Menu")}</h2>
                            <p>{languageTranslate("Nous proposons une variété de plats de poulet et d'agneau « Halal », ainsi que des plats végétariens de haute qualité, le tout à des prix avantageux. Notre menu est conçu pour répondre à tous les goûts et préférences, garantissant que chacun y trouvera son bonheur. / We offer a variety of 'Halal' chicken and lamb dishes, as well as high-quality vegetarian options, all at great prices. Our menu is designed to cater to all tastes and preferences, ensuring that there is something for everyone to enjoy.")}</p>

                            <h2>{languageTranslate("À votre porte / At Your Doorstep")}</h2>
                            <p>{languageTranslate("Offrant désormais la livraison via Skip The Dishes et Uber Eats, vous pouvez découvrir les saveurs riches et diverses de l'Inde et du Pakistan dans le confort de votre maison. Que vous dîniez sur place ou que vous commandiez au restaurant, Roti Boti s'engage à offrir une expérience culinaire exceptionnelle. / Now offering delivery through Skip The Dishes and Uber Eats, you can experience the rich and diverse flavors of India and Pakistan from the comfort of your home. Whether you are dining in or ordering out, Roti Boti is committed to providing an exceptional culinary experience.")}</p>

                            <h2>{languageTranslate("Service de restauration / Catering Services")}</h2>
                            <p>{languageTranslate("Nous proposons également des services de traiteur, proposant de la nourriture en vrac pour vos événements spéciaux et vos rassemblements. Nos options de restauration sont parfaites pour les fêtes, les événements d'entreprise et bien plus encore. Laissez-nous apporter les saveurs du Roti Boti à votre prochain événement et rendez-le vraiment mémorable. / We also provide catering services, offering food in bulk for your special events and gatherings. Our catering options are perfect for parties, corporate events, and more. Let us bring the flavors of Roti Boti to your next event and make it truly memorable.")}</p>

                            <h2>{languageTranslate("Commandez maintenant / Order Now")}</h2>
                            <p>{languageTranslate("Venez découvrir pourquoi nous sommes le choix privilégié pour la cuisine indienne et pakistanaise à Laval. Visitez-nous aujourd'hui et goûtez la différence que fait l'authenticité. / Come and discover why we are the preferred choice for Indian and Pakistani cuisine in Laval. Visit us today and taste the difference that authenticity makes.")}</p>

                        </section>
                    </div>
                    {/*<div style={{marginLeft: "10px"}}>*/}
                    {/*    <img className={"tariq-about-us"} src={tariqImageUrl} alt="Chef Tariq preparing a dish"/>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
