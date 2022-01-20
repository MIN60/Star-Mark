import React from "react";

export default function SingleReview({review}){
    return(
        <div className='review'>
            <div className='myReviewItem'>{review.title}</div>
        </div>
    )
}