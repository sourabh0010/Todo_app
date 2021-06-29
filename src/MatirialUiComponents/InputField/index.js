import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            '& .MuiTextField-root': {
                // margin: theme.spacing(1),
                width: '40ch',
            },           },
        [theme.breakpoints.up('md')]: {
            '& .MuiTextField-root': {
                // margin: theme.spacing(1),
                width: '45ch',
            },        },
        [theme.breakpoints.up('lg')]: {
            '& .MuiTextField-root': {
                // margin: theme.spacing(1),
                width: '45ch',
            },       
         },
      },
    // root: {
    //     '& .MuiTextField-root': {
    //         margin: theme.spacing(1),
    //         width: '45ch',
    //     },
    // },
}));

export default function InputField(props) {

    const classes = useStyles();
    const { label, defaultValue, type, disable, onChange,error } = props

    return (
        <div className={classes.root}>
            <TextField
                disabled={disable}
                id="outlined-helperText"
                label={label}
                defaultValue={defaultValue}
                type={type}
                onChange={onChange}
                variant="outlined"
            />
        </div>
    );
}
