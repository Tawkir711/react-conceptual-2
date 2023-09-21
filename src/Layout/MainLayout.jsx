import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';

const MainLayout = () => {
  return (
    <div>
      <section className="flex justify-between px-10 shadow py-7">
        <div>
          <h1 className="text-3xl font-bold">Amazon</h1>
        </div>
        <nav>
          <ul className="flex gap-5">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400" : ""
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/messages"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400" : ""
              }
            >
              <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-green-400" : ""
                }
              >
                Products
              </NavLink>
            </NavLink>

            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Dashboard
            </NavLink>
          </ul>
        </nav>
      </section>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;