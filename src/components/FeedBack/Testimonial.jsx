import React, { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query, limit } from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

const Testimonials = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    const feedbackRef = collection(db, "feedbacks");
    const q = query(feedbackRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const feedbacks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFeedbacks(feedbacks);
      console.log(feedbacks);
    });
  }, []);

  return (
    <section id="projects" className="py-10 text-white mx-auto items-center justify-center">
      <div className="text-center">
        <p className="text-gray-400 mt-3 text-lg">Testimonials</p>
        <h3 className="text-2xl sm:text-4xl font-semibold">
          What Our <span className="text-cyan-600">Customers</span> Say
        </h3>
      </div>
      <br />
      <div className="m-5 w-full">
        <Swiper
          slidesPerview={3}
          spaceBetween={10}
          grabCursor={true}
          centeredSlides={true}
          breakpoints={{
            799: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1375: {
              slidesPerView: 4,
            },
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: false,
          // }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        >
          {feedbacks.map((feedback_info) => (
            <SwiperSlide key={feedback_info.id} className="relative items-center justify-center">
              <div className="w-[90%] p-4 bg-black h-[298px] md:h-[270px] bg-opacity-0 rounded-[42px] shadow border border-sky-900 relative items-center justify-center">
                <div className="text-center text-white text-lg font-light leading-relaxed">{feedback_info.message}</div>
                <div className="text-center text-cyan-600 text-[26.34px] font-bold leading-relaxed">{feedback_info.name}</div>
                <div className="text-center text-white text-xs font-medium leading-relaxed">{feedback_info.projectName}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
