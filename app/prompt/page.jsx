"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@/components/Form";


const PromptPage = () => {
  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  const createPrompt = async (e) => {

  }

  return (
    <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center mt-8">
    <Form
    type='Create'
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit={createPrompt}
  />
  </div>
  </div>

  )
}

export default PromptPage