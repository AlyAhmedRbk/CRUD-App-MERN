import React, { useState } from 'react'
import DisplayTodo from './DisplayTodo';
import axios from 'axios';

const TodoForm = () => {

    const api = import.meta.env.VITE_API_URL;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');


    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const formData = {name, email, phone, gender};

        const res = await axios.post(api +'/add-user', {name, email, phone, gender});
        setName(' ')
        setEmail(' ')
        setPhone(' ')
        setGender(' ')
    }
 
  return (
    <>
        <form onSubmit={onSubmitHandler} className='flex items-center justify-center mt-10 flex-col gap-10'>
        <h1 className='text-3xl font-bold'>Create Your USER HERE</h1>

            <div className='flex flex-col gap-5'>
                <input required type="text" className='border-2 border-black w-[120%] px-2 py-1.5' placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input required type="email" className='border-2 border-black w-[120%] px-2 py-1.5' placeholder='Enter Your Email' valu={email} onChange={(e) => setEmail(e.target.value)} />
                <input required type="number" className='border-2 border-black w-[120%] px-2 py-1.5' placeholder='Enter Your Age' valu={phone} onChange={(e) => setPhone(e.target.value)} />
                <input required type="text" className='border-2 border-black w-[120%] px-2 py-1.5' placeholder='Enter Your Gender' valu={gender} onChange={(e) => setGender(e.target.value)} />

                <button type='submit' className='bg-black text-white w-[120%] font-semibold py-1.5'>Submit</button>
            </div>
        </form>

        <DisplayTodo />        
    </>
  )
}

export default TodoForm