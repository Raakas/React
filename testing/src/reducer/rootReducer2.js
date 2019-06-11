import CHANGE_A from '../actions/basicActions'

const initState = {
    a: "hello I'm rootReducer2"
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_A:
            return {
                ...state,
                a: action.payload.newText
            }
        default:
            return state;
    }
 }

export default rootReducer;