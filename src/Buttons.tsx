import ActionButton from "./ActionButton";
import classes from './Buttons.module.scss';

interface Props {
  items: any[];
}

/*
  <iframe
    src="https://docs.google.com/forms/d/e/1FAIpQLSdTf5Lcp7RamsK4wFcNXnZQGnK6te-d4J2NAt1FFPvvbdEQGQ/viewform?embedded=true"
    width="640"
    height="479"
    frameborder="0"
    marginheight="0"
    marginwidth="0"
    >
      Loading…
    </iframe>
*/

const Buttons = (props: Props) => {
  return (
    <ul className={classes.Buttons}>
      {props.items.map((l, index) =>
        <li
          className={classes.Buttons__actionButton}
          key={l.text}
        >
          <div style={{ marginBottom: '18px' }}>
            <ActionButton>
              Текст
            </ActionButton>
          </div>
        </li> // classes.
      )}
    </ul>
  )
};

export default Buttons;
