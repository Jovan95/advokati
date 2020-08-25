import t from 'translate';

export const LAWYERS = [
  {
    id: 0,
    position: 'bottom',
    name: 'Milos Lekic',
    lawyerTitle: 'CEO',
    area: t('common.area'),
    img: 'Milos.png',
    value: [0, 1],
  },
  {
    id: 1,
    position: 'top',
    name: 'Marko Lekic',
    lawyerTitle: 'CEO',
    area: t('common.area'),
    img: 'Milos.png',
    value: [0],
  },
  {
    id: 2,
    position: 'bottom',
    name: 'Milan Lekic',
    lawyerTitle: 'CEO',
    area: t('common.area'),
    img: 'Milos.png',
    value: [0, 1, 2, 4],
  },
  {
    id: 3,
    position: 'top',
    name: 'Milivoje Lekic',
    lawyerTitle: 'CEO',
    area: t('common.area'),
    img: 'Milos.png',
    value: [1, 5, 6],
  },
  {
    id: 4,
    position: 'bottom',
    name: 'Mitar Lekic',
    lawyerTitle: 'CEO',
    area: t('common.area'),
    img: 'Milos.png',
    value: [1, 4, 5],
  },
];

export const OPTIONS = {
  options: [
    { value: 0, label: t('lawyers.options.label1') },
    { value: 1, label: t('lawyers.options.label2') },
    { value: 3, label: t('lawyers.options.label3') },
    { value: 4, label: t('lawyers.options.label4') },
    { value: 5, label: t('lawyers.options.label5') },
    { value: 6, label: t('lawyers.options.label6') },
  ],
};
