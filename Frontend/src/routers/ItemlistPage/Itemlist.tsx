import { useState, useEffect, useCallback } from 'react';
import styled from "styled-components";
import Base from '../HomePage/HomeComponents/Base';
import { useParams } from "react-router-dom"


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
    percent: string,
    return_percent: string,
    return_price: string,
    t_price: string,
    t_date: string,
    id: string,
}


function Itemlist() {
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
            
        {loading ? <h1>Loading...</h1> : 
            <div className="itemContainer">
                {products.map((product, index) => 
                <div className="itemBox" key={index}>
                    <div className="itemMainData">
                            <img className="itemImg" src={product.img} alt="itemImg" />
                            <h1 className="itemName">{product.id}: {product.name}</h1>
                    </div>
                    <div className="itemMetaData">
                    <p className="originalPrice">{product.old_price}</p>
                    <p className="discountRate">{product.percent}</p>
                    <span className="currentPrice">{product.cur_price}원</span>
                        <p className="originalPrice">{product.old_price}</p>
                        <p className="discountRate">{product.percent}</p>
                        <span className="currentPrice">{product.cur_price}원</span>
                        <p className="originalPrice">{product.t_date}</p>
                        <p className="originalPrice">{product.t_price}</p>
                    </div>
                </div>
                )}
            </div>}

    </Container>   
    )
    }
export default Itemlist;