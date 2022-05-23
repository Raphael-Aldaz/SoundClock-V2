import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import './Header.scss'



const ModalConnect = ({
    email,
    password,
    changeField,
    handleLogin
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    

    const handleChange=(e) =>{
        changeField(e.target.name, e.target.value)
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      handleLogin();
    }
  
    return (
      <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Se Connecter
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Connectez vous</DialogTitle>
        <form onSubmit={handleSubmit}>
        <DialogContent >
          
            <TextField
                    margin="dense"
                    id="name-input"
                    name="username"
                    value={email}
                    label="Votre Email"
                    required
                    type={'email'}
                    onChange={handleChange}
                />
                <TextField 
                    margin="dense"
                    id="mdp-input"
                    name="password"
                    value={password}
                    label='Votre mot de passe'
                    required
                    type={'password'}
                    onChange={handleChange}
                 />
          
          
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>Annuler</Button>
          <Button variant="contained" onClick={handleClose} type="submit">se connecter</Button>
          </DialogActions>
        </form>
        
      </Dialog>
        
      </div>
    );
}

export default ModalConnect

/* const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false); */

{/* <Button onClick={handleOpen}>Se Connecter</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className='modal-open'>
          <form onSubmit={handleSubmit}>
            <h1>Connectez vous </h1>
            <TextField
                    margin="dense"
                    id="name-input"
                    name="username"
                    value={email}
                    label="Votre Email"
                    required
                    type={'email'}
                    onChange={handleChange}
                />
                <TextField 
                    margin="dense"
                    id="mdp-input"
                    name="password"
                    value={password}
                    label='Votre mot de passe'
                    required
                    type={'password'}
                    onChange={handleChange}
                 />

            <Button variant="contained" endIcon={<SendIcon />} type="submit"  onClose={handleClose}>
              Send
            </Button>    
            
            </form>
          </Box>
        </Modal> */}