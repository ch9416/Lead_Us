import { useParams } from "react-router-dom"
import { useState, useEffect, useCallback } from 'react';
import styled from "styled-components";
import "./Detail.css"

const DetailContainer = styled.div`
    width: 100%;
    height: 100vh;
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
}

function Detail() {
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<IProduct[]>([])
    const [graphOpen, setGraphOpen] = useState<boolean>(false)
    const handleGraph = () => {
        setGraphOpen((prev) => !prev)
    }
    const product = params.product
    const getProducts = useCallback(async () => {
        const json = await (await fetch(`/${product}`)).json();
        setProducts(json.slice(1, 2));
        console.log(json.slice(1, 2));
        setLoading(false);
    }, [product]);
    
    useEffect(() => {
        getProducts();
    }, [getProducts]);

    return (  
        <DetailContainer>
            
            {loading ? <h1>Loading...</h1> : 
                <div className="detail__container">
                    {products.map((product, index) => 
                    <div className="detail__box" key={index}>
                        <div className="detail__maindata">
                            <img className="detail__img" src={product.img} alt="itemImg" />
                            <h1 className="detail__name">{product.name}</h1>
                        </div>
                        <div className="detail__metadata" style={ graphOpen ? {height: "270px", transition: "height 0.3s ease"} : {height: "70px", transition: "height 0.3s ease"} } onClick={handleGraph}>
                        
                                <div className="detail__discount">
                                    <span>-{product.percent}</span>
                                </div>
                                <div className="detail__price">
                                    <span>{product.old_price}원</span>
                                    <span>{product.cur_price}원</span>  
                                </div>
                            
                            
                        </div>
                        
                    </div>
                    )}
                </div>}
        </DetailContainer>   
        )

}
    

export default Detail;