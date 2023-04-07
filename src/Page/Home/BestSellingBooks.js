import React from "react";

const BestSellingBooks = () => {
  return (
    <div className="my-20">
      <div>
        <p>People's Choise</p>
        <h2 className="text-2xl mb-2">Best Selling Books</h2>
      </div>
      <hr />
      <div className="grid grid-cols-4 gap-5">
      {/* Book 1 */}
        <section className="mt-4">
          <div className="card w-64  bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://m.media-amazon.com/images/I/514JTPMQTML._SX600_BO1,204,203,200_.jpg"
                alt="Books"
                className="h-96"
              />
            </figure>

            <div className="card-actions mt-2 justify-end">
              <div className="badge badge-outline">Adventure</div>
              <div className="badge badge-outline">Fun</div>
            </div>
            <div className="card-body">
              <h2 className="card-title">
                Advanced Internet of Things
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
                <h3 className="text-xl font-semibold text-green-400">$25.18</h3>
                <h3 className="text-lg font-semibold ml-3 line-through text-gray-400">
                  $27.20
                </h3>
              </div>
            </div>
            <div className="text-center mb-3">
              <button className="btn btn-outline">Add to Basket</button>
            </div>
          </div>
        </section>
          {/* Book 2 */}
        <section className="mt-4">
          <div className="card w-64 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1611834134l/7126.jpg"
                alt="Books"
                className="h-96"
              />
            </figure>

            <div className="card-actions mt-2 justify-end">
              <div className="badge badge-outline">Biographies</div>
              <div className="badge badge-outline">History</div>
            </div>
            <div className="card-body">
              <h2 className="card-title">
              The Count of Monte Cristo
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
                  checked
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
              </div>
              <div className="flex">
                <h3 className="text-xl font-semibold text-green-400">$12.50</h3>
                <h3 className="text-lg font-semibold ml-3 line-through text-gray-400">
                  $15.80
                </h3>
              </div>
            </div>
            <div className="text-center mb-3">
              <button className="btn btn-outline">Add to Basket</button>
            </div>
          </div>
        </section>
         {/* Book 3 */}
        <section className="mt-4">
          <div className="card w-64 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://static-01.daraz.com.bd/p/12709e828d7a03928a4ef46ab9841d13.jpg"
                alt="Books"
                className="h-96"
              />
            </figure>

            <div className="card-actions mt-2 justify-end">
              <div className="badge badge-outline">Mystery</div>
              <div className="badge badge-outline"> Thriller</div>
            </div>
            <div className="card-body">
              <h2 className="card-title">
                Advanced of Sherlock Holmes
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
                <h3 className="text-xl font-semibold text-green-400">$28.18</h3>
                <h3 className="text-lg font-semibold ml-3 line-through text-gray-400">
                  $33.20
                </h3>
              </div>
            </div>
            <div className="text-center mb-3">
              <button className="btn btn-outline">Add to Basket</button>
            </div>
          </div>
        </section>
          {/* Book 4*/}
        <section className="mt-4">
          <div className="card w-64 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-cust-13095.jpg?itok=H0c1QL8Y"
                alt="Books"
                className="h-96"
              />
            </figure>

            <div className="card-actions mt-2 justify-end">
              <div className="badge badge-outline">Horror</div>
              <div className="badge badge-outline">Fun</div>
            </div>
            <div className="card-body">
              <h2 className="card-title">
              The Call of Cthulhu "Horror"
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
                <h3 className="text-xl font-semibold text-green-400">$25.18</h3>
                <h3 className="text-lg font-semibold ml-3 line-through text-gray-400">
                  $27.20
                </h3>
              </div>
            </div>
            <div className="text-center mb-3">
              <button className="btn btn-outline">Add to Basket</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BestSellingBooks;
