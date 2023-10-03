import styled from "styled-components";
import Base from './HomeComponents/Base';
import Rec from "./HomeComponents/Rec";
import Recommend from "../RecommendReal";


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

// 메인홈페이지에서 Rec 제거, Recoomend만 남겨놈 (이게 더 깔끔할 것같아서)
function Home() {
    return (  
    <Container>
            <Base />
            <Recommend />
    </Container>   
    )
    }
export default Home