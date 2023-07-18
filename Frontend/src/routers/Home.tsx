import styled from "styled-components";
import Base from './Base';
import Recommend from './Recommend';


const Container = styled.div`
    width: 100vw;
    height: 400vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`


function Home() {
    return (  
    <Container>
        <Base />
            <Recommend />

    </Container>   
    )
    }
export default Home