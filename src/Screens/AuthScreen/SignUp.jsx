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
import { REGEX } from "../../Methods/Constant";
export default function Signup() {
  const navigate=useNavigate()
  const {values,handleChange,errors,handleSubmit}=useFormik({
    initialValues:{
      name:'',
      password:'',
      mobileNumber:'',
      email:''
    },
    validationSchema:Yup.object().shape({
      name: Yup.string().trim().required("* Username is Required"),
      password: Yup.string().trim().required("* Password is Required"),
      mobileNumber: Yup.string()
      .matches(REGEX.MobileNo, "Invalid Phone Number")
      .required("Mobile Number is required"),
      email: Yup.string()
      .matches(REGEX.EMAIL, "Invalid ber")
      .required("Email is required"),
    }),
    onSubmit:()=>{
     navigate('/')
      
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
    <CommonInput placeHolder={'mobileNumber'} onChange={handleChange} name={'mobileNumber'} values={values.mobileNumber} heading={'mobileNumber'} commonStyle={{height:'45px'}} errorsTxt={errors.mobileNumber ?? errors.mobileNumber }/>
    </Col>
    <Col lg={24}>
    <CommonInput placeHolder={'Email'} onChange={handleChange} name={'email'} values={values.email} heading={'EMail'} commonStyle={{height:'45px'}} errorsTxt={errors.email ?? errors.email }/>
    </Col>
    {/* <Col lg={24}>
    <p onClick={()=>navigate('signup')} className={styles.SignupText}>SignUp ?</p>
    </Col> */}
    <Col lg={24}>
    <CommonButton BtnName={"Submit"} onPress={()=>{
     handleSubmit()
      
    }}/>
    </Col>
    </Row>
     </div>  
      </div>
    </div>
 
  );
}
