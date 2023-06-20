import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";
import Base from '../routers/Base';

const Container = styled.div`
    width: 100vw;
    height: 400vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`


function Detail() {
    const [loading, setLoading] =useState(true);
    const [products, setProducts] = useState(loading);

    const Sync_notebook = async () => {
        const result = await axios.get("/notebook");
        const infos = result.data;
        setProducts(infos)    
        setLoading(false)
    }
    
    Sync_notebook()
    useEffect(() => {
        fetch("/infos").then(
            // response 객체의 json() 이용하여 json 데이터를 객체로 변화
            res => res.json()
        ).then(
            // 데이터를 콘솔에 출력
            data => console.log(data)
        )
    }, [])

    const pro_for = (arr: any) => {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(
                <div className="itemBox" key={i}>
                    <div className="itemMainData">
                        <img className="itemImg" src={arr[i].img} alt="itemImg"/><br />
                        <h1 className="itemName">{arr[i].name}</h1><br />
                    </div>
                    <div className="itemMetaData">
                        <p className="originalPrice">원래가격</p>
                        <p>{arr[i].old_price}</p><br />
                        <p className="discountRate">할인율</p>
                        <p>{arr[i].percent}</p><br />
                        <p className="currentPrice">{arr[i].cur_price}원</p>
                        {/* <p className="backPrice">반품가격</p>
                        {arr[i].return_price}<br />
                        <p className="backPriceRate">반품할인율</p>
                        {arr[i].return_percent }<br /> */}
                    </div>
                </div>
            );
        }
        return result;
    }

    //이것도 플라스크에서 데이터 받는데 비동기라서 이건 딱히 필요없음, 테스트 해본 것
    

    return (  
    <Container>
        <Base />
        {loading ? <h1>Loading...</h1> : 
            <div className="itemContainer">
                {
                    pro_for(products)
                }
            </div>}
    </Container>   
    )
            }
export default Detail;