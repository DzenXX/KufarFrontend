import { useDispatch, useSelector } from 'react-redux'
import { selectName } from '../../redux/slices/auth'
import iconSet from '../../styles/icons/selection2.json'
import IcomoonReact from 'icomoon-react'
import React, { useState } from 'react'
import { fetchOnePost, fetchPostsForUser, selectPosts, selectPost } from '../../redux/slices/post'
import { useParams } from 'react-router'
import photo from '../../styles/img/mini-avatar.png'
import {Lines, Zoom} from 'react-preloaders';
// import Preloader from 'react-preloaders/lib/Preloader'
// import {Preloader} from 'circle-preloader'



function FullPost() {

   const params = useParams()
   const [loading, setLoading] = useState(true)

   const name = useSelector(selectName)
   const dispatch = useDispatch()
   const post = useSelector(selectPost)

   React.useEffect(() => {
      const id = setInterval(() => {
         fetchFunc()
         console.log(post)
      }, 2000);

      return () => {
         clearInterval(id);
      };
   }, []);

   React.useEffect(() => {
      setLoading(true)
   }, []);


   const fetchFunc = async () => {
      const data = await dispatch(fetchOnePost(params.id))
      setLoading(false)
      console.log(params.id)

      console.log(data)
   }


   return (
      <>
         {

            loading
               ?
               <>
               {/* <Preloader> */}
               {/* <Lines color={'#f7f7f7'} />; */}
               {/* </Preloader> */}
               <img className="fullscreen__loading" src={'https://i.gifer.com/ZZ5H.gif'} alt="loading..." />
               </>
               :
               <div className="fullscreen__fullCart fullCart" >
                  <div className="fullCart__wrapper">
                     <div className="fullCart__image">
                        <img src={`http://localhost:4444${post.imageUrl}`} alt="avatar" />
                     </div>
                     <div className="fullCart__information">
                        <div className="fullCart__title">{post.title}</div>
                        <div className="fullCart__row">
                           <span className="fullCart__place">{post.place},</span>
                           <span className='fullCart__date'> 16 октября</span>
                        </div>
                        <div className="fullCart__description">Дополнительная информация о товаре:</div>
                        <div className="fullCart__text">{post.text}</div>
                        <div className="fullCart__price">{post.price} руб</div>
                        <div className="fullCart__button"><span>Связаться с продавцом</span></div>
                     </div>
                  </div>
               </div >
         }
      </>
   )
}

export default FullPost

