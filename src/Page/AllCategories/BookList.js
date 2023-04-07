import React from 'react';

const BookList = ({bookItem}) => {
    console.log("bookItem", bookItem);
    const {picture, name, category, price, resalePrice} = bookItem
    return (
        <div>
            <section className="mt-4">
          <div className="card w-64  bg-base-100 shadow-xl">
            <figure>
              <img
                src={picture}
                alt="Books"
                className="h-96"
              />
            </figure>

            <div className="card-actions mt-2 justify-end">
              <div className="badge badge-outline">{category}</div>
              {/* <div className="badge badge-outline">Fun</div> */}
            </div>
            <div className="card-body">
              <h2 className="card-title">
                {name}
                {/* <div className="badge badge-secondary">NEW</div> */}
              </h2>
              <p className="text-gray-400">By: Mostafizur Rahman</p>
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <div className="flex">
                <h3 className="text-xl font-semibold text-green-400">${price}</h3>
                <h3 className="text-lg font-semibold ml-3 line-through text-gray-400">
                  ${resalePrice}
                </h3>
              </div>
            </div>
            <div className="text-center mb-3">
              <button className="btn btn-outline">Add to Basket</button>
            </div>
          </div>
        </section>
            
        </div>
    );
};

export default BookList;