import React from "react";

export const JosephCard = ({content}) =>{
    return (
        <div className='sm:pl-8'>
            <figure className=' rounded-xl grid grid-cols-2'>
                <blockquote className='sm:pt-8'>
                    <p className="text-base font-medium pt-8 sm:text-center sm:pl-4 sm:pr-2">
                        {content}
                    </p>
                </blockquote>
                <img className='rounded-3xl' src={require('../../img/Raphson.jpg')}/>
                <div className="pt-6 text-center space-y-4">

                </div>
            </figure>
        </div>
    )
}