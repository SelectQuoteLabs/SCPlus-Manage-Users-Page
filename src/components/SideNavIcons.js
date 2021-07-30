import { IconButton, Avatar } from 'scplus-shared-components';
const SideNavIcons = ({ isInverted, children }) => {
  return (
    <div style={{ marginBottom: 15 }}>
      <IconButton
        height="55px"
        width="55px"
        IconComponent={() => (
          <Avatar isInverted={isInverted}>{children}</Avatar>
        )}
      />
    </div>
  );
};

export default SideNavIcons;
