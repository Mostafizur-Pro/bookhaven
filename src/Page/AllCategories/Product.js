import React, { useEffect, useState } from 'react';
import CategoryList from './CategoryList';
import { Link, useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const Product = () => {
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

    return (
        <div>
            <div>
        <div className="lg:grid lg:grid-cols-12 gap-4 mx-5 sm:none ">
          <div className="col-span-4 lg:col-span-2 mt-5">
            {/* <CategoryList/>
             */}
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
          <div className="col-span-8 ls:col-span-9">
            <h2 className="text-3xl text-center  font-bold">
              {/* {categories[0].category_name} items: {categories.length} */}
              {/* Total Item of Couse: */}
            </h2>
           <div className='grid grid-cols-3 gap-5'>
           {/* {bookLists.map((bookList) => (
              <BookList
                key={bookList.id}
                bookItem={bookList}
              ></BookList>
            ))} */}
            hi
           </div>
            
          </div>
        </div>
      </div>
        </div>
    );
};

export default Product;