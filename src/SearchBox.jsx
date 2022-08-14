import { useState, useEffect } from "react";
import Data from './Data';

function SearchBox() {
    const [ArrayToFilter, setArrayToFilter] = useState(Data);
    const [Seach, setSeach] = useState("");
    //const [note, setNote] = useState(null);
    
    useEffect(() => {
        const result = Seach === "" ? ArrayToFilter : ArrayToFilter.filter(Data => Data.catagori.toUpperCase().includes(Seach.toUpperCase()));
        console.log(result);
        console.log(Seach);
    }, [Seach]);
    
    return (
        <>
            <div>
                <input onChange={(e) => setSeach(e.target.value)}></input>
                <button>버튼</button>
            </div>
            {/* {
                result.length === 0 
                ? <p>해당 상품이 없습니다.</p>
                :result.map((a,i)=>{
                    return (
                        <div key={i}>
                            <p>{a.catagori}, {a.menu}, {a.number}, {a.title}</p>
                        </div>
                    )
                })
            } */}
        </>
        
    );
}

export default SearchBox;
