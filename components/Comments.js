import { list } from 'postcss';
import React from 'react'

import { useForm, SubmitHandler, UseFormProps } from 'react-hook-form'

const Comments = ({ post }) => {

  const { register, handleSubmit, formState: {
    errors,
  } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className='mx-auto p-5'>
      <hr className='w-72 sm:w-[600px] bg-skin-bgColor h-1 mx-auto' />

      <h1 className='text-4xl font-bold text-center p-5'>Leave your Comments Below !</h1>
      <form className='p-5' onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" {...register('_id')} name='_id' value={post._id} />
        <div className="mb-6 ">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
          <input type="name"
            {...register('name', { required: true })}
            id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-72 sm:w-[600px] p-2.5 " placeholder="Venkatesh" />
          {errors.name && (<p className='text-red-500 text-left'>Name is required</p>)}
        </div>
        <div className="mb-6 ">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
          <input type="email"   {...register('email', { required: true })} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-[300px] sm:w-[600px] p-2.5 " placeholder="test@gmail.com" />
          {errors.email && (<p className='text-red-500 text-left'>Email is required</p>)}
        </div>
        <textarea id="message" rows="4"   {...register('comments', { required: true })} className="block p-2.5 w-72 sm:w-[600px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  " placeholder="Leave a comment..."></textarea>
        {errors.comments && (<p className='text-red-500 text-left'>Comments is required</p>)}

        <button type="submit" className="text-white bg-skin-bgColor hover:bg-skin-hoverColor font-medium rounded-lg text-sm w-[300px] sm:w-auto px-5 py-2.5 text-center my-5 transition duration-500">Submit</button>
      </form>
    </div>
  )
}

export default Comments