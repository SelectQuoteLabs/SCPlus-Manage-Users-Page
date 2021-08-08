import React from 'react';
import { Avatar } from 'scplus-shared-components';
import {
  IconButton,
  Tooltip,
  makeStyles,
  Modal,
  Backdrop,
  Fade,
  TextField,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  iconButton: {
    padding: '0px',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  inputField: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    width: '400px',
  },
}));

const SideNavAvtars = ({
  title,
  avatarLetter,
  handleOpenAddUserModal,
  handleCloseAddUserModal,
  open,
}) => {
  const classes = useStyles();
  return (
    <>
      <IconButton
        className={classes.iconButton}
        onClick={handleOpenAddUserModal}
      >
        <div>
          <Tooltip title={title}>
            <Avatar isInverted placement="right" arrow={true}>
              {avatarLetter.toUpperCase()}
            </Avatar>
          </Tooltip>
        </div>
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleCloseAddUserModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form noValidate autoComplete="off">
              <div className={classes.inputField}>
                <TextField
                  id="outlined-basic"
                  label="User Name"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className={classes.inputField}>
                <TextField
                  id="standard-multiline-static"
                  label="User Comment"
                  multiline
                  rows={5}
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div>
                <Button variant="contained" color="primary">
                  Save
                </Button>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default SideNavAvtars;
