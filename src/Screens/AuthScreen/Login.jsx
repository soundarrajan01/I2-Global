import React from "react";
import styles from "./Login.module.css"
import LoginIcon from "../../assets/Png/login.png"
import CommonInput from "../../Componets/CommonInput";
import { Col, Row } from "antd";
import CommonButton from "../../Componets/CommonButton";
import I2globalIcon from "../../assets/Png/i2Global.png"
import { useFormik } from "formik";
import * as Yup from "yup" 
import { useNavigate } from "react-router";
export default function Login() {
  const navigate=useNavigate()
  const {values,handleChange,errors,handleSubmit}=useFormik({
    initialValues:{
      name:'',
      password:''
    },
    validationSchema:Yup.object().shape({
      name: Yup.string().trim().required("* Username is Required"),
      password: Yup.string().trim().required("* Password is Required"),
    }),
    onSubmit:()=>{
      localStorage.setItem('userDetails',values.name)
      navigate('/dashboard')
    }
  })
  
  return (
    <div className={styles.container}>
      <div className={styles.authContainer}>
       <div style={{}}>
        <img src={LoginIcon} style={{width:'300px' ,height:'300px'}}/>
       </div>
     <div className={styles.loginBox}>
      <Row>
      <Col lg={24}>
        <div className={styles.logoImageOutline}>
        <img src={I2globalIcon} className={styles.logoImage}/>
        </div>
        </Col>
     <Col lg={24}>
    <CommonInput  placeHolder={'Name'} onChange={handleChange} name={'name'} values={values.name} heading={'User Name'} commonStyle={{height:'40px',marginBottom:'10px'}} errorsTxt={errors.name ?? errors.name }/>
    </Col>
    <Col lg={24}>
    <CommonInput placeHolder={'Password'} onChange={handleChange} name={'password'} values={values.password} heading={'Password'} commonStyle={{height:'45px'}} errorsTxt={errors.password ?? errors.password }/>
    </Col>
    <Col lg={24}>
    <p onClick={()=>navigate('signup')} className={styles.SignupText}>SignUp ?</p>
    </Col>
    <Col lg={24}>
    <CommonButton BtnName={"Login"} onPress={()=>{
     handleSubmit()
      
    }}/>
    </Col>
    </Row>
     </div>  
      </div>
    </div>
 
  );
}
