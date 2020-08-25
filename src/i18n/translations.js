import I18nEN from './I18-en';
import I18nSRB from './I18-srb';
import { getLangOption } from '../services/translationService';

const lang = getLangOption().value;

switch (lang) {
  case 'en': {
    window.I18n = I18nEN;
    break;
  }
  case 'srb': {
    window.I18n = i18nEN;
    break;
  }
  default: {
    window.I18n = I18nSRB;
  }
}
