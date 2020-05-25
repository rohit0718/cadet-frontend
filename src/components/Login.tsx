import {
  Button,
  ButtonGroup,
  Card,
  Classes,
  H4,
  Icon,
  NonIdealState,
  Spinner
} from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import * as classNames from 'classnames';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

export type LoginProps = DispatchProps & OwnProps;

export type DispatchProps = {
  handleFetchAuth: (code: string, providerId?: string) => void;
  handleLogin: (providerId?: string) => void;
};

export type OwnProps = {
  providers: Array<{ id: string; name: string }>;
  code?: string;
  providerId?: string;
};

const Login: React.FunctionComponent<LoginProps> = props => {
  React.useEffect(() => {
    if (props.code) {
      props.handleFetchAuth(props.code, props.providerId);
    }
  }, [props.code]);

  if (props.code) {
    return (
      <div className={classNames('Login', Classes.DARK)}>
        <Card className={classNames('login-card', Classes.ELEVATION_4)}>
          <div className="login-body">
            <NonIdealState
              description="Logging In..."
              icon={<Spinner size={Spinner.SIZE_LARGE} />}
            />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames('Login', Classes.DARK)}>
      <Card className={classNames('login-card', Classes.ELEVATION_4)}>
        <div className="login-header">
          <H4>
            <Icon icon={IconNames.LOCK} />
            LOGIN
          </H4>
        </div>
        <div className="login-body">
          <ButtonGroup fill={true} vertical={true}>
            {props.providers.map(({ id, name }) => (
              <LoginButton handleClick={props.handleLogin} name={name} id={id} key={id} />
            ))}
            {playgroundButton}
          </ButtonGroup>
        </div>
      </Card>
    </div>
  );
};

const LoginButton = ({
  handleClick,
  id,
  name
}: {
  handleClick: (id: string) => void;
  id: string;
  name: string;
}) => {
  return (
    <Button
      className={Classes.LARGE}
      rightIcon={IconNames.LOG_IN}
      onClick={React.useCallback(() => handleClick(id), [handleClick, id])}
    >
      {`Log in with ${name}`}
    </Button>
  );
};

const playgroundButton = (
  <NavLink to="/playground">
    <Button className={Classes.LARGE} rightIcon={IconNames.CODE}>
      Try out the playground
    </Button>
  </NavLink>
);

export default Login;
