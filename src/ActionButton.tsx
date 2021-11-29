import classes from './ActionButton.module.scss';

type Props = {
  children: JSX.Element | string;
}

const ActionButton = (props: Props) => {
  return (
    <button
      className={classes.ActionButton}
    >
      {props.children}
    </button>
  )
}

export default ActionButton;
