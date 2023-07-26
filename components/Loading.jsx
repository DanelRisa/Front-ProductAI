import React from 'react'

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin w-16 h-16 border-4 border-current border-t-transparent text-orange-600 rounded-full" role="status" aria-label="loading">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Loading