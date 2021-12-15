import Header from './Header';
import classes from './App.module.scss';
import { actionButtons } from './constants';
import Buttons from './Buttons';
// import BubbleFloat from './BubbleFloat';

function App() {

  window.location.href = 'https://www.instagram.com/eugene_garmash/';
  return null;

  // @todo !! "build": "CI=false && react-scripts build",

  return (
    <div className={classes.App__container}>
      {/* <BubbleFloat /> */}
      <div className={classes.App}>
        <div className={classes.App__headerContainer}>
          <Header />
        </div>
        <div className={classes.App__buttons}>
          <Buttons
            items={actionButtons}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
