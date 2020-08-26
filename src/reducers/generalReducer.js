import { CHANGE_LANGUAGE } from 'actionTypes/generalActionTypes';
import { getLangOption } from 'services/translationService';

const INITIAL_STATE = {
  lang: getLangOption().value,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_LANGUAGE:
      return { ...state, lang: payload };

    default:
      return state;
  }
};
