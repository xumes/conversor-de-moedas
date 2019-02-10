import { CONVERTE_MOEDAS } from "./../actions";
const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  if (action.type === CONVERTE_MOEDAS) {
    const result = action.payload.data;
    return result;
  } else {
    return state;
  }
}
