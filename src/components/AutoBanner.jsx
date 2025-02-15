import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const AutoBanner = () => {
  const bannerSlider = [
    { id: "1", img: "/banner1.png" }, // Use public folder
    { id: "2", img: "/shoeBanner2.jpg" },
    { id: "3", img: "/shoeBanner3.jpg" },
    { id: "4", img: "/shoeBanner4.jpg" },
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
    >
      {bannerSlider.map((item) => (
        <SwiperSlide key={item.id}>
          <img
            src={item.img}
            alt={`Slide ${item.id}`}
            className="w-full object-cover h-[550px]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AutoBanner;
