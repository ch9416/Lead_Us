import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Base from "../HomePage/HomeComponents/Base";
import { useParams } from "react-router-dom";
import Chart from "react-apexcharts";

const Container = styled.div`
  width: 100vw;
  height: 400vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface IProduct {
  category: string;
  cur_price: string;
  name: string;
  img: string;
  old_price: string;
  percent: string;
  return_percent: string;
  return_price: string;
  t_price: any;
  t_date: any;
  id: string;
}

function Itemlist() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);
  const product = params.product;
  const [graphOpen, setGraphOpen] = useState<boolean>(false);
  const [clickedIndexes, setClickedIndexes] = useState<number[]>([]);

  const handleGraph = (index: number) => {
    // 클릭한 itemBox의 인덱스들을 새 배열에 복사
    const newClickedIndexes = [...clickedIndexes];

    // 이미 클릭된 인덱스를 클릭하면 해당 인덱스를 배열에서 제거하고,
    // 아니면 해당 인덱스를 배열에 추가하여 상태를 토글
    if (newClickedIndexes.includes(index)) {
      const indexToRemove = newClickedIndexes.indexOf(index);
      newClickedIndexes.splice(indexToRemove, 1);
    } else {
      newClickedIndexes.push(index);
    }

    // 변경된 배열을 상태로 설정
    setClickedIndexes(newClickedIndexes);
  };
  const getProducts = useCallback(async () => {
    const json = await (await fetch(`/${product}`)).json();
    setProducts(json);
    console.log(json);
    setLoading(false);
  }, [product]);

  useEffect(() => {
    getProducts();
    setClickedIndexes([]);
  }, [getProducts]);

  return (
    <Container>
      <Base />

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="itemContainer">
          {products.map((product, index) => (
            <div
              className="itemBox"
              key={index}
              style={
                graphOpen
                  ? {
                      height: clickedIndexes.includes(index)
                        ? "280px"
                        : "140px",
                      transition: "height 0.3s ease",
                    }
                  : {
                      height: clickedIndexes.includes(index)
                        ? "280px"
                        : "140px",
                      transition: "height 0.3s ease",
                    }
              }
              onClick={() => handleGraph(index)}
            >
              <div className="itemMainData">
                <img className="itemImg" src={product.img} alt="itemImg" />
                <h1 className="itemName">
                  {product.id}: {product.name}
                </h1>
              </div>
              <div className="itemMetaData">
                <p className="originalPrice">{product.old_price}</p>
                <p className="discountRate">{product.percent}</p>
                <span className="currentPrice">{product.cur_price}원</span>
              </div>
              <div>
                {graphOpen ? (
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
                        height: 100,
                        width: 100,
                      },
                    }}
                  />
                ) : null}
              </div>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
}
export default Itemlist;
