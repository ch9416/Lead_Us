import { useState, useEffect } from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


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

const RecommendContainer = styled.div`
    width: 100vw;
    height: 300%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`


function Recommend() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<IProduct[]>([])
    const getProducts = async() => {
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
            <Carousel infiniteLoop={true} autoPlay={false} showStatus={false} showThumbs={false} className='carouselBox'>
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
            </Carousel>
        </RecommendContainer>   
        )
     
}

export default Recommend