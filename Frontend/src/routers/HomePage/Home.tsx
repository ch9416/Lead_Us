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

// ����Ȩ���������� Rec ����, Recoomend�� ���ܳ� (�̰� �� ����� �Ͱ��Ƽ�)
function Home() {
    return (  
    <Container>
            <Base />
            <Recommend />
    </Container>   
    )
    }
export default Home