import resulActionTypes from "./action-types"

const initialState = {
    result: null,
    nome: null
};

const resulReducer = (state = initialState, action) => {
    // switch(action.type){

    // }

    if (action.type === resulActionTypes.Nome) {
        return { ...state, nome: action.payload }
    }
    if (action.type === resulActionTypes.Resultado) {
        return { ...state, result: action.payload }
    }

    return state;
}

export default resulReducer