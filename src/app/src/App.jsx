
import { useEffect, useState } from "react";
import styled from "styled-components";
import { SearchResult } from "./components/SearchResult/searchResult";
import logo from "./assets/LOGO.png"

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data,setData] = useState(null);
  const [filteredData,setFilteredData] = useState(null);
  const [selectbtn,setSelectBtn] = useState("all");
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);

  useEffect(() => { 
    const fetchFoodData = async () => {
      setLoading(true);
      try{
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilteredData(json);
        setLoading(false);
        
      }catch(error){
        setError("Unable to fetch data");
      }
    };
    fetchFoodData();
  },[]);

  

  const searchFood = (e) => {
    const searchValue = e.target.value;

    console.log(searchValue);

    if(searchValue === ""){
      setFilteredData(null);
    }

    const filter = data?.filter((food) => 
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredData(filter);
  }

  const filterFood = (type) => {

    if(type === "all"){
      setFilteredData(data);
      setSelectBtn('all');
      return;
    }

    const filter = data?.filter((food) => 
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectBtn(type);
  }

  const filterBtns = [
    {
      name:"All",
      type:"all",
    },
    {
      name:"Breakfast",
      type:"breakfast",
    },
    {
      name:"Lunch",
      type:"lunch",
    },
    {
      name:"Dinner",
      type:"dinner",
    },
  ]

  if(error)return<div>{error}</div>;
  if(loading)return<div>loading.....</div>;

  return (
    <>
    <Container>
      <TopContainer>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="search">
          <input onChange={searchFood} placeholder="Search Food"/>
        </div>
      </TopContainer>
      <FilterContianer>
        {
          filterBtns.map(value => 
            <Button key={value.name} onClick={() => filterFood(value.type)}>{value.name}</Button>
          )
        }
      </FilterContianer> 
    </Container>
    <SearchResult data={filteredData}/>
    </>
  )
}

export const Container = styled.div`
/* max-width: 1200px; */
margin: 0 auto;
`;


const TopContainer =styled.section`
min-height: 140px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 16px;
background-color: gray;

.logo{
  width: 90px;
}

.search{
  input{
    background-color: transparent;
    border: 1px solid red;
    color: white;
    border-radius: 5px;
    height: 40px;
    font-size: 16px;
    padding: 4px;
    &:hover{
      color: white;
    }
    &::placeholder{
      color: white;
    }

  }
}
`;

const FilterContianer=styled.section`
display: flex;
justify-content: center;
gap: 12px;
background-color: gray;
padding-bottom:40px;
`;



export const Button = styled.button`
background-color: red;
color: white;
padding: 6px 12px;
border: none;
border-radius: 5px;
cursor: pointer;
&:hover {
    background-color: darkred;  
  }
`

export default App;
