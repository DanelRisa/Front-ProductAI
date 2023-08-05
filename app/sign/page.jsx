'use client'
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from "next/link";

const Page = () => {

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfPasswordChange = (event) => {
    setConfPassword(event.target.value);
  };


  async function registerUser() {
    if (password != '' && password === confPassword) {
      try {
        const userData = {
          email: email,
          password: password,
        };

        const response = await axios.post('https://fastapi-z5dp.onrender.com/auth/users/', userData);

        console.log('User registered successfully:', response.data);
        return (
          <Link href="/login">
            <a>Continue to login</a>
          </Link>
        );

      } catch (error) {
        console.error('Error registering user:', error.message);
      }
    } else {
      window.alert("Wrong password!!!")
    }
  }
  return (
    <section className="mt-10 mb-40">
      <div className="flex flex-col items-center justify-center sm:p-8 mx-auto max-h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-zinc-50 dark:border-zinc-300">
          <div className="p-6 space-y-2 sm:space-y-4">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
              Создать аккаунт
            </h1>
            <form className="space-y-2 sm:space-y-4" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Твой email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-zinc-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-orange-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Пароль</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-zinc-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-orange-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Подтвердить пароль</label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-orange-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={confPassword}
                  onChange={handleConfPasswordChange}
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-black rounded focus:ring-3 focus:ring-primary-300 dark:black dark:border-black dark:focus:ring-primary-600 dark:ring-offset-black" required />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-black dark:text-gray-800">Я принимаю <a className="font-medium text-primary-900 hover:underline dark:text-primary-600" href="#">Условия и положения</a></label>
                </div>
              </div>
              <button type="submit" className="w-full text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-primary-800" onClick={registerUser}>Принять</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-800">
                Уже есть аккаунт? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500" > <Link href='/login'>Войти</Link></a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;