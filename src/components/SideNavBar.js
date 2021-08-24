import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ForumIcon from '@material-ui/icons/Forum';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import PeopleIcon from '@material-ui/icons/People';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Tooltip from '@material-ui/core/Tooltip';
import {
  SideNav,
  SideNavMiddle,
  SideNavTop,
  Avatar,
  IconButton,
} from 'scplus-shared-components';
import { useCreateDialogDispatch } from '../context/CreateDialogContext';
import ManageAddUser from './ManageAddUser';

const SideNavBar = () => {
  const { openDialog } = useCreateDialogDispatch();
  const { pathname } = useRouter();
  const doesRouteSupportCreate = () => {
    if (pathname === '/') {
      return true;
    } else {
      return false;
    }
  };

  const createDialogButtonTitle = 'Add New Item';
  const isCreateDialogButtonDisabled = doesRouteSupportCreate();

  return (
    <SideNav>
      <SideNavTop>
        <IconButton
          isDisabled={isCreateDialogButtonDisabled}
          isInverted={!isCreateDialogButtonDisabled}
          isIconTeal={true}
          height="42px"
          width="42px"
          onClick={openDialog}
          title={createDialogButtonTitle}
          IconComponent={AddCircleIcon}
        />
      </SideNavTop>
      <SideNavMiddle>
        <Link href="/manage-users">
          <a style={{ textDecoration: 'none' }}>
            <Tooltip title="Manage Users" placement="right" arrow={true}>
              <Avatar isInverted isFocused={pathname === '/manage-users'}>
                <PeopleIcon />
              </Avatar>
            </Tooltip>
          </a>
        </Link>
      </SideNavMiddle>
    </SideNav>
  );
};

export default SideNavBar;
