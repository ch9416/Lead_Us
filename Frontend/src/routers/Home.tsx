import styled from "styled-components";
import Base from './Base';
import Recommend from './Recommend';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const Container = styled.div`
    width: 100vw;
    height: 400vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`


function Home() {
    const loading: any = ['·ÎµùÁß'];
    const [products, setProducts] = useState(loading);

    const Sync_notebook = async () => {
        const result = await axios.get("/chuchun");
        const infos = result.data;
        setProducts(infos);
        console.log(products);
    }

    return (  
    <Container>
        <Base />
            <Recommend />

    </Container>   
    )
    }
export default Home