import styled from "styled-components";

interface ItemlistProps {
    item: string;
  }

const ItemListContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 300vh;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 3%;
`


  const ItemBox = styled.div`
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

function Itemlist({item}: ItemlistProps) {
    return (
    <ItemListContainer>
        <ItemBox>
            <div>
                <h1>{item}</h1>
            </div>
        </ItemBox>
        <ItemBox>
            <div>
                <h1>{item}</h1>
            </div>
        </ItemBox>
        <ItemBox>
            <div>
                <h1>{item}</h1>
            </div>
        </ItemBox>
        <ItemBox>
            <div>
                <h1>{item}</h1>
            </div>
        </ItemBox>
    </ItemListContainer>
    )
}

export default Itemlist