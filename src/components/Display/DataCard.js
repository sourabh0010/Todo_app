import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles((theme)=>({
  root: {
    minWidth: 275,
    width:300,
    textAlign:'left',
    position:'center',
    marginTop:20,
    border:'1px solid #D3D3D3',
    borderRadius:50
  },
  media: {
    height: 140,
    // maxWidth:'100%',
    objectFit: 'fill'

  },
 
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
    // width:200   
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function DataCard({post}) {
  const classes = useStyles();
  
    const {firstName,lastName,description,randomText,imageUrl}=post
   
  return (
    <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="iamge"
          height="200"
          image={imageUrl}
          title="Contemplative Reptile"
        />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         UserName-: <b>{(firstName || '') + ' '+ (lastName || '')}</b>
        </Typography>
        <Typography variant="h6" component="h2">
            {randomText}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Description -: <strong>{description}</strong>
        </Typography>
       
      </CardContent>

    </Card>
  );
}
