import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";


const CategoryMenu = styled.div`
    z-index: 2;
    position: fixed;
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

const StyledLink = styled(Link)`
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



function CategoryList() {
    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => {
      setIsVisible(!isVisible);
    }
    return (
        <>
                {isVisible &&
                    <CategoryMenu id="itemList" onClick={handleClick}>
                    <CategoryOl>
                        <StyledLink to={"/notebook"} >노트북</StyledLink>
                        <StyledLink to={"/smartwatch"}>스마트워치</StyledLink>
                        <StyledLink to={"/TV"}>TV</StyledLink>
                        <StyledLink to={"/speaker"}>스피커</StyledLink>
                        <StyledLink to={"/headphonek"}>헤드폰</StyledLink>
                        <StyledLink to={"/earphone"}>이어폰</StyledLink>
                        <StyledLink to={"/desktop"}>데스크탑</StyledLink>
                        <StyledLink to={"/smartphone"}>스마트폰</StyledLink>
                        <StyledLink to={"/gaming"}>게이밍</StyledLink>
                        <StyledLink to={"/refrigerator"}>냉장고</StyledLink>
                        <StyledLink to={"/washmachine"}>세탁기</StyledLink>
                        <StyledLink to={"/robotcleaner"}>로봇청소기</StyledLink>
                        <StyledLink to={"/digital"}>가전/디지털</StyledLink>
                        <StyledLink to={"/keyboard"}>키보드</StyledLink>
                        <StyledLink to={"/mouse"}>마우스</StyledLink>
                        <StyledLink to={"/phone_acce"}>폰악세서리</StyledLink>
                        <StyledLink to={"/relativePC"}>PC주변기기</StyledLink>
                        <StyledLink to={"/aircon"}>에어컨</StyledLink>
                        <StyledLink to={"/kickboard"}>킥보드</StyledLink>
                    </CategoryOl>
                </CategoryMenu>}
            
         </>
       
    )
};

export default CategoryList 