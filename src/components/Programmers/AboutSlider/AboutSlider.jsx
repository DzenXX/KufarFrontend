import { Pagination, Scrollbar, A11y } from 'swiper';
// import Swiper from 'react-slider-swiper'; 
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import React from 'react';
import 'swiper/css'
import 'swiper/scss';
import 'swiper/scss/navigation';
import "../../../styles/css/dop.css"


SwiperCore.use([Autoplay, Navigation]);

function Slider() {
   return (
      <>
         {/* <div class="information__slider swiper">
                    
                    <Swiper
                  
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev', 
                    }}
                    modules={[Navigation, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={2}
                    >
                    <SwiperSlide>
                        <div class="information__slide swiper-slide" data-hash="slide1">
                            <div class="information__content">
                                <div class="information__title">Поддержка</div>
                                <div class="information__text">Если хотите поддержать проект, то <br/> можете отправить средства сюда:</div>
                                <a class="information__link" href="https://qiwi.com/" target="_blank">Наш qiwi кошелёк</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="information__slide swiper-slide">
                            <div class="information__content">
                                <div class="information__title">Связь</div>
                                <div class="information__divisor">
                                    <div class="information__mail">
                                        <div class="information__text">E-mail</div>
                                        <a class="information__link" href="https://mail.google.com/mail" target="_blank">
                                            namemr83@gmail.com</a>
                                        <a class="information__link" href="https://mail.google.com/mail" target="_blank">
                                            dzenxx676@gmail.com</a>
                                    </div>
                                    <div class="information__github">
                                        <div class="information__text">GitHub</div>
                                        <a class="information__link" href="https://github.com/NotTheOutsider/Found-It" target="_blank">https://github.com/<br/>NotTheOutsider/Found-It</a>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="information__slide swiper-slide">
                            <div class="information__content">
                                <div class="information__title">Создатели</div>
                                <div class="information__divisor">
                                    <div class="information__team-creators">
                                        <div class="information__text">
                                            Команда разработки:       
                                        </div>
                                        <a class="information__link" href="https://github.com/DzenXX" target="_blank">DzenXX</a><br/>
                                        <a class="information__link" href="https://github.com/NotTheOutsider" target="_blank">NotTheOutsider</a>
                                    </div>
                                    <div class="information__team-idea">
                                        <div class="information__text">
                                            Идея:
                                        </div>
                                        <a class="information__link" href="https://github.com/GdeiSen" target="_blank">GdeiSen</a><br/>
                                        <a class="information__link" href="https://github.com/NotTheOutsider" target="_blank">NotTheOutsider</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
            
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                    
                </Swiper>
                </div> */}

         {/* <div class="information__slider swiper">
                    <div class="information__wrapper swiper-wrapper">
                      <div class="information__slide swiper-slide" data-hash="slide1">
                        <div class="information__content">
                            <div class="information__title">Поддержка</div>
                            <div class="information__text">Если хотите поддержать проект, то <br/> можете отправить средства сюда:</div>
                            <a class="information__link" href="https://qiwi.com/" target="_blank">Наш qiwi кошелёк</a>
                        </div>
                      </div>
                      <div class="information__slide swiper-slide" data-hash="slide2">
                        <div class="information__content">
                            <div class="information__title">Связь</div>
                            <div class="information__divisor">
                                <div class="information__mail">
                                    <div class="information__text">E-mail</div>
                                    <a class="information__link" href="https://mail.google.com/mail" target="_blank">
                                        namemr83@gmail.com</a>
                                    <a class="information__link" href="https://mail.google.com/mail" target="_blank">
                                        dzenxx676@gmail.com</a>
                                </div>
                                <div class="information__github">
                                    <div class="information__text">GitHub</div>
                                    <a class="information__link" href="https://github.com/NotTheOutsider/Found-It" target="_blank">https://github.com/<br/>NotTheOutsider/Found-It</a>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class="information__slide swiper-slide" data-hash="slide3">
                        <div class="information__content">
                            <div class="information__title">Создатели</div>
                            <div class="information__divisor">
                                <div class="information__team-creators">
                                    <div class="information__text">
                                        Команда разработки:       
                                    </div>
                                    <a class="information__link" href="https://github.com/DzenXX" target="_blank">DzenXX</a><br/>
                                    <a class="information__link" href="https://github.com/NotTheOutsider" target="_blank">NotTheOutsider</a>
                                </div>
                                <div class="information__team-idea">
                                    <div class="information__text">
                                        Идея:
                                    </div>
                                    <a class="information__link" href="https://github.com/GdeiSen" target="_blank">GdeiSen</a><br/>
                                    <a class="information__link" href="https://github.com/NotTheOutsider" target="_blank">NotTheOutsider</a>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-button-prev">
                    </div>
                    <div class="swiper-button-next">
                    </div>
                  </div> */}
         <div class="information__slider swiper">
            <div class="information__wrapper swiper-wrapper">
               <Swiper
                  autoplay={{
                     delay: 3000,
                  }}
                  loop={true}
                  navigation={{
                     nextEl: '.swiper-button-next',
                     prevEl: '.swiper-button-prev',
                  }}
                  modules={[Navigation, Scrollbar, A11y]}
                  spaceBetween={20}
                  slidesPerView={1}
                  pagination={{ clickable: true }}

               >
                  <SwiperSlide>
                     <div class="information__slide swiper-slide" data-hash="slide1">
                        <div class="information__content">
                           <div class="information__title">Поддержка</div>
                           <div class="information__text">Если хотите поддержать проект, то <br/> можете отправить средства сюда:</div>
                           <a class="information__link" href="https://qiwi.com/" target="_blank">Наш qiwi кошелёк</a>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div class="information__slide swiper-slide" >
                        <div class="information__content">
                           <div class="information__title">Связь</div>
                           <div class="information__divisor">
                              <div class="information__mail">
                                 <div class="information__text">E-mail</div>
                                 <a class="information__link" href="https://mail.google.com/mail" target="_blank">
                                    namemr83@gmail.com</a>
                                 <a class="information__link" href="https://mail.google.com/mail" target="_blank">
                                    dzenxx676@gmail.com</a>
                              </div>
                              <div class="information__github">
                                 <div class="information__text">GitHub</div>
                                 <a class="information__link" href="https://github.com/NotTheOutsider/Found-It" target="_blank">https://github.com/<br></br>NotTheOutsider/Found-It</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div class="information__slide swiper-slide">
                        <div class="information__content">
                           <div class="information__title">Создатели</div>
                           <div class="information__divisor">
                              <div class="information__team-creators">
                                 <div class="information__text">
                                    Команда разработки:
                                 </div>
                                 <a class="information__link" href="https://github.com/DzenXX" target="_blank">DzenXX</a><br />
                                 <a class="information__link" href="https://github.com/NotTheOutsider" target="_blank">NotTheOutsider</a>
                              </div>
                              <div class="information__team-idea">
                                 <div class="information__text">
                                    Идея:
                                 </div>
                                 <a class="information__link" href="https://github.com/GdeiSen" target="_blank">GdeiSen</a><br />
                                 <a class="information__link" href="https://github.com/NotTheOutsider" target="_blank">NotTheOutsider</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-button-next"></div>
               </Swiper>
            </div>
         </div>
      </>
   )
}

export default Slider