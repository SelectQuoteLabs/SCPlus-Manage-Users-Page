import { IconButton, Avatar } from 'scplus-shared-components';
const SideNavIcons = ({ isInverted, children }) => {
  return (
    <div style={{ marginTop: '6px', marginBottom: '6px' }}>
      <IconButton
        IconComponent={() => (
          <Avatar isInverted={isInverted}>{children}</Avatar>
        )}
      />
    </div>
  );
};

export default SideNavIcons;
