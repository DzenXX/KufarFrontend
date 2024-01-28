import Box from '@mui/material/Box';
import { fetchAuth, selectName, logout, selectIsAuth, fetchRegistration } from '../../redux/slices/auth';
import { TextField } from '@mui/material';
import { Link, redirect } from 'react-router-dom';
import { useRef, useState } from 'react';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import iconSet from '../../styles/icons/selection2.json'
import IcomoonReact from 'icomoon-react';
import { useNavigate } from "react-router-dom";



function Registration() {

   const navigate = useNavigate();

   const {
      register: register2,
      formState: { errors: errors2, isValid: isValid2 },
      handleSubmit: handleSubmit2,
   } = useForm({
      defaultValues: {
         email: '',
         password: '',
         fullName: '',
      }
   })

   const onSubmit2 = async (values) => {
      const data = await dispatch(fetchRegistration(values))

      if (!data.payload) {
         return alert("Не удалось зарегистрироваться. Скорее всего, ваш пароль слишком короткий или аккаунт с подобной электронной почтой уже существует")
      }
      redirect("/profile")
      if ('token' in data.payload) {
         window.localStorage.setItem('token', data.payload.token)
         navigate("/");
      }
   }
 
   const dispatch = useDispatch()

   return (
      <>
         <div className="fullscreen__registration registration">
            <form onSubmit={handleSubmit2(onSubmit2)} className="login__form">
               <div className="registration__title">
                  Регистрация
               </div>
               <Box mb={"20px"}>
                  <TextField
                     label="Почта"
                     type="email"
                     className='email-textfield'
                     fullwidth
                     error={Boolean(errors2.email?.message)}
                     {...register2('email', { required: "Укажите почту" })}
                  />
               </Box>
               <Box mt={"20px"}>
                  <TextField
                     label="Логин"
                     type="fullName"
                     className='password-textfield'
                     fullwidth
                     error={Boolean(errors2.fullName?.message)}
                     {...register2('fullName', { required: "Укажите логин" })}
                  />
               </Box>
               <Box mb={"20px"} mt={"20px"}>
                  <TextField
                     label="Пароль"
                     type="password"
                     // className="login__name"
                     className='password-textfield'
                     fullwidth
                     // helperText={errors.password?.message}
                     error={Boolean(errors2.password?.message)}
                     {...register2('password', { required: "Укажите пароль" })}
                  />
               </Box>
               <button type='submit' class="login__button"><span>Зарегистрироваться</span></button>
               <div class="login__bottom">Если вы уже имеете аккаунт, вы можете 
<Link to={'/auth'} class="logo-link" relative="path">
<span class="login__redirect popup-link">авторизироваться</span>
</Link></div>
            </form>
            <div className="registration__icon">
               <IcomoonReact iconSet={iconSet} color="#5EA93A" size={400} icon="enter" />
            </div>
         </div>
      </>
   )
}
export default Registration