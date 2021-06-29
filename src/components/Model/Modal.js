import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Slide from '@material-ui/core/Slide';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';


import Button from '../../MatirialUiComponents/Button';
import Input from "../../MatirialUiComponents/rcForm"
import FormWrapper from '../../MatirialUiComponents/RcFormWrapper';

import './model.scss'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({

    // input: {
    //       display: 'none',
    // },
}));

export default function Modal({ modalState, errors, closeModal, imageChange, failedState, getFormValue, genrateText, form, value }) {
    const regxForNum = /^[a-z]+$/;
    const [a, setA] = useState('')
    const classes = useStyles();
    const rules = [{pattern:regxForNum},{required:true}]
    console.log("errors",errors)
  
    return (
        <div>
            <Dialog
                open={modalState}
                TransitionComponent={Transition}
                onClose={closeModal}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <FormWrapper
                    getFormValues={getFormValue}
                    form={form}
                    failedState={failedState}
                    // error={error}
                >
                    <div className="inputModel">
                        <Input name="randomText" form={form} initialValue={value} />
                        <br />
                        <Button className='buttonGenrateText' oncilck={genrateText} text='Genrate random text ' /><br />
                        <Input name="firstName" form={form} rules={rules} error={errors?.firstNameError ? true : false} label="First name" />
                        <p>{errors?.firstNameError}</p><br />
                        <Input name="lastName" form={form} rules={rules} error={errors?.lastNameError ? true : false} label="Last name" />
                        <p>{errors?.lastNameError}</p><br />
                        <Input name="description" form={form} label="Description" /><br />
                      
                        <label htmlFor="icon-button-file">
                            
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera  />
                                <input accept="image/*" className={classes.input} id="icon-button-file" type="file"  onChange={imageChange}/>
                            </IconButton>
                        </label>
                        <DialogActions>
                            <Button oncilck={closeModal} text='Cancel' />
                            <Button type='Save' text='submit' />
                        </DialogActions>
                    </div>
                </FormWrapper>
            </Dialog>
        </div>
    );
}