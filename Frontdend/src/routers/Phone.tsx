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


function Phone() {
    const [show, setshow] = useState<boolean>(false);
    const menuShowToggle = () => {
        setshow((show) => !show)
        
    }

    //�ö�ũ���� ������ �ޱ�, ������
    const loading: any = ['�ε���'];
    const [products, setProducts] = useState(loading);
    const Sync = async () => {
        const result = await axios.get("/infos");
        const infos = result.data;
        setProducts(infos);
        console.log(products);
    }

    //��ǰ����Ʈ ���
    const pro_for = (arr: any) => {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(
                <div key={i}>
                    {arr[i].name}<br />
                    <img src={arr[i].img} /><br />
                    {arr[i].dis}<br />
                    {arr[i].price}<br /><hr />
                </div>
            );
        }
        return result;
    }

    //�̰͵� �ö�ũ���� ������ �޴µ� �񵿱�� �̰� ���� �ʿ����, �׽�Ʈ �غ� ��
    useEffect(() => {
        fetch("/infos").then(
            // response ��ü�� json() �̿��Ͽ� json �����͸� ��ü�� ��ȭ
            res => res.json()
        ).then(
            // �����͸� �ֿܼ� ���
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
            
            <div><button onClick={Sync}>request</button></div>

            <div>
                {
                    pro_for(products)
                }
            </div>
            
        </Container>    
    )
}

export default Phone;