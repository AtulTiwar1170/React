

import { useEffect, useState } from 'react'


function App() {
  const [apidata, setApidata] = useState([])
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => setApidata(data))  
  }, []);

  
  
  return (
    <div className='px-40 py-20 space-y-5'>
      <h1 className='text-3xl text-blue-500 font-bold'>Comment with email</h1>
        {
          apidata.map( comments => {
            return <div className='px-5 py-3 bg-zinc-100 rounded-lg' key={comments.id}>
              <h4>Name : {comments.name}</h4>
              <h4>Email : {comments.email}</h4>
              <h4>Comment : {comments.body}</h4>
            </div>
          })
        }
    </div>
  )
}

export default App
