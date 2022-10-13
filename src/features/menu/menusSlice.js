import { MENU } from '../../app/shared/MENU'

export const selectAllMenu = () => {
    return MENU
};

export const selectRandomMenu = () => {
    return MENU[Math.floor(MENU.length * Math.random())];
};

export const selectMenuById = (id) => {
    return MENU.find((menu) => menu.id === parseInt(id));
};

export const selectFeaturedMenu = () => {
    return MENU.find((menu) => menu.featured);
};