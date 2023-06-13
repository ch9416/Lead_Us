import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


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



function CategoryList() {
    return (
       
            <CategoryMenu>
                <CategoryOl>
                    <List><Link to={"/notebook"}>노트북</Link></List>
                    <List><Link to={"/smartphone"}>스마트폰</Link></List>
                    <List><Link to={"/smartwatch"}>스마트워치</Link></List>
                    <List><Link to={"/TV"}>TV</Link></List>
                    <List><Link to={"/speaker"}>스피커</Link></List>
                    <List><Link to={"/headphonek"}>헤드폰</Link></List>
                    <List><Link to={"/earphone"}>이어폰</Link></List>
                    <List><Link to={"/desktop"}>데스크탑</Link></List>
                    <List><Link to={"/gaming"}>게이밍</Link></List>
                    <List><Link to={"/refrigerator"}>냉장고</Link></List>
                    <List><Link to={"/washmachine"}>세탁기</Link></List>
                    <List><Link to={"/robotcleaner"}>로봇청소기</Link></List>
                    <List><Link to={"/digital"}>가전/디지털</Link></List>
                    <List><Link to={"/keyboard"}>키보드</Link></List>
                    <List><Link to={"/mouse"}>마우스</Link></List>
                    <List><Link to={"/phone_acce"}>폰악세서리</Link></List>
                    <List><Link to={"/relativePC"}>PC주변기기</Link></List>
                    <List><Link to={"/aircon"}>에어컨</Link></List>
                    <List><Link to={"/kickboard"}>킥보드</Link></List>
                </CategoryOl>
            </CategoryMenu>
       
    )
};

export default CategoryList 