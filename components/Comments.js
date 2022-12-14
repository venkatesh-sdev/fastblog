import React from 'react'

const Comments = () => {
  return (
    <div className='mx-auto p-5'>
      <hr className='w-72 sm:w-[600px] bg-skin-bgColor h-1 mx-auto' />

      <h1 className='text-4xl font-bold text-center p-5'>Leave your Comments Below !</h1>
      <form className='p-5'>
        <div className="mb-6 ">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
          <input type="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-72 sm:w-[600px] p-2.5 " placeholder="Venkatesh" required />
        </div>
        <div className="mb-6 ">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-[300px] sm:w-[600px] p-2.5 " placeholder="test@gmail.com" required />
        </div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Your Comments</label>
        <textarea id="message" rows="4" className="block p-2.5 w-72 sm:w-[600px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  " placeholder="Leave a comment..."></textarea>
        <button type="submit" className="text-white bg-skin-bgColor hover:bg-skin-hoverColor font-medium rounded-lg text-sm w-[300px] sm:w-auto px-5 py-2.5 text-center my-5 transition duration-500">Submit</button>
      </form>
    </div>
  )
}

export default Comments