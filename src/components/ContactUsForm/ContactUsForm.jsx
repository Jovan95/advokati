import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { submitContactUsForm, resetContactUsForm } from 'actions/generalActions';
import InputComponent from '../Forms/InputComponent';
import contactUsFromValidator from './contactUsFormValidator';
import TextAreaComponent from '../Forms/TextAreaComponent';

import './ContactUsForm.scss';

class ContactUsForm extends Component {
  componentWillUnmount() {
    this.props.resetContactUsForm();
  }

  render() {
    const {
      handleSubmit, onSubmit, submittingForm, submittingFormError, pristine, invalid, submittingFormSuccess,
    } = this.props;

    return (
      <form
        id="contact-us-form"
        onSubmit={handleSubmit((e) => { onSubmit(e); })}
        className="form-wrapper contact-us-form-wrapper"
      >
        <div className="fields-wrapper">
          <Field
            id="contact-first-last-name"
            name="firstLastName"
            labelText="IME"
            placeholder="IME"
            component={InputComponent}
            showErrorText
            disabled={submittingForm}
          />

          <Field
            id="contact-email"
            name="email"
            labelText="TELEFON"
            placeholder="TELEFON"
            wrapperClassName="form-item-wrapper right"
            component={InputComponent}
            disabled={submittingForm}
            showErrorText
          />

          <Field
            id="contact-number"
            name="number"
            placeholder="E-MAIL"
            labelText="E-MAIL"
            component={InputComponent}
            showErrorText
            disabled={submittingForm}
          />

          <Field
            id="contact-message"
            name="message"
            placeholder="VAŠA PORUKA"
            labelText="VAŠA PORUKA"
            component={TextAreaComponent}
            showErrorText
            disabled={submittingForm}
          />

        </div>

        <div className="submit-wrapper">
          { !submittingForm && submittingFormError && <div className="submit-error">{submittingFormError}</div> }

          {
            submittingFormSuccess && (
              <div className="submit-success">
                You have successfully sent your contact information!
              </div>
            )
          }

          <button
            className="button white"
            type="submit"
            disabled={pristine || invalid || submittingForm}
          >
            { submittingForm ? 'POŠALJI' : 'ŠALJE SE' }
          </button>
        </div>
      </form>
    );
  }
}

const ComingSoonSubscribeFormComp = reduxForm({
  form: 'contactUsForm',
  validate: contactUsFromValidator,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(ContactUsForm);

ContactUsForm.propTypes = {
  submittingForm: PropTypes.bool.isRequired,
  submittingFormSuccess: PropTypes.bool.isRequired,
  submittingFormError: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetContactUsForm: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ general }) => ({
  submittingForm: general.sendingContactUs,
  submittingFormSuccess: general.sendingContactUsSuccess,
  submittingFormError: general.sendingContactUsError,
});

const mapDispatchToProps = {
  onSubmit: submitContactUsForm, resetContactUsForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(ComingSoonSubscribeFormComp);
