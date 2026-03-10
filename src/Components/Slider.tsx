import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface SliderProps {
  images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  return (
    <div className="w-full overflow-hidden rounded-t-xl">
      <Swiper
        spaceBetween={10}
        centeredSlides
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-52 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;