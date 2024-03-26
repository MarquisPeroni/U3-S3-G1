const initialState = {
    favourites: [],
};

const favouritesReducer = function (state = initialState, action) {
    switch (action.type) {
        case "ADD_FAVOURITES":
            return {
                ...state,
                favourites: state.favourites.concat(action.payload),
            };

        case "DELETE_JOBS":
            return {
                ...state,
                favourites: state.favourites.filter((_favJob, i) => i !== action.payload),
            };

            default: return state;
        }
    };

    export default favouritesReducer;