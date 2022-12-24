import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./style/search.css";
import recomendNames from "./searchRecomendations.json";
import { apiUrl } from "../../config/url";

const recomend = val => {
    if (val)
        return recomendNames.filter(e => e && e.toLowerCase().includes(val.toLowerCase())).slice(0, 5);
    else return []
}

let id;


export default function SearchBox() {
    const navigate = useNavigate()
    const [results, setResults] = useState([]);
    const [suggetions, setSuggetions] = useState([]);
    const [active, setActive] = useState(false);

    const search = (val) =>
        axios.get(`${apiUrl}/products/search?q=${val}`)
            .then((res) => setResults(res.data))
    const debounce = val => {
        setSuggetions(recomend(val));
        clearTimeout(id);
        id = setTimeout(() => val && search(val), 1000);
    }
    console.log(results)
    const handleClick = (e) => {
        document.querySelector('.seacrch_input').value = e;
        setSuggetions([]);
    }

    return (
        <div className='searchbox'>
            <input
                onBlur={() => {
                    setActive(!active);
                }}
                onFocus={() => {
                    setActive(!active)
                }}
                onChange={e => debounce(e.target.value)}
                type="text" className="seacrch_input"
                placeholder="Search for a product or brand..."
            />
            {active && <div className='searchResults'>

                {<div className='searchProducts'>
                    {
                        results.map((e, i) => (<div
                            onClick={ ()=>{navigate("/preview"+e.id);console.log("hi")}}
                            className='productRes' key={i}>
                            <img
                                src={e.image} alt="" />
                            <div >
                                <p >
                                    {
                                        e.name && e.name.split("").map((el, i) => (
                                            <span
                                                style={{ color: document.querySelector('.seacrch_input').value.includes(el) ? "red" : "black" }}
                                                key={i}>{el}</span>
                                        ))
                                    }
                                </p>
                                <p>{e.price ? e.price : (50 * Math.random()).toFixed(2)}$</p>
                            </div>
                        </div>))
                    }
                </div>}
            </div>}
        </div >
    )
}
