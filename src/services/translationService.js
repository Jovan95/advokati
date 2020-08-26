export const SUPPORTED_LANGUAGES = [
  { value: 'en', label: 'Eng' },
  { value: 'rs', label: 'Srb' },
];

export const getLangOption = () => {
  const lang = localStorage.getItem('lang') || SUPPORTED_LANGUAGES[0].value;

  return SUPPORTED_LANGUAGES.find(({ value }) => value === lang);
};

export const setLang = (lang) => {
  if (getLangOption().value === lang) return;

  localStorage.setItem('lang', lang);
  document.location.reload();
};
