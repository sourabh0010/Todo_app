import React from 'react'
import Form from 'rc-field-form';

const FormWrapper = ({ getFormValues, failedState,form,error,children }) => {
    return (
        <Form
            form={form}
            onFinish={values => {
                getFormValues(values)
            }}        
            onFinishFailed={(values)=>{            
                failedState()
            }}
             >
            {children}
        </Form>
    )
}
export default FormWrapper