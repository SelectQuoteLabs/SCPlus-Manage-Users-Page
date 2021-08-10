import React from 'react';
import ForumIcon from '@material-ui/icons/Forum';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import PeopleIcon from '@material-ui/icons/People';
import { SideNav, SideNavMiddle, SideNavTop } from 'scplus-shared-components';
import SideNavIcons from '@/components/SideNavIcons';
import SideNavAvtars from '@/components/SideNavAvtars';

const SideNavBar = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpenAddUserModal = () => {
    setOpen(true);
  };

  const handleCloseAddUserModal = () => {
    setOpen(false);
  };
  return (
    <SideNav>
      <SideNavTop>
        <SideNavAvtars
          avatarLetter="+"
          title="Manage Users"
          handleOpenAddUserModal={handleOpenAddUserModal}
          handleCloseAddUserModal={handleCloseAddUserModal}
          open={open}
        />
      </SideNavTop>
      <SideNavMiddle>
        <SideNavIcons>
          <PeopleIcon
            onClick={() => {
              alert('I was clicked');
            }}
          />
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
