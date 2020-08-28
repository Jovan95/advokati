import React, { useState } from 'react';
import email from '../../images/email.png';
import './EmailLink.scss';

const EmailLink = () => {
  const emailText = 'infoATsvarogdevDOTcom';
  const [emailHref, setEmailHref] = useState(false);
  const handleClick = () => {
    setEmailHref(
      `mailto:${emailText.replace(/AT/, '@').replace(/DOT/, '.')}`,
    );
  };
  return (
    <a
      href={emailHref}
      onClick={handleClick}
      className="email-link"
    >
      <img src={email} className="email" alt="text for email" />
    </a>
  );
};
EmailLink.propTypes = {};

export default EmailLink;
