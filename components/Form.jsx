"use client";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { useState } from "react";


const Form = () => {
  const [post, setPost] = useState({ prompt: "" });

  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='orange_gradient'>Что готовим сегодня?</span>
      </h1>
      <p className='desc text-left max-w-md'>
        Персонализированный поиск выгодных предложений и кулинарных рецептов - все в одном месте!
      </p>
      <form
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Твой запрос
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Напиши блюдо. Например: манты'
            required
            className='form_textarea '
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Отмена
          </Link>

          <Link href={{ pathname: "/category", query: { name: post.prompt }  }}>
            <CustomButton
              title="Поехали"
              btnType="button"
              containerStyles="px-5 py-1.5 text-sm text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-otage-600 shadow-lg shadow-orange-400/40 dark:shadow-lg dark:shadow-orange-500/50 text-center rounded-full"  
            />
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Form;