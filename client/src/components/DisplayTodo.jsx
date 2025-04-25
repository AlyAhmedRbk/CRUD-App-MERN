import React, { useEffect, useState } from 'react'
import axios from 'axios';

const DisplayTodo = () => {

    const api = import.meta.env.VITE_API_URL;
    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        const {data} = await axios.get(api+"/all-users");
        setUsers(data.userData);
    }

    useEffect(() => {
        fetchData();
    })

    const handleDelete = async (id) => {
        const data = await axios.delete(api+`/remove-user/${id}`)
        fetchData()
    }

  return (
    <div>
<div className="relative overflow-x-auto flex items-center justify-center mt-10">
    <table className="w-[50%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone
                </th>
                <th scope="col" className="px-6 py-3">
                    Gender
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user, index) => {
                    return(
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {user.name}
                            </th>
                            <td className="px-6 py-4">
                                {user.email}
                            </td>
                            <td className="px-6 py-4">
                                {user.phone}
                            </td>
                            <td className="px-6 py-4">
                                {user.gender}
                            </td>
                            <td className='flex gap-2 items-center justify-center'>
                                <button onClick={() => handleDelete(user._id)} className='bg-red-600 text-white px-2 py-1 font-semibold mt-3'>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
</div>

    </div>
  )
}

export default DisplayTodo