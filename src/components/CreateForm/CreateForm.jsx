import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { useRef, useState } from 'react';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import IcomoonReact from 'icomoon-react';
import { useNavigate } from "react-router-dom";
import iconSet4 from '../../styles/icons/selection4.json'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { addPhoto, createPost } from '../../redux/slices/post';
import { MuiFileInput } from 'mui-file-input'
import axios from '../../axios';

function CreateForm() {

   const navigate = useNavigate();
   const dispatch = useDispatch()

   const {
      register: register2,
      formState: { errors: errors2, isValid: isValid2 },
      handleSubmit: handleSubmit2,
   } = useForm({
      defaultValues: {
         text: '',
         title: '',
         place: '',
         price: '',
         tag: '',
      }
   })

   const onSubmit2 = async (values) => {
      if (imageUrl != '') {
         values.imageUrl = imageUrl
         
      }

      console.log(values)
      const data = await dispatch(createPost(values))

      if (!data.payload) {
         return alert("Не удалось создать статью.")
      }
      navigate("/");
      // redirect("/")
      if ('token' in data.payload) {
         window.localStorage.setItem('token', data.payload.token)
         navigate("/");
      }
   }

   const [fileValue, setFileValue] = React.useState(null)
   const [imageUrl, SetImageUrl] = React.useState('')

   const handleFileChange = async (newValue) => {
      // try {
         console.log(newValue)
         setFileValue(newValue)
         const formData = new FormData()
         formData.append('image', newValue)
         const data = await dispatch(addPhoto(formData))
         console.log(data.payload.url)
         SetImageUrl(data.payload.url)
      // } catch (e) {
      //    console.warn(e)
      // }
   
   //   console.log(fileValue)
   }

   return (
      <>
         <div className="fullscreen__registration registration">
            <form onSubmit={handleSubmit2(onSubmit2)} className="login__form login__form_creating">
               <div className="registration__title registration__title_creating">
                  Создание статьи
               </div>
               <Box mb={"20px"}>
                  <TextField
                     label="Название товара"
                     type="title"
                     className='password-textfield'
                     fullwidth
                     error={Boolean(errors2.title?.message)}
                     {...register2('title', { required: "Укажите название вашего товара" })}
                  />
               </Box>
               <Box mb={"20px"}>
                  <TextField
                     className='email-textfield'
                     id="outlined-multiline-static"
                     label="Информация о товаре"
                     type="text"
                     multiline
                     rows={4}
                     // defaultValue="Default Value"
                     error={Boolean(errors2.text?.message)}
                     {...register2('text', { required: "Напишите что-то о товаре" })}
                  />
               </Box>
               <Box mb={"20px"}>
                  <TextField
                     label="Населенный пункт"
                     type="place"
                     className='password-textfield'
                     fullwidth
                     error={Boolean(errors2.place?.message)}
                     {...register2('place', { required: "Укажите ваше место находения" })}
                  />
               </Box>
               <Box mb={"20px"}>
                  <FormControl fullWidth>
                     <InputLabel {...register2('tag', { required: "Укажите категорию" })} error={Boolean(errors2.tag?.message)} id="demo-simple-select-label">Категория</InputLabel>
                     <Select
                        type='tag'
                        className='password-textfield'
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={category}
                        label="Категория"
                        error={Boolean(errors2.tag?.message)}
                        // onChange={handleChange}
                        {...register2('tag', { required: "Укажите категорию" })}
                     >
                        <MenuItem value={'спорт'}>Спорт</MenuItem>
                        <MenuItem value={'электроника'}>Электроника</MenuItem>
                        <MenuItem value={'недвижимость'}>Недвижимость</MenuItem>
                        <MenuItem value={'авто'}>Авто</MenuItem>
                        <MenuItem value={'одежда'}>Одежда</MenuItem>
                        <MenuItem value={'животные'}>Животные</MenuItem>
                        <MenuItem value={'другое'}>Другое</MenuItem>
                     </Select>
                  </FormControl>
               </Box>
               <Box mb={"20px"}>
                  <TextField
                     label="Цена, руб"
                     type="number"
                     className='password-textfield'
                     fullwidth
                     error={Boolean(errors2.price?.message)}
                     {...register2('price', { required: "Укажите цену товара" })}
                  />
               </Box>
               <Box mb={"20px"}>
                  <MuiFileInput className='password-textfield' value={fileValue} onChange={handleFileChange} />
               </Box>
               <button type='submit' class="login__button"><span>Создать статью</span></button>
            </form>
            <div className="registration__icon registration__icon_creating">
               <IcomoonReact iconSet={iconSet4} color="#5EA93A" size={500} icon="clipboard-edit1" />
            </div>
         </div>
      </>
   )
}
export default CreateForm