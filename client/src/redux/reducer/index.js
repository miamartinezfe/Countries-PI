import { types } from "../actions/types";


const initialState = {
    countries: [],
    activities: [],
};

const rootReducer = (state = initialState, {type,payload}) => {
    switch (type) {        
        default:
            return state;
    }
};

export default rootReducer;
