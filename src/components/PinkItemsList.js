import React, { useState, useEffect } from 'react';

function PinkItemList({ price, image_link, title }) {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const [overallNumber, setOverallNumber] = useState(0);

    const addOne = (e) => {

        setCount(count + 1)
        setOverallNumber(count * price)
    }

    const minOne = (e) => {
        setCount(count - 1)
        setOverallNumber(count * price)
    }

    // useEffect(() => {
    //     addOne()
    //   })

    return (
        <div className="col">
        <section>
          <img src={image_link} alt={title}/>
        </section>
        <p>{title}</p>
        {/*<p>total price {overallNumber}</p>*/}
      <p>the price is {overallNumber}</p>
      <button className="remove-btn" onClick={() => minOne()}>
        {count}
      </button>
      <p className="price-item">€ {price}</p>
      <button className="add-btn" onClick={() => addOne()}>
        {count}
      </button>
    </div>
    );

}

export default PinkItemList