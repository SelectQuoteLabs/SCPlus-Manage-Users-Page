import PropTypes from 'prop-types';
import {
  SQAdminPageLayout,
  SQAdminMainContent,
  Snackbar,
  useSnackbar,
} from 'scplus-shared-components';

export default function Body({ children }) {
  const [snackbarState, { closeSnackbar }] = useSnackbar();

  return (
    <SQAdminPageLayout>
      <SQAdminMainContent>{children}</SQAdminMainContent>
      <Snackbar
        position={{ vertical: 'top', horizontal: 'right' }}
        snackbarState={snackbarState}
        closeSnackbar={closeSnackbar}
      />
    </SQAdminPageLayout>
  );
}

Body.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType])
    .isRequired,
};
