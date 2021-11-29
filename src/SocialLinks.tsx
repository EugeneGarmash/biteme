import { socialLinks } from "./constants";
import classes from './SocialLinks.module.scss';
import shareLogo from './share.svg';

type Props = {
  items: typeof socialLinks;
}

const SocialLinks = (props: Props) => {

  const shareLink = {
    img: shareLogo,
    callback: () => console.log('HEY'),
  }

  return (
    <ul className={classes.SocialLinks}>
      {props.items.map(l => (
        <li
          className={classes.SocialLinks__link}
          key={l.img}
        >
          <img src={l.img} alt={l.link}/>
        </li>
      ))}
      <li onClick={shareLink.callback}>
        <img src={shareLink.img} alt='shareLink' />
      </li>
    </ul>
  );
}

export default SocialLinks;
