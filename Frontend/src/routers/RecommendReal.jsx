import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Swiper.css";

const RecommendContainer = styled.div`
  width: 100vw;
  height: 300%;
  overflow: visible;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
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

  //추천테스트용
  const [Ctest, setCtest] = useState([]);
  const getCtest = async () => {
      const ct = await (await fetch("/chuchun")).json();
      setCtest(ct);
      console.log(ct);
  };

    useEffect(() => {
        getProducts();
        //추천테스트용
        getCtest();
    }, []);

  const swiperStyle = {
    width: "360px",
    padding: "10px",
    margin: "0px"
    
  };

  return (
    <RecommendContainer>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Swiper
          style={swiperStyle}
          spaceBetween={30}
          effect
          speed={800}
          slidesPerView={1}
          loop
        >
          {loading ? (
            <h1>loading</h1>
          ) : (
            <div className="itemContainer">
              {products.map((product, index) => (
                <SwiperSlide>
                  <div className="swiperBox" key={index}>
                    <div className="itemMainData">
                      <img
                        className="itemImg"
                        src={product.img}
                        alt="itemImg"
                      />
                      <h1 className="itemName">
                        {product.name}
                      </h1>
                    </div>
                    <div className="itemMetaData">
                      <p className="originalPrice">{product.old_price}</p>
                      <p className="discountRate">{product.percent}</p>
                      <span className="currentPrice">
                        {product.cur_price}원
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          )}

          {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
        </Swiper>
      )}
    </RecommendContainer>
  );
}

export default Recommend;
