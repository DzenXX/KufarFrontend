import Box from '@mui/material/Box';
import { fetchAuth, selectName, logout, selectIsAuth, fetchRegistration } from '../../redux/slices/auth';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import iconSet from '../../styles/icons/selection2.json'
import IcomoonReact from 'icomoon-react';
import { redirect } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function Login() {

   const navigate = useNavigate();

   const {
      register,
      handleSubmit,
      setError,
      formState: { errors, isValid },
   } = useForm({
      defaultValues: {
         email: '',
         password: '',
      }
   })

 
   const onSubmit = async (values) => {
      const data = await dispatch(fetchAuth(values))

      if (!data.payload) {
         return alert("Не удалось авторизоваться")
      }
      
      if ('token' in data.payload) {
         window.localStorage.setItem('token', data.payload.token)
         navigate("/");
      }
   }

   const dispatch = useDispatch()

   return (
      <>
         <div className="fullscreen__registration registration">
            <form onSubmit={handleSubmit(onSubmit)} className="login__form">
               <div className="registration__title">
                  Авторизация
               </div>
               <Box mt={"20px"}>
                  <TextField
                     label="Почта"
                     type="email"
                     className='password-textfield'
                     fullwidth
                     error={Boolean(errors.email?.message)}
                     {...register('email', { required: "Укажите почту" })}
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
                     error={Boolean(errors.password?.message)}
                     {...register('password', { required: "Укажите пароль" })}
                  />
               </Box>
               <button type='submit' class="login__button"><span>Авторизироваться</span></button>
               <div class="login__bottom">Если у вас еще нет аккаунта, вы можете 
               <Link to={'/registration'} class="logo-link" relative="path">
               <span class="login__redirect popup-link"> зарегистрироваться</span> 
               </Link>
               </div>
            </form>
            <div className="registration__icon">
            <IcomoonReact iconSet={iconSet} color="#5EA93A" size={400} icon="enter" />
            </div>
         </div>
      </>
   )
}
export default Login