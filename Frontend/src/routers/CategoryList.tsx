import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useState, useEffect } from 'react';
import axios from 'axios';


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
                <List>노트북</List>
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


    )
 
};

export default CategoryList 