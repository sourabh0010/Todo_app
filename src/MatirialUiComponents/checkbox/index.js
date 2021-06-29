import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox } from '@material-ui/core';
import './checkbox.scss';

const Checkboxs = ({ checked, handleChange, value, label, className }) => {
    // let checkboxValue=''
    // const [defaultValue,setDefaultValue]=useState(value)
    // useEffect(()=>{
    //     if(!checked){
    //         console.log("ddd")
    //         setDefaultValue('')        }    
    // },[checked])
   
    return (
            <FormControlLabel
                className={className || ''}
                control={<Checkbox checked={checked} />}
                label={label} value={value} onChange={handleChange} />
    )
}
export default Checkboxs