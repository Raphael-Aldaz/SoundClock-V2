import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import './Header.scss'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const ModalConnect = ({
    email,
    password,
    changeField,
    submit
}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange=(e) =>{
        changeField(e.target.name, e.target.value)
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
          <Box sx={style}>
            <form onSubmit={submit}>
                <TextField 
                    id="name-input"
                    name="username"
                    value={email}
                    label="Votre Email"
                    required
                    type={'email'}
                    onChange={handleChange}
                />
                <TextField 
                    id="mdp-input"
                    name="password"
                    value={password}
                    label='Votre mot de passe'
                    required
                    type={'password'}
                    onChange={handleChange}
                 />
            <Button variant="contained" color="primary" type="submit">
                Submit
            </Button>    
            </form>
          </Box>
        </Modal>
      </div>
    );
}

export default ModalConnect