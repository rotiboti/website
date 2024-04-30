// LavalMenu.jsx
import React, { useState, useEffect } from 'react';
import fetchLavalMenuData from "../../../scripts/firebaseMenu";
import './LavalMenu.css';
import CategoryMenu from "../category/CategoryMenu";

const LavalMenu = () => {
    const [menuData, setMenuData] = useState({});

    useEffect(() => {
        // fetchLavalMenuData().then(data => {setMenuData(data);});
        setMenuData({
            "KENTUCKY FRIED": [
                {
                    "title": "Crispy Onion Ring Sandwich Box",
                    "image_url": "https://images.ctfassets.net/a2mgcrjjefyo/1kxwQ3h1Du9NphK0pLyeM0/be0f6dd0d6adefe56f3c19f95b7050d9/Crispy_Onion_Ring_FCCS_Big_Crunch_Sandwich_Box_Meal.png?h=600&w=800&fit=fill&fm=webp"
                },
                {
                    "title": "Crispy Onion Ring Sandwich Com",
                    "image_url": "https://images.ctfassets.net/a2mgcrjjefyo/1kxwQ3h1Du9NphK0pLyeM0/be0f6dd0d6adefe56f3c19f95b7050d9/Crispy_Onion_Ring_FCCS_Big_Crunch_Sandwich_Box_Meal.png?h=600&w=800&fit=fill&fm=webp"
                },
                {
                    "title": "Crispy Onion Ring Twister ALC",
                    "image_url": "https://images.ctfassets.net/a2mgcrjjefyo/1Gy9DtlixyTXayu7CV0fza/d21bfdb44c0539bda63f6c96cb57114f/Crispy_Onion_Ring_Twister_ALC__OR_Crispy_Strips_.png?h=600&w=800&fit=fill&fm=webp"
                },
                {
                    "title": "Onion Rings",
                    "image_url": "https://images.ctfassets.net/a2mgcrjjefyo/2fw3Hrz8ZAwtbhoWNfWtx8/9087fd71ca17bf07dfceffff1bc93692/Individual_Onion_Rings.png?h=600&w=800&fit=fill&fm=webp"
                },
            ],
            "BUCKETS": [
                {
                    "title": "6 Piece Bucket and 2 Large Sides",
                    "image_url": "https://images.ctfassets.net/a2mgcrjjefyo/6NLlQ6N3SxXy6xfR6Mzg2B/e129f3b2c93e3e25305879b99cc3b795/OrigRecipeBucket_6pcs_2lrg_sides_3_1600x1600_v2.png?h=600&w=800&fit=fill&fm=webp"
                },
                {
                    "title": "6 Piece Bucket and 2 Large Sides",
                    "image_url": "https://images.ctfassets.net/a2mgcrjjefyo/6NLlQ6N3SxXy6xfR6Mzg2B/e129f3b2c93e3e25305879b99cc3b795/OrigRecipeBucket_6pcs_2lrg_sides_3_1600x1600_v2.png?h=600&w=800&fit=fill&fm=webp"
                },
                {
                    "title": "10 Piece Bucket and 3 Large Sides",
                    "image_url": "https://images.ctfassets.net/a2mgcrjjefyo/2YUmLcfWhiUQ6QeryTm3Jg/f0cc91ec9995ca900c16f13302192ca9/OrigRecipeBucket_10pcs_3lrg_sides_fries_9878_1600x1600_v2.png?h=600&w=800&fit=fill&fm=webp"
                },
                {
                    "title": "14 Piece Bucket and 4 Large Sides",
                    "image_url": "https://images.ctfassets.net/a2mgcrjjefyo/5uvq6dPZU2vKMY8kLRavtd/5d7026de246b6a8d6e252b7cbc8c3a18/OrigRecipeBucket_14pcs_4lrgsides_9933_1600x1600_v2.png?h=600&w=800&fit=fill&fm=webp"
                },
            ],
            "BIG BOX MEALS": [
                {
                    "title": "4 Piece Chicken Box",
                    "image_url": "https://images.ctfassets.net/a2mgcrjjefyo/49PNGvofGbte0BDyep9KW/8e2e72067d4b3b172a0567bb918fc1f4/BigBoxMeal_4Piece_3_1600x1600.png?h=600&w=800&fit=fill&fm=webp"
                },
                {
                    "title": "3 Original Recipe Tenders Box",
                    "image_url": "https://images.ctfassets.net/a2mgcrjjefyo/5uvq6dPZU2vKMY8kLRavtd/5d7026de246b6a8d6e252b7cbc8c3a18/OrigRecipeBucket_14pcs_4lrgsides_9933_1600x1600_v2.png?h=600&w=800&fit=fill&fm=webp"
                },
                {
                    "title": "4 Piece Chicken Box",
                    "image_url": "https://images.ctfassets.net/a2mgcrjjefyo/1XpBtYfiC2ercxH6SSS7FZ/6b021d80f96f9f1977e34a04608f83f8/OriginalRecipeBucket_14pc_4dips_4lgsides_8333_1600x1600.png?h=600&w=800&fit=fill&fm=webp"
                },

            ],
        })
    }, []);

    return (
        <div className="laval-menu-container">
            {menuData && Object.keys(menuData).map((key, index) => (
                <CategoryMenu key={index} title={key} categoryData={menuData[key]} />
            ))}
        </div>
    );
}

export default LavalMenu;