export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const DELETE_JOBS = "DELETE_JOBS";

export const addFavourite = (payload) => ({
    type : ADD_FAVOURITES,
    payload : payload,
});

export const deleteJob = (payload) => ({
    type : DELETE_JOBS,
    payload : payload,
});