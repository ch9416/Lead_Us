import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import CategoryList from "./CategoryList";
import { useState, useEffect } from 'react';
import { Transition, CSSTransition, SwitchTransition, TransitionGroup } from "react-transition-group";
import axios from 'axios';


const Container = styled.div`
    width: 100vw;
    height: 400vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const NavContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: end;
    color: whitesmoke;
`

const Logo = styled.span`
   font-family: 'League Spartan', sans-serif;
   font-size: 50px;
   color: #F1EFE7;
   margin: 10%;
`

const SearchingContainer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    padding: 0;
`

const SearchingInput = styled.input`
    background-color: white;
    width: 260px;
    height: 40px;
    padding: 0px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-style: none;
    border: none;
    margin: 0px;
    box-sizing: content-box;
    :focus {
        outline:none;
    }
`
const SearchingButton = styled.input`
    font-family: "TheJamsil5Bold";
    line-height: 0;
    font-size: 16px;
    height: 40px;
    align-items: center;
    width: 80px;
    padding: 0px;
    margin: 0px;
    border: none;
    border-style: none;
    box-sizing: content-box;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #212841;
    color: whitesmoke;
    cursor: pointer;
`
// categorylist에서 구현 못해서 여기로 가져옴.
const CategoryMenu = styled.div`
    bottom: 7%;
    background-color: whitesmoke;
    width: 90%;
    height: 80vh;
    overflow:hidden;
    border-radius: 20px;
`
const CategoryOl = styled.ol`
   display: flex;
   height: 100%; 
   flex-direction: column;
   overflow: auto;
   overscroll-behavior: none;
`

const List = styled.li`
    color: #222020;
    font-size: 20px;
    font-weight: 900;
    background-color: whitesmoke;
    list-style:none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    padding: 15px 0px;
`

function Phone() {
    const [show, setshow] = useState<boolean>(false);
    const menuShowToggle = () => {
        setshow((show) => !show)
        
    }

    //플라스크에서 데이터 받기, 동기적
    const loading: any = ['로딩중'];
    const [products, setProducts] = useState(loading);
    const Sync_notebook = async () => {
        const result = await axios.get("/notebook");
        const infos = result.data;
        setProducts(infos);
        console.log(products);
    }

    //상품리스트 출력
    const pro_for = (arr: any) => {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(
                <div key={i}>
                    {arr[i].name}<br />
                    <img src={arr[i].img} /><br />
                    <p>원래가격</p>
                    {arr[i].old_price}<br />
                    <p>현재가격</p>
                    {arr[i].cur_price}<br />
                    <p>할인율</p>
                    {arr[i].percent}<br />
                    <p>반품가격</p>
                    {arr[i].return_price}<br />
                    <p>반품할인율</p>
                    {arr[i].return_percent }<br />
                </div>
            );
        }
        return result;
    }

    //이것도 플라스크에서 데이터 받는데 비동기라서 이건 딱히 필요없음, 테스트 해본 것
    useEffect(() => {
        fetch("/infos").then(
            // response 객체의 json() 이용하여 json 데이터를 객체로 변화
            res => res.json()
        ).then(
            // 데이터를 콘솔에 출력
            data => console.log(data)
        )
    }, [])

    return (
        <Container>
            <CSSTransition in={show} timeout={300} classNames="example" unmountOnExit>
          <CategoryList />
      </CSSTransition>
            <NavContainer>
                <FontAwesomeIcon icon={faBars} className="categoryBar"
                onClick={menuShowToggle}
                />
            </NavContainer>
            <Logo>
                LeadUs
            </Logo>
            <SearchingContainer>
                <form>
                    <SearchingInput />
                    <SearchingButton type="submit" value="Search" />
                </form>
            </SearchingContainer>
            <CategoryMenu>
                <CategoryOl>
                    <List><div onClick={Sync_notebook}>노트북</div></List>
                    <List>스마트폰</List>
                    <List>스마트워치</List>
                    <List>TV</List>
                    <List>스피커</List>
                    <List>헤드폰</List>
                    <List>이어폰</List>
                    <List>데스크탑</List>
                    <List>게이밍</List>
                    <List>냉장고</List>
                    <List>세탁기</List>
                    <List>로봇청소기</List>
                    <List>가전/디지털</List>
                    <List>키보드</List>
                    <List>마우스</List>
                    <List>폰악세서리</List>
                    <List>PC주변기기</List>
                    <List>에어컨</List>
                    <List>킥보드</List>
                </CategoryOl>
            </CategoryMenu>
            
            <div>
                {
                    pro_for(products)
                }
            </div>
            
        </Container>    
    )
}

export default Phone;