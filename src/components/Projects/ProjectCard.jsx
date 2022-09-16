import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles'
import './Projects.css'


const theme = createTheme({
  palette: {
    primary: {
      main:'#8B72BE'
    }
}})
const ProjectCard = (props) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.img}
        alt={props.alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <ThemeProvider theme={theme}>
      <CardActions className='projects-button__actions'>
        <Button size="small" color="primary" variant="contained"  href={props.deployment}>Live</Button>
        <Button size="small" color="primary" variant="outlined" href={props.github}>Github</Button>
      </CardActions>
      </ThemeProvider>
    </Card>
  )
}

export default ProjectCard