import styled from "styled-components";
import img from "../asset/imgsample.jpg"


export const DomesticContainer = styled.div`
    width: 100vw;
    height: 400vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const KindLine = styled.div`
    width:100%;
    height: 40px;
    background-color: orange;
    display: flex;
    align-items: center;
`
const KindLineItem = styled.span`
    font-family: "TheJamsil5Bold";
    color: #393646;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 0 10px;
`

export const InputBox = styled.div`
    width: 100%;
    height: 25px;
    margin: 30px auto 100px;
    display: flex;
    justify-content: center;
`

export const SearchingInput = styled.input`
    background-color: white;
    width: 300px;
    height: 25px;
`

export const ItemListContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 300vh;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const ItemBox = styled.div`
 background-color: rgba(0 , 0 , 0, 0.4);
 width: 500px;
 height: 200px;
 border-radius: 20px;
 display: flex;
 align-items: center;
 color: #A9907E;
 img {
    width: 150px;
    height: 150px;
    border-radius: 20px;
    margin-left: 20px;
 }

 div {
    margin-left:20px;
    display: flex;
    flex-direction: column;
    align-items: start;
    height: 70%;

    h1 {
    font-family: "TheJamsil5Bold";
    font-size: 25px;
    color: #A9907E;
    margin-bottom: 20px;
 }
}
`

const ItemBoxPrice = styled.span`
    font-family: "TheJamsil5Bold";
    font-size: 20px;
    color: #A9907E;
    margin-bottom: 30px;
`

const DiscountTag = styled.span`
    font-family: "TheJamsil5Bold";
    font-size: 20px;
    color: #A9907E;
`

function Domestic() {
    return (
        <DomesticContainer>
            <KindLine>
                <KindLineItem>컴퓨터</KindLineItem>
                <KindLineItem>노트북</KindLineItem>
                <KindLineItem>태블릿</KindLineItem>
                <KindLineItem>스마트폰</KindLineItem>
                <KindLineItem>스마트워치</KindLineItem>
                <KindLineItem>모니터</KindLineItem>
                <KindLineItem>TV</KindLineItem>
                <KindLineItem>스피커</KindLineItem>
                <KindLineItem>헤드폰</KindLineItem>
                <KindLineItem>이어폰</KindLineItem>
                <KindLineItem>데스크탑</KindLineItem>
                <KindLineItem>게이밍</KindLineItem>
                <KindLineItem>세탁기</KindLineItem>
                <KindLineItem>냉장고</KindLineItem>
                <KindLineItem>로봇청소기</KindLineItem>
                <KindLineItem>가전/디지털</KindLineItem>
                <KindLineItem>키보드</KindLineItem>
                <KindLineItem>마우스</KindLineItem>
                <KindLineItem>휴대폰 악세서리</KindLineItem>
                <KindLineItem>청소기</KindLineItem>
                <KindLineItem>헤어가전</KindLineItem>
                <KindLineItem>프린터</KindLineItem>
                <KindLineItem>저장장치</KindLineItem>
                <KindLineItem>카메라</KindLineItem>
                <KindLineItem>PC주변기기</KindLineItem>
                <KindLineItem>PC부품</KindLineItem>      
            </KindLine>
            <InputBox>
                <SearchingInput /><button>Search</button>
            </InputBox>
            <ItemListContainer>
                <ItemBox>
                    <img src={img}  alt="" />
                    <div>
                        <h1>LG 그램 14Z950 5세대 i5 14인치 윈도우10</h1>
                        <ItemBoxPrice>398,000원</ItemBoxPrice>
                        <DiscountTag>32% 할인</DiscountTag>
                    </div>
                    
                </ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
                <ItemBox></ItemBox>
            </ItemListContainer>
        
        </DomesticContainer>
        
    )
}

export default Domestic;