const initialState = {
    searchResults: [],
};

const searchResultsReducer = function (state = initialState, action) {
    switch (action.type) {
        case "UPDATE_SEARCH_RESULTS":
            return {
                ...state,
                searchResults: action.payload,
            };

            default:
                return state;
        }
    };

    export default searchResultsReducer;