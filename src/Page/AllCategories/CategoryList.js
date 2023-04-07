import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryList = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
      fetch(
        "categories.json"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCategories(data);
        });
    }, []);
  // console.log("object", categories);
    return (
        <div>
            <div className="text-lg font-semibold">
        {categories.map((category) => (
          <p className=" mt-3 uppercase" key={category.id}>
            <Link
              className="hover:underline selected"
              to={`/categories/${category.name}`}
            >
              {category.name}
            </Link>
            
          </p>
        ))}
      </div>
      
        </div>
    );
};

export default CategoryList;