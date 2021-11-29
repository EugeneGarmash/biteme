// import instaLogo from 'public/instagram.svg';
// console.log(instaLogo);
import instaLogo from './instagram.svg';
import telegramLogo from './telegram.svg';


export type Link = { // <T>
  img: string;
  link: string;
}

// link: 'https://forms.gle/qSTrFVxA8QzLzE3y5'

export const socialLinks: Link[] = [
  {
    img: instaLogo,
    link: 'https://www.instagram.com/eugene_garmash/',
  },
  {
    img: telegramLogo,
    link: 'https://t.me/Eugene_Garmash',
  },
];

export const actionButtons: any[] = [
  {
    text: 'Предложить',
    link: '',
  },
  {
    text: 'Сотрудничество',
    link: '',
  },
  {
    text: 'Мерч',
    link: '',
  }
];
