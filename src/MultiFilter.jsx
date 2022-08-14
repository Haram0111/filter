import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { DropdownButton, Dropdown, Form } from 'react-bootstrap';
import Data from './Data';

function MultiFilter() {
    const [ArrayToFilter, setArrayToFilter] = useState(Data);
    const [Catagori, setCatagori] = useState("");
    const [Menu, setMenu] = useState("");
    
    const result = Catagori === "" ? ArrayToFilter : ArrayToFilter.filter(Data => Data.catagori == Catagori);
    const result1 = Menu === "" ? result : result.filter(Data => Data.menu == Menu);
    console.log(result);
    console.log(result1);

    return (
        <>
            <div>
                <DropdownButton id="catagori" title="카테고리" variant="secondary">
                    <Dropdown.Item onClick={() => setCatagori("음식")}>음식</Dropdown.Item>
                    <Dropdown.Item onClick={() => setCatagori("자동차")}>자동차</Dropdown.Item>
                    <Dropdown.Item onClick={() => setCatagori("일")}>일</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="menu" title="메뉴" variant="secondary">
                    <Dropdown.Item onClick={() => setMenu("햄버거")}>햄버거</Dropdown.Item>
                    <Dropdown.Item onClick={() => setMenu("치킨")}>치킨</Dropdown.Item>
                    <Dropdown.Item onClick={() => setMenu("피자")}>피자</Dropdown.Item>
                </DropdownButton>
            </div>
            {
                result1.length === 0 
                ? <p>해당 상품이 없습니다.</p>
                :result1.map((a,i)=>{
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
