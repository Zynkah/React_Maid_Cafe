import { BANQUETS } from '../../app/shared/BANQUETS';

export const selectFeaturedBanquet = () => {
    return BANQUETS.find((banquet) => banquet.featured);
};
