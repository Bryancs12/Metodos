import React from "react";

export const Card = ({title, content}) =>{

    return(
        <div className='container mx-auto bg-gray-100 rounded-xl p-4'>
            <div className='text-center text-3xl italic pb-2'>
                {title}
            </div>

            <div className='text-sm indent-4'>
                {content}
            </div>
        </div>
        )
}