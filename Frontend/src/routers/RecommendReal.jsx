import { useState, useEffect } from "react";
import styled from "styled-components";
import "./Recommendation.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper.min.css';


const RecommendContainer = styled.div`
  width: 100vw;
  height: 300%;
  overflow: visible;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;




// interface IProduct {
//   category: string;
//   cur_price: string;
//   name: string;
//   img: string;
//   old_price: string;
//   percent: string;
//   return_percent: string;
//   return_price: string;
//   t_price: any;
//   t_date: any;
//   id: string;
// }

function Recommend() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const json = await (await fetch("/notebook")).json();
    setProducts(json.slice(0, 10));
    console.log(json.slice(0, 10));
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <RecommendContainer>
      {loading ? (
        <h1>Loading...</h1>
      ) :  <Swiper
      module={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      
    </Swiper> 
      }
    </RecommendContainer>
  );
}

export default Recommend;
