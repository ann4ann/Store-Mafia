import maska from './maska3.png';

let cards = [
   {
      link: '#',
      img: maska,
      title: 'Маска для мафии “Чикаго” уже в продаже',
      price: 590,
   },
   {
      link: '#',
      img: maska,
      title: 'Маска для мафии “Готэм” уже в продаже',
      price: 590,
   },
   {
      link: '#',
      img: maska,
      title: 'Маска для мафии “Лас-Вегас” уже в продаже',
      price: 1690,
   },
];

export function getCards() {
   return cards;
}
