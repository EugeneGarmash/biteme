import classes from './BubbleFloat.module.scss';

const BubbleFLoat = () => {
  return (
    <div className={classes.bubbles}>
      {new Array(50).fill(1).map((i, index) =>
        <div className={classes.bubble} key={index}></div>
      )}
    </div>
  );
};

export default BubbleFLoat;
