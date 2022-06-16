import React from "react";

export const IsaacCard = ({content}) =>{
    return (
        <div className='pb-4 sm:pr-8'>
            <figure className=' rounded-xl grid grid-cols-2'>
                <img className='rounded-3xl '
                     src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/220px-GodfreyKneller-IsaacNewton-1689.jpg'/>
                <div className="pt-6 text-center space-y-4">
                    <blockquote>
                        <p className="text-base font-medium pt-8 sm:pr-8">
                            {content}
                        </p>
                    </blockquote>
                </div>
            </figure>
        </div>
    )
}