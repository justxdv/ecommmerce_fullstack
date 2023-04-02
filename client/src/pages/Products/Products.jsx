import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./products.scss";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={10000}
              defaultValue={5000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://th.bing.com/th/id/R.9ba071b927292a96f86f61160b2c4fbf?rik=jZDgjNphbnJa8A&riu=http%3a%2f%2fs3.scoopwhoop.com%2fanj%2ffashion%2f779705221.jpg&ehk=FgoLXj9F%2bojuXDJzXvopcsvUK2gCudwWF5kqBh0UImw%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} subCats={selectedSubCats}/>
      </div>
    </div>
  );
};

export default Products;