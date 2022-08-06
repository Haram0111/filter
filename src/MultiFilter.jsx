import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { DropdownButton, Dropdown, Form } from 'react-bootstrap';
import Data from './Data';

function MultiFilter() {
    const [ arrayToFilter, setArrayToFilter ] = useState(Data);
    const [ filteredResults, setFilteredResults] = useState([]);
    // const [ categoryOptions, setCategoryOptions ] = useState([ 1,2,3 ]);
    const [ selectedCategoryOptions, setSelectedCategoryOptions ] = useState([ ]);
    // const [ hideVenuesWithoutDiscounts, setHideVenuesWithoutDiscounts ] = useState(true);

    // const filterHideVenuesWithoutDiscounts = () => 
    // {
    //     if(hideVenuesWithoutDiscounts)
    //     {
    //         return arrayToFilter.filter(item => item.discounts.length > 0);
    //     }
    //     else
    //     {
    //         return arrayToFilter;
    //     }   
    // };

    const filterSelectedCategoryOptions = () => {
         return arrayToFilter.filter(item => item.category_id.includes(selectedCategoryOptions));
     };

    // const filtersearchName = () => 
    // {
    //     return arrayToFilter.filter(item =>  item.name.toLowerCase().indexOf(searchName.toLowerCase()) != -1);
    // };

    // useEffect(() => 
    // {
    //     //Filter options updated so apply all filters here
    // },
    // [searchName, hideVenuesWithoutDiscounts, selectedCategoryOptions]);
    return (
        <>
            <div>
                <DropdownButton id="catagori" title="카테고리" variant="secondary">
                    <Dropdown.Item onClick={filterSelectedCategoryOptions()}>음식</Dropdown.Item>
                    <Dropdown.Item>자동차</Dropdown.Item>
                    <Dropdown.Item>일</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="menu" title="메뉴" variant="secondary">
                    <Dropdown.Item>햄버거</Dropdown.Item>
                    <Dropdown.Item>치킨</Dropdown.Item>
                    <Dropdown.Item>피자</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="number" title="번호" variant="secondary">
                    <Dropdown.Item>1</Dropdown.Item>
                    <Dropdown.Item>2</Dropdown.Item>
                    <Dropdown.Item>3</Dropdown.Item>
                </DropdownButton> 
            </div>
            {
                arrayToFilter.map((a,i)=>{
                    return (
                        <div key={i}>
                            <p>{a.catagori}, {a.menu}, {a.number}, {a.title}</p>
                        </div>
                    )
                })
            }
        </>
        
    );
}

export default MultiFilter;
