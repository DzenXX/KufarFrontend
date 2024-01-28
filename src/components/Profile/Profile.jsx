import { useDispatch, useSelector } from 'react-redux'
import avatar from '../../styles/img/mini-avatar.png'
import { selectName } from '../../redux/slices/auth'
import iconSet from '../../styles/icons/selection2.json'
import IcomoonReact from 'icomoon-react'
import BodyCart from '../Home/BodyCart/BodyCart'
import React from 'react'
import { fetchPostsForUser, selectPosts } from '../../redux/slices/post'


function Profile() {

   
 
    const fetchFunc = async () => {
       const data = await dispatch(fetchPostsForUser())
       console.log(data.payload)
       console.log(posts)
    }

   const name = useSelector(selectName)
   const dispatch = useDispatch()
   const posts = useSelector(selectPosts)
   const reversePosts = posts.slice().reverse()

   return (
      <div className="fullscreen__profile profile">

         <div className="profile__header">
            <div className="profile__image">
               <img src={avatar} alt="avatar" />
            </div>
            <div className="profile__info">
               <div className="profile__name">{name}</div>
               <div className="profile__params">
                  <div className="profile__stars">
                     <div className="profile__icon">
                        <IcomoonReact className='profile__icon' iconSet={iconSet} color="#5EA93A" size={25} icon="star-full" />
                     </div>
                     <div className="profile__score">9.2,</div>
                     <div className="profile__reviews">21 отзыв</div>
                  </div>
               </div>
            </div>
         </div>
         <div className="profile__line"></div>
         <div className="body__carts">
            {/* <BodyCart />
            <BodyCart />
            <BodyCart />
            <BodyCart />
            <BodyCart />
            <BodyCart /> */}
            {
               reversePosts?.map((post) => {
                  return <BodyCart title={post.title} place={post.place} price={post.price} />
               })
            }
         </div>
      </div>
   )
}

export default Profile