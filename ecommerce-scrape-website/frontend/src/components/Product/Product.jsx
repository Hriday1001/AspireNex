import './index.scss'

import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { Link , useNavigate } from 'react-router-dom';
import Loader from "react-loaders";
import { getRecommendation } from '../../store/productSlice';

function Product() {
    const product = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const API_URL = import.meta.env.VITE_OPENAI_API_URL;
    const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

    const handleButton = async (event) => {

        try {
            // Fetch the response from the OpenAI API with the signal from AbortController
            const response = await fetch(API_URL, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_KEY}`,
              },
              body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: `Do you recommend buying this product based on the use cases : \n ${product.details.useCasePoints} \n The ratings : ${product.details.ratings} and the no of users who have reviewed being : ${product.details.no_of_reviews} \n , if you recommend , start the review with a Yes , else start it with a no`  }],
              }),
            });
        
            const data = await response.json();
            console.log(data.choices[0].message.content);
            dispatch(getRecommendation(data.choices[0].message.content))
            navigate('/recommendation');
            
            // resultText.innerHTML = data.choices[0].message.content;
            // return data.choices[0].message.content;

          } catch (error) {
            console.error("Error:", error);
            console.log("Error occurred while generating.");
          }

    }

  return (
    <>
    <Link href={`/products/${product.id}`} className="product-card">
      <div className="product-card_img-container">
        <img
          src={product.details.image_url}
          alt={product.details.title}
          width={200}
          height={200}
          className="product-card_img"
        />
      </div>

      <div className="product-details">
        <h3 className="product-title">{product.details.title}</h3>

        <div className="flex justify-between">
          <p className="text-white opacity-50 text-lg capitalize">
            {product.details.category}
          </p>

          <p className="text-white text-lg font-semibold">
            <span>{product?.details.currency}</span>
            <span>{product?.details.price}</span>
          </p>
        </div>
      </div>

      <div className="button">
        <button onClick={handleButton}>Still Confused ? Let me help you</button>
      </div>
    </Link>
    <Loader type='pacman'></Loader>
    </>
  )
}

export default Product
