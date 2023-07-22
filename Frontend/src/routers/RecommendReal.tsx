import { useState, useEffect } from "react";
import styled from "styled-components";
import "./Recommendation.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from 'swiper/modules';
import Chart from "react-apexcharts";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface IProduct {
  category: string;
  cur_price: string;
  name: string;
  img: string;
  old_price: string;
  precent: string;
  return_percent: string;
  return_price: string;
}

const RecommendContainer = styled.div`
  width: 100vw;
  height: 300%;
  overflow: visible;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

interface IProduct {
  category: string,
  cur_price: string,
  name: string,
  img: string,
  old_price: string,
  percent: string,
  return_percent: string,
  return_price: string,
  t_price: any,
  t_date: any,
  id: string,
}


function Recommend() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);
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
      {products.map(product =>
        
        <Chart
          type="line"
          series={[
            {
              name: "price",
              data: product.t_price,
            },
          ]}
          options={{
            chart: {
              height: 50,
              width: 50,
              toolbar: {
                show: false,
              }
            },
            xaxis: {
              categories: product.t_date
            },
            grid: {
              show: false
            },
            stroke: {
              curve: "smooth",
              width: 5,
            }
          }}
        />

      )}

    </RecommendContainer>


    // <RecommendContainer>
    //   {loading ? (
    //     <h1>Loading...</h1>
    //   ) : 
    //   <Swiper
    //   modules={[Navigation, Pagination]}
    //   spaceBetween={370}
    //   slidesPerView={1}
    //   pagination={{ clickable: true }}
    //   loop={true}
    // >
    //     <div className="itemContainer">
    //             {products.map((product, index) =>
    //             <SwiperSlide> 
    //             <div className="itemBox" key={index}>
    //                 <div className="itemMainData">
    //                         <img className="itemImg" src={product.img} alt="itemImg" />
    //                         <h1 className="itemName">{product.id}: {product.name}</h1>
    //                 </div>
    //                 <div className="itemMetaData">
    //                   <p className="originalPrice">{product.old_price}</p>
    //                   <p className="discountRate">{product.percent}</p>
    //                   <span className="currentPrice">{product.cur_price}원</span>
    //                 </div>
    //             </div>
    //             </SwiperSlide>
    //             )}

    //         </div>

    // </Swiper>

    //   }
    // </RecommendContainer>

  );
}

export default Recommend;
