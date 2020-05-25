import * as React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchAuth, login } from '../actions/session';
import Login, { OwnProps } from '../components/Login';

const LoginContainer: React.FunctionComponent<OwnProps> = props => {
  const dispatch = useDispatch();
  const dispatchProps = React.useMemo(
    () =>
      bindActionCreators(
        {
          handleFetchAuth: fetchAuth,
          handleLogin: login
        },
        dispatch
      ),
    [fetchAuth, login, dispatch, bindActionCreators]
  );

  return <Login {...dispatchProps} {...props} />;
};

export default LoginContainer;
