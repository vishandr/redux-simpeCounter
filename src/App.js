import { useSelector, useDispatch } from 'react-redux';
import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

import { authActions } from './components/store/index';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Fragment>
      <Header />
      {!isAuth ? <Auth /> : <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
