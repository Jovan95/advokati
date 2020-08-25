import I18nEN from './I18-en';
import I18nRS from './I18-rs';
import { getLangOption } from '../services/translationService';

const lang = getLangOption().value;

console.log('I18nRS', I18nRS);

switch (lang) {
  case 'en': {
    window.I18n = I18nEN;
    break;
  }
  case 'rs': {
    window.I18n = I18nRS;
    break;
  }
  default: {
    window.I18n = I18nRS;
  }
}
