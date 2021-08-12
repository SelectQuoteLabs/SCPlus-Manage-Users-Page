import PropTypes from 'prop-types';
import {
  SQAdminPageLayout,
  SQAdminMainContent,
} from 'scplus-shared-components';
import SideNavBar from './SideNavBar';

export default function Body({ children }) {
  return (
    <SQAdminPageLayout>
      <SideNavBar />
      <SQAdminMainContent>{children}</SQAdminMainContent>
    </SQAdminPageLayout>
  );
}

Body.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType])
    .isRequired,
};
