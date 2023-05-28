import styled from "styled-components";
import { Link } from "react-router-dom";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10%;
    padding: 0px 20px;
    justify-content: center;
    align-items: center;
    width: 80vw;
`

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.span`
    font-size: 80px;
    color: #f5f6fa;
`
const OptionWrapper = styled.div`
    font-size: 30px;
    margin-top: 10%;
    display: flex;
    height: 30vh;
    width: 70%;
    justify-content: space-evenly;
    align-items: center;
`
const OptionBox = styled.div`
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    width: 250px;
    height: 150px;
    border-radius: 10px;
    display: flex;
    color: #f5f6fa;
` 

const StyledLink = styled(Link)`
    color: #f5f6fa;
    &: hover {
    color: #9c88ff;
    }
`

function Home() {
    return (
        <Container>
            <Header>
                <Title>Get whatever with reasonable price!!!</Title>
            </Header>

            <OptionWrapper>
                <OptionBox>
                    <StyledLink to={"/domestic"} style={{textDecoration: "none"}}><span>국내 상품</span></StyledLink>
                </OptionBox>
                <OptionBox>
                    <StyledLink to={"/overseas"} style={{textDecoration: "none"}}>해외 상품</StyledLink>
                </OptionBox>
                <OptionBox>
                    <StyledLink to={"/layout"} style={{textDecoration: "none"}}>모아 보기</StyledLink>
                </OptionBox>
            </OptionWrapper>

        </Container>
    )
}

export default Home;