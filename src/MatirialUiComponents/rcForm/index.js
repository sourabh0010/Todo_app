import React, { useEffect, useState } from 'react'
import { Field } from 'rc-field-form';

import TextField from '@material-ui/core/TextField';

const RcFrom = ({ initialValue, name, label, error, type, rules, }) => {

    return (
        <Field name={name} rules={rules}  className="field" initialValue={initialValue}>

            <TextField
                error={error}
                id="outlined-helperText"
                label={label}
                defaultValue={initialValue}
                type={type}
                // helperText="ddd"
                variant="outlined"
            />
        </Field>
    )
}
export default RcFrom