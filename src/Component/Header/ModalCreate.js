import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { FormControl } from '@mui/material';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import './Header.scss'




const ModalCreate = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    
   
  
    return (
      <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <form>
        <DialogContent>
         
          <TextField
            
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            
           
          />
           <TextField
            
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            
            
          />
           <TextField
           
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            
           
          />
           <TextField
           
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            
            
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleClose}>Subscribe</Button>
        </DialogActions>

        </form>
      </Dialog>
        
      </div>
    );
}

export default ModalCreate


/* const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



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



<Button onClick={handleOpen}>Créer votre compte</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className='modal-open'>
            <FormControl>
            <TextField 
                    id="pseudo-input"
                    name="pseudo"
                    label='Votre pseudo'
                    required
                    type={'text'}
                   
                 />
                <TextField 
                    id="name-input"
                    name="username"
                    label="Votre Email"
                    required
                    type={'email'}
                   
                />
                
                <TextField 
                    id="mdp-input"
                    name="password"
                    label='Votre mot de passe'
                    required
                    type={'password'}
                   
                 />
            <Button variant="contained" color="primary" type="submit"onClose={handleClose}>
                Submit
            </Button>    

            </FormControl>
          </Box>
        </Modal> */