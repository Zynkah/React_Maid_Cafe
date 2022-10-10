import { MAIDS } from '../../app/shared/MAIDS';


export const selectAllMaids = () => {
    return MAIDS
};

export const selectFeaturedMaids = () => {
    return MAIDS.find((maid) => maid.featured);
};