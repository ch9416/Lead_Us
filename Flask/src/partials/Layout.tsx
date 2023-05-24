import styled from "styled-components";
import Itemlist from "./Itemlist";
import {useState} from "react"

const DomesticContainer = styled.div`
    width: 100vw;
    height: 400vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

const SearchingInput = styled.input`
    background-color: white;
    width: 300px;
    height: 25px;
`
const Logo = styled.h1`
   font-family: 'League Spartan', sans-serif;
   font-size: 150px;
   color: #F1EFE7;
   margin: 3%;
`
const ItemKindBoxContainer = styled.div`
    width: 70%;
    display: grid;
    position: sticky;
    top: 1px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 3px;
`

const ItemKindBox = styled.h1`
    font-family: "TheJamsil5Bold";
    background-color: #212841;
    color: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 30px;
    &:hover {
        background-color: #4b5b96;
    }
`
const InputBox = styled.div`
    width: 100%;
    height: 25px;
    margin: 30px auto 100px;
    display: flex;
    justify-content: center;
`

const SearchingButton = styled.button`
    font-family: "TheJamsil5Bold";
    padding: 5px 10px;
    margin-left: 5px;
    border-radius: 5px;
    background-color: #212841;
    color: whitesmoke;
`

function Layout() {
    const [item, setitem] = useState("");
    const change = (event: any) => {
        setitem(event.target.innerText)
    }

    return (
        <DomesticContainer>
             <Logo>LeadUs</Logo>
             <InputBox>
                <form action="">
                    <SearchingInput /><SearchingButton>Search</SearchingButton>
                </form>
             </InputBox>
            <ItemKindBoxContainer>
                <ItemKindBox onClick={change}>
                   컴퓨터
                </ItemKindBox>
                <ItemKindBox onClick={change}>
                    노트북
                </ItemKindBox>
                <ItemKindBox>
                    테블릿
                </ItemKindBox>
                <ItemKindBox>
                    스마트폰
                </ItemKindBox>
                <ItemKindBox>
                    스마트워치
                </ItemKindBox>
                <ItemKindBox>
                    모니터
                </ItemKindBox>
                <ItemKindBox>
                    TV
                </ItemKindBox>
                <ItemKindBox>
                    스피커
                </ItemKindBox>
                <ItemKindBox>
                    헤드폰
                </ItemKindBox>
                <ItemKindBox>
                    게이밍
                </ItemKindBox>
                <ItemKindBox>
                    키보드
                </ItemKindBox>
                <ItemKindBox>
                    마우스
                </ItemKindBox>
                <ItemKindBox>
                    악세서리
                </ItemKindBox>
                <ItemKindBox>
                    청소기
                </ItemKindBox>
                <ItemKindBox>
                    프린터
                </ItemKindBox>
                <ItemKindBox>
                    저장장치
                </ItemKindBox>
            </ItemKindBoxContainer>
            
                <Itemlist item={item} />
             
        </DomesticContainer>
    )
}

export default Layout;