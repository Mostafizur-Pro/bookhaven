import React from 'react';

const BestSellingBooks = () => {
    return (
        <div className='my-5'>
            <div>
                <p>People's Choise</p>
                <h2 className='text-2xl'>Best Selling Books</h2>
            </div>
            <hr/>
            <section>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
            </section>
        </div>
    );
};

export default BestSellingBooks;