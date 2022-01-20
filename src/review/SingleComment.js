import React from "react";

export default function SingleComment({comment}){
    return(
        <div className='comment'>
            <div className='writer'>{comment.writer}</div>
            <div className='date'>{comment.date}</div>
            <div className='content'>{comment.content}</div>
        </div>
    )
}