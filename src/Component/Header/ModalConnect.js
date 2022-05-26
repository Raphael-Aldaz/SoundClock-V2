
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLogin } from '../../actions';
import './Header.scss'




const ModalConnect = ({
    changeField,
    handleLogin
}) => {

  const open = useSelector((state)=> state.users.open);
  const dispatch = useDispatch();
  

  const handleClick = () => {
    /* const form = document.querySelector('.dropdown__content');
    form.style.display = 'block'; */
    dispatch(toggleLogin())
    console.log(open)

  }
  const handleformclose = () => {
    const form = document.querySelector('.dropdown__content');
    form.style.display = 'block';

  }

  const {register, handleSubmit} = useForm();
  const onSubmit = data =>{
    changeField(data.username, data.password )
    handleLogin();
    } 

  
    return (
    <div className="dropdown">
    
    <button onClick={handleClick}>Connectez Vous</button>

    {
      open &&    ( <div className="dropdown__content">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='input_email'>
          <h1>Votre Email</h1>
          <input required type='email' label="Votre Email" name='username' {...register('username')}    />
        </div>
        <div className='input_password'>
          <h1>Votre mot de passe</h1>
          <input required type='password' label="Votre Password" name='password' {...register('password')}   />
        </div>
      
        <button onClick={handleformclose} >Valider</button>
      </form>
        
        
    </div>)
    }

</div>
    );
}

export default ModalConnect

/* const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false); 

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
        </Modal> */

        /* <Button variant="outlined" onClick={handleClickOpen}>
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
        
      </Dialog> */