import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ForumIcon from '@material-ui/icons/Forum';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import PeopleIcon from '@material-ui/icons/People';
import {
  SideNav,
  SideNavMiddle,
  SideNavTop,
  Avatar,
} from 'scplus-shared-components';
import SideNavIcons from '@/components/SideNavIcons';
import ManageAddUser from './ManageAddUser';

const SideNavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { pathname } = useRouter();
  const handleOpenAddUserModal = () => {
    setIsOpen(true);
  };

  const handleCloseAddUserModal = () => {
    setIsOpen(false);
  };

  const doesRouteSupportCreate = () => {
    if (pathname === '/') {
      return true;
    } else {
      return false;
    }
  };

  const isCreateDialogButtonDisabled = doesRouteSupportCreate();
  return (
    <SideNav>
      <SideNavTop>
        {isCreateDialogButtonDisabled ? (
          <SideNavIcons>
            <Avatar isInverted={false} placement="right" arrow={true}>
              A
            </Avatar>
          </SideNavIcons>
        ) : (
          <ManageAddUser
            avatarLetter="+"
            title="Manage Users"
            handleOpenAddUserModal={handleOpenAddUserModal}
            handleCloseAddUserModal={handleCloseAddUserModal}
            isOpen={isOpen}
          />
        )}
      </SideNavTop>
      <SideNavMiddle>
        <SideNavIcons>
          <Link href="/manage-users">
            <PeopleIcon />
          </Link>
        </SideNavIcons>
        <SideNavIcons isInverted={true}>
          <AssignmentIndIcon />
        </SideNavIcons>
        <SideNavIcons isInverted={true}>
          <ForumIcon />
        </SideNavIcons>
        <SideNavIcons isInverted={true}>
          <AssignmentLateIcon />
        </SideNavIcons>
      </SideNavMiddle>
    </SideNav>
  );
};

export default SideNavBar;
