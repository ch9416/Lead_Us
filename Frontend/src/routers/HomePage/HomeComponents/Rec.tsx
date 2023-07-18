import { useState, useEffect } from 'react';
import styled from 'styled-components';
import "./Rec.css"

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

function Rec() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<IProduct[]>([])
    const [currCarousel, setCurrCarousel] = useState(0);
    const [carouselTransition, setCarouselTransition] = useState('transform 500ms ease-in-out');
    const getProducts = async() => {
        const json = await (await fetch("/notebook")).json();
        const newList = json.slice(0, 10)
        setProducts(newList);
        console.log(newList);
        setLoading(false);
        
    };

    useEffect(() => {
        getProducts();
    }, []);

    const slideNext = () => {
      const itemListLength = products.length
      if (currCarousel < itemListLength -1)
      {setCurrCarousel((prev) => prev + 1)}
    }

    const slidePrev = () => {
      setCurrCarousel((prev) => prev - 1)
    }

    return (  
        <RecommendContainer>
            {loading ? <h1>Loading...</h1> : 
                <div className='carousel__container'>
                    <div className='carousel__box'>
                        <div className='carousel__slider' style={{transform: `translateX(-${currCarousel * 10}%)`, transition: `transform 500ms ease-in-out`}}>
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
                        </div>
                        <div className='carousel__control'>
                            <span className='button__arrow prev' onClick={slidePrev} >{"<"}</span>
                            <span className='button__arrow next' onClick={slideNext} >{">"}</span>
                        </div>
                    </div>
                </div>
                }
        </RecommendContainer>   
        )
}

export default Rec