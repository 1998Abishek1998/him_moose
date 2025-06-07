import React, { useCallback, useState } from 'react';
import CustomModel from '../components/customInputs/Model';
import CustomButton from '../components/customInputs/CustomButton';
import { CreateUserForm } from '../components/form/CreateUser.form';

export interface User {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'inactive';
}

const Users: React.FC = () => {
  const users = [] as unknown as User[]
  const [modelOpen, setModelOpen] = useState(false)

  const handleModelOpen = useCallback(() => {
    setModelOpen(!modelOpen)
  }, [modelOpen])

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-semibold text-gray-800">Users</h1>
        <CustomButton type='pmy' onClick={handleModelOpen}>
          + Add User
        </CustomButton>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                    {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex space-x-2">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm">
                      Edit
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {
        modelOpen && (
          <CustomModel footerActive={false} handleClose={handleModelOpen} handleModelOpen={handleModelOpen} handleSave={handleModelOpen} saveText='Save' closeText='Close' title='Add User'>
            <CreateUserForm closeForm={handleModelOpen} />
          </CustomModel>
        )
      }

    </div>
  );
};

export default Users;