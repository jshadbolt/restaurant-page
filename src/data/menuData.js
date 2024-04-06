import menuImages from './menuImages.js';

const menuData = {
    "Classic Croissant": {
        description: "Indulge in our flaky and buttery classic croissant, freshly baked to perfection. Perfect for breakfast or a midday snack.",
        price: "$2.50",
        glutenFree: true,
        dairyFree: false,
        image: menuImages[0] // Assigning the first image link from the array
    },
    "Chocolate Chip Muffin": {
        description: "Satisfy your sweet tooth with our irresistible chocolate chip muffin. Moist and fluffy, packed with gooey chocolate chips.",
        price: "$3.00",
        glutenFree: true,
        dairyFree: false,
        image: menuImages[1] // Assigning the second image link from the array
    },
    "Blueberry Scone": {
        description: "Start your day right with our delectable blueberry scone. Bursting with juicy blueberries and topped with a light glaze.",
        price: "$2.75",
        glutenFree: true,
        dairyFree: true,
        image: menuImages[2] // Assigning the third image link from the array
    },
    "Cinnamon Roll": {
        description: "Treat yourself to our mouthwatering cinnamon roll, swirled with cinnamon sugar and topped with creamy icing.",
        price: "$3.50",
        glutenFree: true,
        dairyFree: true,
        image: menuImages[3] // Assigning the fourth image link from the array
    },
    "Fruit Danish": {
        description: "Enjoy the fruity goodness of our fruit danish, filled with a variety of fresh fruits and drizzled with a sweet glaze.",
        price: "$3.25",
        glutenFree: false,
        dairyFree: false,
        image: menuImages[4] // Assigning the fifth image link from the array
    },
    "Almond Croissant": {
        description: "Experience the perfect blend of buttery croissant and almond goodness with our almond croissant, topped with sliced almonds for extra crunch.",
        price: "$3.00",
        glutenFree: true,
        dairyFree: false,
        image: menuImages[5] // Assigning the sixth image link from the array
    },
    "Lemon Poppy Seed Loaf": {
        description: "Brighten your day with our tangy lemon poppy seed loaf, infused with zesty lemon flavor and dotted with poppy seeds.",
        price: "$3.25",
        glutenFree: false,
        dairyFree: false,
        image: menuImages[6] // Assigning the seventh image link from the array
    }
};

export default menuData;