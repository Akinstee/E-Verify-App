import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WorkerDetails = () => {
  const [tab, setTab] = useState('address');
  const [formData, setFormData] = useState({
    address: '',
    lga: '',
    state: '',
    country: '',
    company_user: '',
    user_phone: '',
    user_email: '',
    gender: '',
    user_position: '',
    user_address: '',
    school: '',
    school_state: '',
    degree: '',
    course: '',
    start_year: '',
    end_year: '',
    still_schooling: false,
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/worker-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert('Worker details saved successfully');
        navigate('/dashboard');
      } else {
        const errorData = await response.json();
        alert('Error: ' + errorData.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] flex flex-row items-center justify-center max-w-[100vw] overflow-x-hidden">
      <form onSubmit={handleSubmit} className="w-[90%] lg:w-6/12 p-6 lg:p-12 bg-white rounded-md shadow-md">
        {tab === 'address' && (
          <>
            <h1 className="text-2xl mb-6">Address</h1>
            <div className="flex flex-col gap-4">
              <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="border bg-white border-gray-300 rounded-md px-4 py-2" />
              <input name="lga" value={formData.lga} onChange={handleChange} placeholder="LGA" className="border bg-white border-gray-300 rounded-md px-4 py-2" />
              <input name="state" value={formData.state} onChange={handleChange} placeholder="State" className="border bg-white border-gray-300 rounded-md px-4 py-2" />
              <input name="country" value={formData.country} onChange={handleChange} placeholder="Country" className="border bg-white border-gray-300 rounded-md px-4 py-2" />
              <button type="button" onClick={() => setTab('admin')} className=" bg-red-400 text-white py-2 rounded-md">Next</button>
            </div>
          </>
        )}

        {tab === 'admin' && (
          <>
            <h1 className="text-2xl mb-6">Company Admin User</h1>
            <div className="flex flex-col gap-4">
              <input name="company_user" value={formData.company_user} onChange={handleChange} placeholder="Company User" className="border bg-white border-gray-300 rounded-md px-4 py-2" />
              <input name="user_phone" value={formData.user_phone} onChange={handleChange} placeholder="User Phone" className="border bg-white border-gray-300 rounded-md px-4 py-2" />
              <input name="user_email" value={formData.user_email} onChange={handleChange} placeholder="User Email" className="border bg-white border-gray-300 rounded-md px-4 py-2" />
              <input name="gender" value={formData.gender} onChange={handleChange} placeholder="Gender" className="border bg-white border-gray-300 rounded-md px-4 py-2" />
              <input name="user_position" value={formData.user_position} onChange={handleChange} placeholder="User Position" className="border bg-white border-gray-300 rounded-md px-4 py-2" />
              <input name="user_address" value={formData.user_address} onChange={handleChange} placeholder="User Address" className="border bg-white border-gray-300 rounded-md px-4 py-2" />
              <button type="button" onClick={() => setTab('education')} className=" bg-red-400 text-white py-2 rounded-md">Next</button>
            </div>
          </>
        )}

        {tab === 'education' && (
          <>
            <h1 className="text-2xl mb-6">Education</h1>
            <div className="flex flex-col gap-4">
              <input name="school" value={formData.school} onChange={handleChange} placeholder="School" className="border bg-white border-gray-300 rounded-md px-4 py-2" />
              <input name="school_state" value={formData.school_state} onChange={handleChange} placeholder="School State" className="border bg-white border-gray-300 rounded-md px-4 py-2" />
              <input name="degree" value={formData.degree} onChange={handleChange} placeholder="Degree" className="border bg-white border-gray-300 rounded-md px-4 py-2" />
              <input name="course" value={formData.course} onChange={handleChange} placeholder="Course" className="border bg-white border-gray-300 rounded-md px-4 py-2" />
              <input name="start_year" value={formData.start_year} onChange={handleChange} placeholder="Start Year" className="border bg-white border-gray-300 rounded-md px-4 py-2" />
              <input name="end_year" value={formData.end_year} onChange={handleChange} placeholder="End Year" className="border bg-white border-gray-300 rounded-md px-4 py-2" />
              <div className="flex items-center">
                <input type="checkbox" name="still_schooling" checked={formData.still_schooling} onChange={handleChange} className="mr-2" />
                <label>I am still schooling here</label>
              </div>
              <button type="submit" className=" bg-red-400 text-white py-2 rounded-md">Submit</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default WorkerDetails;
