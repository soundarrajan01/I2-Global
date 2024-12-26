import { Button, message, Modal } from 'antd'
import React, { useState } from 'react'
import CommonInput from './CommonInput'
import CommonButton from './CommonButton'
import { useFormik } from 'formik'
import * as Yup from "yup" 
import TextArea from 'antd/es/input/TextArea'
import styles from "./CommonInput.module.css"
export default function AddNotesModal({ isOpen, handleOk, handleCancel ,setOverallNotes}) {
    const [addNotes,setAddNotes]=useState([])
    const {handleChange,values,errors,handleSubmit,touched,resetForm}=useFormik({
        initialValues:{
            notes:'',
            message:''
        },
        validationSchema:Yup.object().shape({
            notes: Yup.string().trim().required("* Notes is Required"),
            message: Yup.string().trim().required("* Message is Required"),
          }),
          onSubmit:()=>{
            setAddNotes((prev)=>[...prev,{notes:values.notes,message:values.message}])
            setOverallNotes(values)
            resetForm()
            handleCancel()
            
          }
    })
    
    
  return (
    <div class="modal-overlay">
  <div class="modal-content">
       <Modal
       style={{width:'200px !important'}}
      open={isOpen}
      title="Add Notes"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button  style={{backgroundColor:'#274375' ,width:'200px'}}  key="ok" type="primary" onClick={handleSubmit}>Add</Button>,
        <Button style={{backgroundColor:'red' ,width:'200px'}}  key="ok" type="primary" onClick={handleCancel}>Cancel</Button>,
      ]}
    >
      <CommonInput placeHolder={'Notes'} onChange={handleChange} name={'notes'} values={values.notes} heading={'Notes'} commonStyle={{height:'45px'}} errorsTxt={errors.notes ?? errors.notes }/>
    <div className={styles.messageText}>
    <div className={styles.headingOutline}>
        <p className={styles.HeadingText}>Message</p>
        <p className={styles.requiredsymbol}>*</p>
        </div>
      <TextArea value={values.message} onChange={handleChange} name="message"  rows={4} placeholder="message" maxLength={500} />
     {touched.message&&errors.message ? <p className={styles.errorText}>{errors.message}</p>:null}
      </div>
    </Modal>
    </div>

</div>
  )
}
