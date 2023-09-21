import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className='flex gap-5'>
      <div className='w-[20%] bg-red-500'>
        <ul>
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link to={"/dashboard/profile"}>Profile</Link>
          </li>
          <li>
            <Link to={"/dashboard/editProfile"}>EditProfile</Link>
          </li>
        </ul>
      </div>
      <div className='w-[80%]'>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;