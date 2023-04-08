import React from "react";
import { Fade } from "react-reveal";

const NewReleaseBooks = () => {
  return (
    <div>
      <section>
        <div className=" my-20 ">
          <div className=" grid grid-cols-2 gap-10 ">
            <Fade left>
              <div className="">
                <div>
                  <div className="">
                    <p>Taste The New Spice</p>
                    <h2 className="text-2xl font-semibold mb-2">
                      New Release Books
                    </h2>
                  </div>
                  <hr />
                  <p className="flex items-center mb-3">
                    Consectetur adipisicing elit sed do eiusmod tempor
                    incididunt labore toloregna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamcoiars nisiuip commodo
                    consequat aute irure dolor in aprehenderit aveli esseati
                    cillum dolor fugiat nulla pariatur cepteur sint occaecat
                    cupidatat.
                  </p>
                </div>
                <div className="flex gap-5">
                  <button className="btn btn-primary">View All</button>
                  <button className="btn btn-outline btn-primary">
                    Read More
                  </button>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="grid grid-cols-2 gap-5">
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
                        <h3 className="text-xl font-semibold text-green-400">
                          $25.18
                        </h3>
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
                        <h3 className="text-xl font-semibold text-green-400">
                          $12.50
                        </h3>
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
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewReleaseBooks;
