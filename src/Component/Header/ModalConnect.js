import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import './Header.scss'



const ModalConnect = ({
    email,
    password,
    changeField,
    handleLogin
}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange=(e) =>{
        changeField(e.target.name, e.target.value)
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      handleLogin();
    }
  
    return (
      <div>
        <Button onClick={handleOpen}>Se Connecter</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className='modal-open'>
          <form onSubmit={handleSubmit}>
            
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
        </Modal>
      </div>
    );
}

export default ModalConnect