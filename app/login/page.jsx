"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const [username, setUsernamel] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState('');

  const handleEmailChange = (event) => {
    setUsernamel(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoggedIn(true);
  };

  if (loggedIn) {
    return <p>You are already signed in!</p>;
  }

  async function authorizeUser(event) {
    event.preventDefault();
    try {
      const userData = new URLSearchParams();
      userData.append('grant_type', 'password');
      userData.append('username', username);
      userData.append('password', password); 

      const response = await axios.post('http://localhost:8000/auth/users/tokens', userData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      
      console.log('Authorization successful. Access Token:', response.data.access_token);
      if(response.status === 200) {
        localStorage.setItem('token', response.data.access_token);
        router.push('/prompt');
      }
    } catch (error) {
      console.error('Authorization error:', error.message);
    }
  }

  return (
    <section className="bg-gray-100 dark:bg-gray-50 m-30">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-100 dark:border-gray-300">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  value={username}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={password}
                  placeholder="••••••••"
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
              </div>
              <button type="submit" className="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-primary-800" onClick={authorizeUser}>Submit</button>
<p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500"><Link href ='/sign'>Sign up</Link></a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;