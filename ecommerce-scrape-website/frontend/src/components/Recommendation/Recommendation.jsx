import React from 'react'
import {useSelector} from 'react-redux';

function Recommendation() {
    const product = useSelector((state) => state.product);
    const decision = product.recommendation.split(',')[0];
  return (
    <div>

        <h1 className={`${decision == "Yes" ? "bg-green-400" : "bg-red-500"}`}>{product.recommendation}</h1>

    </div>
  )
}

export default Recommendation
