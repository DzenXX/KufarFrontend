import { useDispatch } from "react-redux"
import Account from "./Account/Account"
import { useForm } from 'react-hook-form'
import React, { useState } from "react"
import { createMessage, fetchMessages, selectMessages } from "../../redux/slices/chat"
import { selectEmail } from "../../redux/slices/auth"
import { useSelector } from "react-redux"
import { useRef } from "react"


function Chat() {

   const dispatch = useDispatch()

   React.useEffect(() => {
      const id = setInterval(() => {
       fetchFunc()
       console.log('fetchfunc')
      }, 1000);
  
      return () => {
        clearInterval(id);
      };
    }, []);

   const fetchFunc = async () => {
      const data = await dispatch(fetchMessages())
      console.log(messages)
      console.log(data.payload)
   }

   const {
      register,
      handleSubmit,
      setError,
      formState: { errors, isValid },
      reset,
   } = useForm({
      defaultValues: {
         receiver: '',
         text: ''
      }
   })

   const onSubmit = async (values) => {
      
      if (mail === truemail) {
         values.receiver = "anatoliy@gmail.com"
      } else {
         values.receiver = "parfparf@gmail.com"
      }
      console.log(values)
      const data = await dispatch(createMessage(values))
      // setResult('')
      reset()
      console.log('запросик')
      if (!data.payload) {
         return alert("Не удалось отправить сообщение")
      }
      fetchFunc()
      // if ('token' in data.payload) {
      //    window.localStorage.setItem('token', data.payload.token)
      //    setIsOpenPopup1(false)
      // }
   }
   let changeInput = (e) => {
      console.log(e.target.value)
      setResult(e.target.value)
   }

   const messages = useSelector(selectMessages)

   const mail = useSelector(selectEmail)
   const truemail = 'parfparf@gmail.com'

   const inputRef = useRef(null)

   const [result, setResult] = useState('чин');

   return (
      <>
      <div className="chat__wrapper">
      <div className="chat__accounts">
         <Account />
      </div>
      <div className="chat__area area">
         <div className="area__login">
            {
               mail === truemail 
               ? <><span>Anatoliy</span><span>(anatoliy@gmail.com)</span></>
               : <><span>Timaaa</span><span>(parfparf@gmail.com)</span></>
            }
           </div>
         <div className="area__main">
         <div className="area__content">
            {  
               messages?.map((m) => {
                  if (m.author.email == mail) {
                     return  <div  className="area__message area__message_my"><span>{m.text}</span></div>
                  } else {
                     return <div className="area__message"><span>{m.text}</span></div>
                  }
               })
            }
         </div>
         </div>
         <form onSubmit={handleSubmit(onSubmit)} className="area__bottom">
            {/* <input onChange={(e) => setResult(e.target.value)} type="text"  value={result}  {...register('text', { required: "Напишите сообщение" })} className="area__input"></input> */}
            <input {...register('text', { required: "Напишите сообщение" })} className="area__input"></input>
            <button type='submit' className="area__button">Отправить</button>
         </form>
      </div>
      </div>
      </>
   )
}
export default Chat


{/* <form onSubmit={handleSubmit(onSubmit)}>
                    
                        <TextField
                           label="Cообщение"
                           type="email"
                           className='email-textfield'
                           fullwidth
                           error={Boolean(errors.email?.message)}
                           {...register('email', { required: "Укажите почту" })}
                        />
                     
                     <button type='submit' class="login__button"><span>Войти</span></button>
</form> */}