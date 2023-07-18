import styled from "styled-components";
import Base from './HomeComponents/Base';
import Rec from "./HomeComponents/Rec";


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

function Home() {
    return (  
    <Container>
        <Base />
            <Rec />
    </Container>   
    )
    }
export default Home