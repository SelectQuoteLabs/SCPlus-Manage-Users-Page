import { signIn } from 'next-auth/client';
import { Button, makeStyles, Tooltip } from '@material-ui/core';
import { LoginScreen } from 'scplus-shared-components';

const loginText = 'Sign in with Google';

const useStyles = makeStyles({
  loginButton: {
    color: 'var(--color-seniorOrange)',
    backgroundColor: 'white',
    borderRadius: '2rem',
    paddingRight: '4rem',
    paddingLeft: '4rem',
    fontSize: '14px',
    fontWeight: 'var(--font-weight-semibold)',
    '&:hover': {
      backgroundColor: 'var(--color-lightGray)',
    },
  },
});

function Signin() {
  const classes = useStyles();
  return (
    <LoginScreen
      paperColor="var(--color-seniorOrange)"
      backgroundColor="var(--color-whiteSmoke)"
      title="Skeleton UI"
    >
      <Tooltip title={loginText}>
        <Button
          className={classes.loginButton}
          onClick={() => signIn('google')}
        >
          {loginText}
        </Button>
      </Tooltip>
    </LoginScreen>
  );
}

export default Signin;
