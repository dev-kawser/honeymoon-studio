import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';



import img1 from "../../assets/images/memberimg1.svg"
import img2 from "../../assets/images/memberimg2.svg"
import img3 from "../../assets/images/memberimg3.svg"

const Reviews = () => {
    return (
        <div className="lg:mt-16 mt-10">
            <div className="text-center">
                <h1 className="righteous lg:text-6xl text-4xl">
                    Reviews
                </h1>
                <p className="lg:text-xl text-lg josefin mt-2 max-w-2xl mx-auto">
                    Etiam eget sem sit amet nisi viverra iaculis non vulputate mi. Etiam viverra et ante id laoreet. Etiam eget sem sit amet nisi viverra iaculis non vulputate mi. Etiam viverra et ante id laoreet.
                </p>
            </div>
            <div className="mt-10">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div>
                            <p>
                                Condimentum vel viverra morbi quisque lobortis eu leo. A nulla pulvinar at ut in sit libero, sed. Quis congue pretium in enim gravida quam netus in lorem. Nulla at nibh lorem nunc sapien egestas at cursus.
                            </p>
                            <div className='pt-4 flex gap-2 items-center'>
                                <img src={img1} alt="" />
                                <div>
                                    <h3 className='righteous text-xl'>Elizabeth Murray</h3>
                                    <p className='josefin uppercase font-semibold'>Member</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <p>
                                Condimentum vel viverra morbi quisque lobortis eu leo. A nulla pulvinar at ut in sit libero, sed. Quis congue pretium in enim gravida quam netus in lorem. Nulla at nibh lorem nunc sapien egestas at cursus.
                            </p>
                            <div className='pt-4 flex gap-2 items-center'>
                                <img src={img2} alt="" />
                                <div>
                                    <h3 className='righteous text-xl'>Bill Smith</h3>
                                    <p className='josefin uppercase font-semibold'>Member</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <p>
                                Condimentum vel viverra morbi quisque lobortis eu leo. A nulla pulvinar at ut in sit libero, sed. Quis congue pretium in enim gravida quam netus in lorem. Nulla at nibh lorem nunc sapien egestas at cursus.
                            </p>
                            <div className='pt-4 flex gap-2 items-center'>
                                <img src={img3} alt="" />
                                <div>
                                    <h3 className='righteous text-xl'>Michelle</h3>
                                    <p className='josefin uppercase font-semibold'>Member</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <p>
                                Condimentum vel viverra morbi quisque lobortis eu leo. A nulla pulvinar at ut in sit libero, sed. Quis congue pretium in enim gravida quam netus in lorem. Nulla at nibh lorem nunc sapien egestas at cursus.
                            </p>
                            <div className='pt-4 flex gap-2 items-center'>
                                <img src={img1} alt="" />
                                <div>
                                    <h3 className='righteous text-xl'>Elizabeth Murray</h3>
                                    <p className='josefin uppercase font-semibold'>Member</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <p>
                                Condimentum vel viverra morbi quisque lobortis eu leo. A nulla pulvinar at ut in sit libero, sed. Quis congue pretium in enim gravida quam netus in lorem. Nulla at nibh lorem nunc sapien egestas at cursus.
                            </p>
                            <div className='pt-4 flex gap-2 items-center'>
                                <img src={img2} alt="" />
                                <div>
                                    <h3 className='righteous text-xl'>Bill Smith</h3>
                                    <p className='josefin uppercase font-semibold'>Member</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <p>
                                Condimentum vel viverra morbi quisque lobortis eu leo. A nulla pulvinar at ut in sit libero, sed. Quis congue pretium in enim gravida quam netus in lorem. Nulla at nibh lorem nunc sapien egestas at cursus.
                            </p>
                            <div className='pt-4 flex gap-2 items-center'>
                                <img src={img3} alt="" />
                                <div>
                                    <h3 className='righteous text-xl'>Michelle</h3>
                                    <p className='josefin uppercase font-semibold'>Member</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;