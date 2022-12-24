import React, { useEffect, useState } from 'react'
import "../../css/products.css";
import { apiUrl } from '../../config/url';
import axios from 'axios';
import Pagination from './Pagination';
import ProductContainer from "./productContainer"
import { Button } from '@mui/material';

export default function Products() {


  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [filters, setFilter] = useState({ min: 0, max: 500, srt: 1, srtv: "price" });
  const [sidebar, toogleSideBar] = useState(true)

  const filte = async () => {
    console.log(filters)
    const { min = 0, max = 500, srt = 1, srtv = "price" } = filters;
    let res = await axios
      .get(`${apiUrl}/products?skip=${(page - 1) * 20}&min=${min}&max=${max}&srt={srt}&srtv=${srtv}`);
    console.log(res.data)
    setProducts((typeof (res.data) != "string") ? res.data : []);
  }

  const getProducts = async () => {
    let res = await axios.get(apiUrl + "/products" + "?skip=" + (page - 1) * 20);
    setProducts((typeof (res.data) != "string") ? res.data : []);
  }
console.log(products)
  useEffect(() => {
    getProducts();
  }, [])

  return (
    <div className='products'>
      
      {(<div className='sidebar'>
        <div>
          <h2>minimum price ${filters.min} </h2>
          <input type="range" name="" min={1} max={500} id=""
            onChange={(e) => setFilter({ ...filters, min: e.target.value })} />
          <h2>maximum price ${filters.max} </h2>
          <input type="range" name="" min={1} max={500} id=""
            onChange={(e) => setFilter({ ...filters, max: e.target.value })} />
        </div>
        <select name="" id="" onChange={(e) => setFilter({ ...filters, srtv: e.target.value })}>
          <option value="price">sort by price </option>
          <option value="rating">sort by rating </option>
          <option value="name">sort by alphabetical order </option>
        </select>
        <h2> sorted by {filters.srtv} {filters.srt == 1 ? "asseending" : "descending"}</h2>
        <select name="" id="" onChange={(e) => setFilter({ ...filters, srt: e.target.value })}>
          <option value={1}>ascending</option>
          <option value={-1}>descending</option>
        </select>
        <Button onClick={filte}>filter</Button>
      </div>)}

      <div className='productGrid'>
        {
          products.map((e, i) => <ProductContainer product={e} key={i} ></ProductContainer>)
        }
      </div>

      <Pagination page={page} setPage={setPage}></Pagination>
    </div >
  )
}
