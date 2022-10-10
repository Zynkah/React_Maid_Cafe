import carrotCake from '../assets/img/carrotCake.jpg';
import turkeyClub from '../assets/img/turkeyClub.jpg';
import nicoise from '../assets/img/nicoise.jpg';
import macchiato from '../assets/img/macchiato.jpg';

export const PROMOTIONS = [
    {
        id: 0,
        name: 'Carrot Cake',
        image: carrotCake,
        featured: true,
        description:
            'A sweet and moist spice cake, full of cut carrots and toasted nuts, and covered in cream cheese icing.'
    },
    {
        id: 1,
        name: 'Turkey Club',
        image: turkeyClub,
        featured: false,
        description:
            'Premium carved, oven roasted turkey breast on whole wheat bread with lettuce, tomato, crispy bacon, and topped with a creamy, garlic aioli sauce.'
    },
    {
        id: 2,
        name: 'Nicoise',
        image: nicoise,
        featured: false,
        description: `An elegant, composed salad featuring tuna, potatoes, hard-boiled egg, olives, and green beans.`
    },
    {
        id: 3,
        name: 'Macchiato',
        image: macchiato,
        featured: false,
        description:
            'An espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through.'
    }
];
