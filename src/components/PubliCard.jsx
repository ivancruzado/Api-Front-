import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardHeader, Grid, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link} from "react-router-dom"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useState } from 'react';
import PubliService from '../controllers/Publicaciones';

export default function PubliCard({note,onPause,onDelete,component}) {
  const [anchorEl, setAnchorEl] = useState(null)
  const [image, setImagen] = useState("")
  const open = Boolean(anchorEl);

 
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  const deletePublicacion = async (e) => {
    e.preventDefault();
    try {
      const loggedUser = window.localStorage.getItem('loggedUser');
      const user = JSON.parse(loggedUser);
  
      if (!user || !user.loginUser || !user.loginUser.token) {
        console.error('User or token undefined');
        return "error";
      }
      const token = user.loginUser.token

      const ID = note._id
  
      // Use await here to wait for the promise to resolve
      const returned = await PubliService.deleteP(ID,token);
  
    } catch (error) {
      console.error('Error deleting publication:', error);
    }
  };

  const updatePublicacion = async (e) => {
    e.preventDefault();
    
    try {
      const loggedUser = window.localStorage.getItem('loggedUser');
      const user = JSON.parse(loggedUser);
  
      if (!user || !user.loginUser || !user.loginUser.token) {
        console.error('User or token undefined');
        return "error";
      }
      const token = user.loginUser.token
      let Publicado = note.Publicado
      if(Publicado){
        Publicado = false
      }
      else{
        Publicado = true
      }
      
      const ID = note._id

      const returned = await PubliService.update(ID,token,Publicado);
  
    } catch (error) {
      console.error('Error deleting publication:', error);
    }
  };

  const imagen = () =>{
    PubliService
    .getPubliDetails(note._id)
    .then((response)=>{
      setImagen(response.data.image.secure_url)
    }).catch((error) => {
      console.error('Error fetching publication details:', error);
    })};

    useEffect(()=>{
      imagen();
  },[note._id])

  const handlePausado = () => {
    let nuevoEstado;
    if (note.Publicado) {
      nuevoEstado = false;
    } else {
      nuevoEstado = true;
    }
    const updatedNote = { ...note, estado: nuevoEstado };
    onPause(updatedNote);
  }


  const mostrarMenu = () =>{
    if(component){
      return(
      <div>
            <IconButton aria-label="settings"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MoreVertIcon fontSize="small" />
            </IconButton>
            <Menu
            id="MenuCard"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            >
              <MenuItem onClick={updatePublicacion}>{note.Publicado ? "Pausar" : "Activar"}</MenuItem>
             <MenuItem onClick={deletePublicacion}>Eliminar</MenuItem>
            </Menu>
          </div> 
    )}
  }


  
  return (

    <Card  sx={{ backgroundColor:'transparent', borderRadius: 4, height: 291,color:'black',boxShadow:9}}>
      <CardHeader sx = {{color:'white', height:85}}
        action={
            mostrarMenu()
          }
          title={note.tittle}
      />
      <CardActionArea>
        <Link to= {`/Publicacion/${note._id}`}>
        <CardMedia
          key={image}
          component="img"
          height="140"
          alt=""
          sx={{height: 140, width: '100%', objectFit: 'cover', }}
          image = {image}
          
        />
        <CardContent >
          <Typography variant="body2" color="text.secondary"  className="grid grid-cols-3 " sx = {{color:'white'}}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <strong>{note.frecuencia}</strong> | {note.categoria}
              </Grid>
            </Grid> 
          </Typography>
        </CardContent>
        </Link>
      </CardActionArea>
      
    </Card>
 
  );

}