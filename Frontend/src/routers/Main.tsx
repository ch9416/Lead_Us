import { useState, useEffect, useCallback } from 'react';
import styled from "styled-components";
import Base from './Base';
import { useParams } from "react-router-dom"
import Recommend from './Recommend';


const Container = styled.div`
    width: 100vw;
    height: 400vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

interface IProduct {
    category: string,
    cur_price: string,
    name: string,
    img: string,
    old_price: string,
    precent: string,
    return_percent: string,
    return_price: string,
}


function Practice() {
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<IProduct[]>([])
    const product = params.product
    const getProducts = useCallback(async () => {
        const json = await (await fetch(`/${product}`)).json();
        setProducts(json);
        console.log(json);
        setLoading(false);
    }, [product]);
    
    useEffect(() => {
        getProducts();
    }, [getProducts]);
    
    
    return (  
    <Container>
        <Base />
            <Recommend />


        {loading ? <h1>Loading...</h1> : 
            <div className="itemContainer">
                {products.map((product, index) => 
                <div className="itemBox" key={index}>
                    <div className="itemMainData">
                        <img className="itemImg" src={product.img} alt="itemImg" />
                        <h1 className="itemName">{product.name}</h1>
                    </div>
                    <div className="itemMetaData">
                    <p className="originalPrice">{product.old_price}</p>
                    <p className="discountRate">{product.precent}</p>
                    <span className="currentPrice">{product.cur_price}원</span>
                    </div>
                </div>
                )}
            </div>}

    </Container>   
    )
    }
export default Practice;