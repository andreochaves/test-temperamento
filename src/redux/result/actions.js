import resulActionTypes from "./action-types"

export const resultAct = (payload) => ({
    type: resulActionTypes.Resultado,
    payload,
});

export const nomeAct = (payload) => ({
    type: resulActionTypes.Nome,
    payload,
});