import styled from "styled-components";
import CategoryList from "./CategoryTap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useState } from 'react';

const NavContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: end;
    color: whitesmoke;
`

const Logo = styled.a`
   font-family: 'League Spartan', sans-serif;
   font-size: 50px;
   color: #F1EFE7;
   margin: 10%;
`

const SearchingContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    padding: 0;
    margin-bottom: 20px;
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


function Base() {
    const [show, setshow] = useState<boolean>(false);
    const menuShowToggle = () => {
        setshow((show) => !show)
        
    }
return (
    <>
    <CSSTransition in={show} timeout={300} classNames="example" unmountOnExit>
            <CategoryList />
        </CSSTransition>
                <NavContainer>
                    <FontAwesomeIcon icon={faBars} className="categoryBar"
                    onClick={menuShowToggle}
                    />
                </NavContainer>
                
                <Logo>
                    <Link to={"/"}>
                        LeadUs
                    </Link>
                </Logo>
                
                <SearchingContainer>
                    <form>
                        <SearchingInput />
                        <SearchingButton type="submit" value="Search" />
                    </form>
                </SearchingContainer>
    </>
        
    )
}

export default Base;