import * as actionTypes from "../actions/type";

const initialState = actionTypes.ALL_TODOS;

const tabReducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.TOGGLE_TAB:
            return action.selected
        default: return state;
    }
}

export default tabReducer;