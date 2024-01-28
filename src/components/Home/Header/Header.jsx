import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import Box from '@mui/material/Box';
import React from 'react'
import { fetchAuth, selectName, logout, selectIsAuth, fetchRegistration } from '../../../redux/slices/auth';
import iconSet from "../../../styles/icons/selection.json";
import iconSet2 from "../../../styles/icons/selection2.json";
import iconSet3 from "../../../styles/icons/selection3.json";
import IcomoonReact, { iconList } from "icomoon-react";
import { useNavigate } from 'react-router-dom';
import { changeSearchValue, fetchPosts, fetchPostsForUser, selectSearchValue } from '../../../redux/slices/post';


function Header() {

   const accRef = useRef(null);

   const navigate = useNavigate();

   const dispatch = useDispatch()
   const isAuth = useSelector(selectIsAuth)
   const name = useSelector(selectName)
   const searchValue = useSelector(selectSearchValue)
   const [isOpenPopup1, setIsOpenPopup1] = useState(false)
   const [isOpenPopup2, setIsOpenPopup2] = useState(false)
   const [input1, setInput1] = useState('')

   function changeInput1() {
      // тут будет код 
   }

   const onClickLogout = () => {
      if (window.confirm('Вы действительно хотите выйти?')) {
         dispatch(logout())
         window.localStorage.removeItem('token')
         navigate("/")
         toggleAccount()
      }
   }

   class AccountIcon extends React.Component {
      render() {
         var defaultClass = '_icon-user-o auth-svg';
         if (isAuth) defaultClass += ' green-auth-svg';
         return <span onClick={() => toggleAccount()} className={defaultClass}></span>
      }
   }
   const toggleAccount = () => {
      accRef.current.classList.toggle('active')
   }
   const removeAccount = () => {
      if (name) {
         accRef.current.classList.remove('active')
      }
   }


   const onChangeInput = (value) => {
      console.log(value)
      dispatch(changeSearchValue(value))
      setInput1(value)
   }

   const onClickProfile = () => {
      removeAccount()
      dispatch(fetchPostsForUser())
      setTimeout(navigationToProfile, 300);
   }

   const onClickLogo = () => {
      removeAccount()
      dispatch(fetchPosts())
      setTimeout(navigationToHome, 300);
      console.log('click')
   }

   const navigationToHome = () => {
      navigate('/')
   }

   const navigationToProfile = () => {
      navigate('/profile')
   }


   return (
      <div class="fullscreen__header">
         <div onClick={() => onClickLogo()} class="logo-link" relative="path"> <div class="fullscreen__logo logo"><IcomoonReact className='logo__icon' iconSet={iconSet2} color="#5EA93A" size={72} icon="exchange" /><span class="logo__green"> OnlineExchange</span></div>
         </div>
         <div class="fullscreen__navbar navbar">
            <div className="navbar__case">
               <input
                  className='navbar__input'
                  type="text"
                  name='input1'
                  value={input1}
                  onChange={(event) => onChangeInput(event.target.value)}
               />
               <IcomoonReact className='navbar__icon' iconSet={iconSet2} color="#5EA93A" size={35} icon="search" />
            </div>
         </div>
         {
            isAuth === true
               ? <>
                  <div class="fullscreen__account account" ref={accRef} >
                     <div className='account__name' onClick={() => toggleAccount()}>{name}</div>
                     <div className="account__exit" onClick={() => onClickLogout()}>Выйти</div>
                     <div onClick={() => onClickProfile()} class="logo-link" relative="path">
                        <div className="account__profile">Профиль</div>
                     </div>

                     {/* <AccountIcon /> */}
                     <AccountIcon />
                  </div>
                  <Link to={'/chat'} onClick={() => removeAccount()} class="logo-link" relative="path">
                     <IcomoonReact iconSet={iconSet} color="#5EA93A" size={30} icon="bubble1" />
                  </Link>
                  <Link to={'/create'} onClick={() => removeAccount()} class="logo-link logo-plus" relative="path">
                     <IcomoonReact iconSet={iconSet3} color="#5EA93A" size={30} icon="plus1" />
                  </Link>
               </>
               : <><div class="fullscreen__account account" onClick={() => setIsOpenPopup1(true)}>
                  <Link to={'/auth'} class="logo-link" relative="path">
                     <IcomoonReact iconSet={iconSet2} color="#5EA93A" size={40} icon="enter" />
                  </Link>
               </div></>
         }
         <div className="fullscreen__line"></div>
         <div class="fullscreen__burger">
            <span></span>
         </div>
      </div>
   )
}
export default Header