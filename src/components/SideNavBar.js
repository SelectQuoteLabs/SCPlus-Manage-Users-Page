import ForumIcon from '@material-ui/icons/Forum';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import PeopleIcon from '@material-ui/icons/People';
import SideNavIcons from '@/components/SideNavIcons';
import { SideNav, SideNavMiddle, SideNavTop } from 'scplus-shared-components';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const SideNavBar = () => {
  return (
    <SideNav>
      <SideNavTop>
        <SideNavIcons>
          <span
            onClick={() => {
              alert('I am clicked');
            }}
          >
            A
          </span>
        </SideNavIcons>
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
