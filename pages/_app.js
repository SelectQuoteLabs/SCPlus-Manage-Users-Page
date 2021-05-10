import PropTypes from 'prop-types';
import MomentAdapter from '@material-ui/pickers/adapter/moment';
import { LocalizationProvider } from '@material-ui/pickers';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider as NextAuthProvider } from 'next-auth/client';
import {
  SQAdminLayout,
  muiTheme,
  SnackbarProvider,
} from 'scplus-shared-components';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Body from '@/components/Body';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import '../src/styles/index.css';

const queryClient = new QueryClient({
  defaultConfig: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
});

function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <StylesProvider>
      <NextAuthProvider session={pageProps.session}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
          <SnackbarProvider>
            <LocalizationProvider dateAdapter={MomentAdapter} locale={'en'}>
              <MuiThemeProvider theme={muiTheme}>
                {router.pathname === '/signin' ? (
                  <Component {...pageProps} />
                ) : (
                  <SQAdminLayout HeaderComponent={Header}>
                    <Body>
                      <Component {...pageProps} />
                    </Body>
                  </SQAdminLayout>
                )}
              </MuiThemeProvider>
            </LocalizationProvider>
          </SnackbarProvider>
        </QueryClientProvider>
      </NextAuthProvider>
    </StylesProvider>
  );
}

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType])
    .isRequired,
  pageProps: PropTypes.object,
};

export default App;
