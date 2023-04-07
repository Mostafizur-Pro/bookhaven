import React, { useEffect, useState } from 'react';
import CategoryList from './CategoryList';
import BookList from './BookList';


const AllCategories = () => {
    // const bookLists = useLoaderData();
    
    const [bookLists, setBookList] = useState([]);
    useEffect(() => {
      fetch(
        "products.json"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setBookList(data);
        });
    }, []);

    // console.log("booklists",bookLists);
    return (
        <div>
           <div>
        <div className="lg:grid lg:grid-cols-12 gap-4 mx-5 sm:none ">
          <div className="col-span-4 lg:col-span-2 mt-5">
            <CategoryList/>
         
          </div>
          <div className="col-span-8 ls:col-span-9">
            <h2 className="text-3xl text-center  font-bold">
              {/* {categories[0].category_name} items: {categories.length} */}
              {/* Total Item of Couse: */}
            </h2>
            {bookLists.map((bookList) => (
              <BookList
                key={bookList.id}
                bookItem={bookList}
              ></BookList>
            ))}
            
          </div>
        </div>
      </div>
        </div>
    );
};

export default AllCategories;