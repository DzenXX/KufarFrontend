import logo from './logo.svg';
import './App.scss';
import "../src/styles/css/style.css"
import { Route, Routes } from 'react-router';
import Programmers from './components/Programmers/Programmers';
import Home from './components/Home/Home';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe } from './redux/slices/auth';
import React from 'react'
import { logout, selectIsAuth } from './redux/slices/auth'
import Chat from './components/Chat/Chat';
import Header from './components/Home/Header/Header';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import CreateForm from './components/CreateForm/CreateForm';
import FullPost from './components/FullCart/FullCart';

function App() {
   const dispatch = useDispatch()
   const isAuth = useSelector(selectIsAuth)

   React.useEffect(() => {
      dispatch(fetchAuthMe())
   }, [])

   return (
      <>
         <script src="https://api-maps.yandex.ru/2.1/?apikey=182c260b-496a-4f57-ad3d-f93470a388a0&lang=ru_RU"
            type="text/javascript"></script>
         <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
         <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&family=Oswald&family=Overpass:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=PT+Serif:ital@1&family=Roboto+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Zen+Kurenaido&display=swap"
            rel="stylesheet"></link>

         <div class="wrappper">
            <div class="content">
               {/* <div ref={fullscreen} class="fullscreen"> */}
               <div class="fullscreen">
                  <Header />
                  <Routes>
                     <Route path='/fullPost/:id' element={<FullPost />} />
                     <Route path='/' element={<Home />} />
                     <Route path='/registration' element={<Registration />} />
                     <Route path='/auth' element={<Login />} />
                     <Route path='/programmers' element={<Programmers />} />
                     <Route path='/chat' element={<Chat />} />
                     <Route path='/profile' element={<Profile />} />
                     <Route path='/create' element={<CreateForm />} />
                  </Routes>
               </div>
            </div>
            <script src="../../../public/js/map.js" type="module"></script>
         </div>
      </>
   );
}

export default App;
