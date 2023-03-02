import React from 'react';
import {AiOutlineSend} from 'react-icons/ai';


const Form = () => {
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);

  return (
    <div className='flex flex-col lg:px-2 ml-0 md:ml-3.5 mt-3.5 md:mt-0'>
        <form action="" method="POST" encType='application/x-www-form-urlencoded' className='grid grid-flow-row gap-6'>

            <div className='grid grid-flow-row lg:grid-flow-col gap-6'>

                <div className='form-input border border-solid rounded-lg'>
                    <label htmlFor="fname">Full Name</label>
                    <input type="text" name="fname"  id="" />
                </div>
                <div className='form-input border border-solid rounded-lg'>
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" name="phone"  id="" />
                </div>
            </div>

            <div className='form-input border border-solid rounded-lg'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email"  id="" />
            </div>

            <div className='form-input m-0 border border-solid rounded-lg'>
                <label htmlFor="message">Message</label>
                <textarea cols="0" rows="7" name="msg"  id="" />
            </div>

            <p className='text-blue-50'>We anticipate your meassages, feedback and enquireies...</p>

            <div className=''>
                <button type="submit" className='form-btn .btn-link border border-solid rounded-lg justify-center flex items-center border-transparent bg-blue-50 text-blue-600 px-8 py-3 text-base font-medium hover:text-white hover:bg-blue-600 hover:border hover:border-white transition-all duration-500 md:py-4 md:px-10 md:text-lg'>
                <span>Submit</span> 
                <AiOutlineSend className='ml-3 -rotate-45' />
                </button>
            </div>

        </form>

        
    </div>
  )
}

export default Form


