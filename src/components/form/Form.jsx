import React from 'react';
import {AiOutlineSend} from 'react-icons/ai';
import { useForm } from "react-hook-form";


// The following component is an example of your existing Input Component
// const Input = ({ label, register, required, type, name }) => (
//     <div className='form-input border border-solid rounded-lg'>
//         <label htmlFor="name">Name</label>
//         <input type="text" name="name" id=""  />
//         <label>{label}</label>
//         <input {...register(label, { required })} />
//     </div>

// );

// you can use React.forwardRef to pass the ref too
// const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
//     <>
//       <label>{label}</label>
//       <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
//         <option value="20">20</option>
//         <option value="30">30</option>
//       </select>
//     </>
// ));

const Form = () => {
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);

  return (
    <div className='flex flex-col lg:px-2'>
        <form action="" method="post" className='grid grid-flow-row gap-6'>

        <div className='grid grid-flow-row lg:grid-flow-col gap-6'>

            <div className='form-input border border-solid rounded-lg'>
                <label htmlFor="phone">Phone</label>
                <input type="tel" name="phone"  id="" />
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

        <p className='text-indigo-50'>We anticipate your meassages, feedback and enquireies</p>

        <div className=''>
            <button type="submit" className='form-btn .btn-link border border-solid rounded-lg justify-center flex items-center border-transparent bg-indigo-50 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg'>
            <span>Submit</span> 
            <AiOutlineSend className='ml-3' />
            </button>
        </div>

        </form>

        
    </div>
  )
}

export default Form