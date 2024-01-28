import { useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import React from 'react'
import { fetchAuth, selectName, logout, selectIsAuth, fetchRegistration } from '../../redux/slices/auth';
import iconSet2 from "../../styles/icons/selection2.json";
import IcomoonReact, { iconList } from "icomoon-react";
import BodyCart from './BodyCart/BodyCart';
import { fetchPosts, selectPosts, selectSearchValue } from '../../redux/slices/post';
import { Link } from 'react-router-dom';
import axios from 'axios';




let Home = () => {

   const dispatch = useDispatch()
   const searchValue = useSelector(selectSearchValue)

   React.useEffect(() => {
      fetchFunc()
      console.log('fetchfunc')
   }, [])



   React.useEffect(() => {
      const id = setInterval(() => {
         fetchFunc()
         console.log('fetchfunc')
         
      }, 2000);

      return () => {
         clearInterval(id);
      };
   }, []);

   const fetchFunc = async () => {
      const data = await dispatch(fetchPosts())
      console.log(data.payload)
      console.log(posts)
      // const formData = ''
      // const { data2 } = await axios.post('upload', formData)
      // console.log(data2)
   }

const onClickSport = () => {
if (category == 'спорт') {
setCategory('none')
} else {
setCategory('спорт')
}
console.log(category)
}

   const onClickElectronic = () => {
      if (category == 'электроника') {
         setCategory('none')
      } else {
         setCategory('электроника')
      }
   }

   const onClickHouse = () => {
      console.log(category)
      if (category == 'недвижимость') {
         setCategory('none')
      } else {
         setCategory('недвижимость')
      }
      console.log(category)
   }

   const onClickAuto = () => {
      if (category == 'авто') {
         setCategory('none')
      } else {
         setCategory('авто')
      }
   }

   const onClickClothe = () => {
      if (category == 'одежда') {
         setCategory('none')
      } else {
         setCategory('одежда')
      }
   }

   const onClickPet = () => {
      if (category == 'животные') {
         setCategory('none')
      } else {
         setCategory('животные')
      }
   }


   const posts = useSelector(selectPosts)
   const reversePosts = posts.slice().reverse()

   const name = useSelector(selectName)
   const fullscreen = useRef(null)

   const [category, setCategory] = useState('none')
   const [input1, setInput1] = useState('')
   const [input2, setInput2] = useState('')

   const onChangeInput1 = (event) => {
      const result = event.target.value.replace(/[^0-9]/gi, '');

      setInput1(result)
      console.log(result)
      console.log(input1)
   }

   const onChangeInput2 = (event) => {
      const result = event.target.value.replace(/[^0-9]/gi, '');
      setInput2(result)
      console.log(result)
      console.log(input1)
   }
   return (
      <div ref={fullscreen} class="fullscreen__body body">
         <div className="body__title">Категории</div>
         <div className="body__types types">
            <div className="types__row">
               <div onClick={() => onClickSport()} className="types__item types-item">
                  {
                     category == 'спорт'
                        ? <>
                           <div className="types-item__title active">Спорт</div>
                           <IcomoonReact iconSet={iconSet2} color="#5EA93A" size={40} icon="soccer-ball" />
                        </>
                        : <>
                           <div className="types-item__title">Спорт</div>
                           <IcomoonReact iconSet={iconSet2} color="#6b6b6b" size={40} icon="soccer-ball" />
                        </>
                  }
               </div>
               <div onClick={() => onClickElectronic()} className="types__item types-item">
                  {
                     category == 'электроника'
                        ? <>
                           <div className="types-item__title active">Электротехника</div>
                           <IcomoonReact iconSet={iconSet2} color="#5EA93A" size={40} icon="display" />
                        </>
                        : <>
                           <div className="types-item__title">Электротехника</div>
                           <IcomoonReact iconSet={iconSet2} color="#6b6b6b" size={40} icon="display" />
                        </>
                  }
               </div>
               <div onClick={() => onClickHouse()} className="types__item types-item">
                  {
                     category == 'недвижимость'
                        ? <>
                           <div className="types-item__title active">Недвижимость</div>
                           <IcomoonReact iconSet={iconSet2} color="#5EA93A" size={40} icon="office" />
                        </>
                        : <>
                           <div className="types-item__title">Недвижимость</div>
                           <IcomoonReact iconSet={iconSet2} color="#6b6b6b" size={40} icon="office" />
                        </>
                  }
               </div>
            </div>
            <div className="types__row">
               <div onClick={() => onClickAuto()} className="types__item types-item">
                  {
                     category == 'авто'
                        ? <>
                           <div className="types-item__title active">Авто</div>
                           <IcomoonReact iconSet={iconSet2} color="#5EA93A" size={40} icon="truck" />
                        </>
                        : <>
                           <div className="types-item__title">Авто</div>
                           <IcomoonReact iconSet={iconSet2} color="#6b6b6b" size={40} icon="truck" />
                        </>
                  }
               </div>
               <div onClick={() => onClickClothe()} className="types__item types-item">
                  {
                     category == 'одежда'
                        ? <>
                           <div className="types-item__title active">Одежда</div>
                           <IcomoonReact iconSet={iconSet2} color="#5EA93A" size={40} icon="t-shirt" />
                        </>
                        : <>
                           <div className="types-item__title">Одежда</div>
                           <IcomoonReact iconSet={iconSet2} color="#6b6b6b" size={40} icon="t-shirt" />
                        </>
                  }
               </div>
               <div onClick={() => onClickPet()} className="types__item types-item">
                  {
                     category == 'животные'
                        ? <>
                           <div className="types-item__title active">Животные</div>
                           <IcomoonReact iconSet={iconSet2} color="#5EA93A" size={40} icon="pet" />
                        </>
                        : <>
                           <div className="types-item__title ">Животные</div>
                           <IcomoonReact iconSet={iconSet2} color="#6b6b6b" size={40} icon="pet" />
                        </>
                  }
               </div>
            </div>

         </div>
         <div className="body__horizontal">
         </div>
         <div className="body__main">
            <div className="body__settings settings">
               <div className="body__title">Цена</div>
               <div className="settings__block">
                  <div className="settings__text">От</div>
                  <input
                     className='settings__input'
                     type="text"
                     name='input1'
                     value={input1}
                     // onChange={(event) => {
                     //    if (!/[0-9]/.test(event.key)) {
                     //      event.preventDefault();
                     //    }
                     //  }}
                     onChange={onChangeInput1}
                  />
               </div>
               <div className="settings__block">
                  <div className="settings__text">До</div>
                  <input
                     className='settings__input'
                     type="text"
                     name='input1'
                     value={input2}
                     onChange={onChangeInput2}
                  />
               </div>
            </div>
            <div className="body__carts">
               {
                  category == 'none'
                     ?
                     reversePosts?.filter((obj) => obj.title.toLowerCase().includes(`${searchValue.toLowerCase()}`)).map((post) => {
if (input1 == '' && input2 == ''
|| input1 == '' && input2 >= Number(post.price)
|| input2 == '' && input1 <= Number(post.price)
|| input1 <= Number(post.price) && input2 >= Number(post.price)) {
return <BodyCart imageUrl={post.imageUrl} id={post._id} title={post.title} place={post.place} price={post.price} />
}
                     })
                     :

reversePosts?.filter((obj) => obj.title.toLowerCase().includes(`${searchValue.toLowerCase()}`)).map((post) => {
console.log(post.tag)
console.log(category)
if (category == post.tag) {
console.log(post)
return <BodyCart imageUrl={post.imageUrl} id={post._id} title={post.title} place={post.place} price={post.price} />
}
                     })
               }
            </div>
         </div>
      </div>
   )
}

export default Home