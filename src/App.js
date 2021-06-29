import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Form from 'rc-field-form';

import Button from './MatirialUiComponents/Button'
import Modal from './components/Model/Modal'
import { AddPost, getAllData } from "./redux/Action"
import DisplayPost from './components/Display'

import './app.scss'

const App = () => {

    const [form] = Form.useForm()
    const dispatch = useDispatch();

    const [file, setFile] = useState()
    const data = useSelector((state) => state.data);
    const [modalOpen, setModalOpen] = useState(false);
    const [errors, setErrors] = useState({});

    const toggleModal = useCallback(() => {
        setModalOpen((prevState) => !prevState)
        form.resetFields()
        setErrors({
            firstNameError: '',
            lastNameError: ''
        })
        setFile('')
    }, [])

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data))
    }, [data])


    const imageChange = (e) => {
        setFile(e.target.files[0])
    }
    const getFormValue = useCallback((values) => {

        setErrors({
            firstNameError: '',
            lastNameError: ''
        })
        if (file) {
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                values['imageUrl'] = reader.result
                dispatch(AddPost(values))
                dispatch(getAllData())
                setModalOpen(false);
                form.resetFields()
                setFile('')
            })
            reader.readAsDataURL(file);
        } else {
            dispatch(AddPost(values))
            dispatch(getAllData())
            setModalOpen(false);
            form.resetFields()
            setFile('')
        }

    }, [file])

    let field = ['firstName', 'lastName']

    const failedState = useCallback(() => {
        let data = form.getFieldsValue([...field]);
        let data1 = form.getFieldsError([...field])
        console.log(data1)
        let obj = {}
        if (!data.firstName && !data.lastName) {
            obj.firstNameError = 'please fill mendatory input field'
            obj.lastNameError = 'please fill mendatory input field'
        }
        else if (!data.lastName || data1[1].errors.length) {
            if (data1[1].errors) {
                obj.lastNameError = 'please filled valid input'
            } else {
                obj.lastNameError = 'please fill mendatory input field'
            }
        } else if (!data.firstName || data1[0].errors.length) {
            if (data1[0].errors) {
                obj.firstNameError = 'please filled valid input'
            } else {
                obj.firstNameError = 'please fill mendatory input field'
            }
        }
        setErrors(obj)
    }, [])
    const genrateText = useCallback(() => {
        axios.get('https://api.quotable.io/random?maxLength=50').then((res) => {
            form.setFieldsValue({ randomText: res?.data?.content });
        })

    }, [])

    return (
        <div className="main">
            <div className='posts'>
                <Button text='Add New Post' oncilck={toggleModal} className="create_post_button" />
            </div>
            <hr />
            <Modal imageChange={imageChange} errors={errors} failedState={failedState} modalState={modalOpen} genrateText={genrateText} closeModal={toggleModal} getFormValue={getFormValue} form={form} />
            <div className="allPosts">
                <DisplayPost data={data} />
            </div>
        </div>
    )
}
export default App