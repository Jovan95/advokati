import { initialize, reset } from 'redux-form';
import {
  SEND_CONTACT_US_REQUEST,
  SEND_CONTACT_US_SUCCESS,
  SEND_CONTACT_US_FAILURE,
  RESET_CONTACT_US_FORM,
} from '../actionTypes/generalActionTypes';


/**
 * Handles redux actions for submitting the contact us form
 *
 * @param data {Object}
 * @return {function(...[*]=)}
 */
export const submitContactUsForm = data => async (dispatch) => {
  dispatch({ type: SEND_CONTACT_US_REQUEST });

  try {
    await (data);

    dispatch({ type: SEND_CONTACT_US_SUCCESS });
    dispatch(reset('contactUsForm'));
  } catch (e) {
    dispatch({ type: SEND_CONTACT_US_FAILURE, payload: e.message });
  }
};

export const resetContactUsForm = () => (dispatch) => {
  dispatch({ type: RESET_CONTACT_US_FORM });
  dispatch(initialize('contactUsForm'));
};

export const changeLanguage = () => (dispatch) => {
  dispatch({ type: CHANGE_LANGUAGE});
}
