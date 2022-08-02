import React from 'react'
import { useState } from 'react'

const Home = () => {
  // write js code here.....
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [arr, setArr] = useState([fsfsdfdsfds])



  const ShowData = () => {
    let user = {
      email: email,
      password: password
    }
    setArr([...arr, user])


  }

  return (
    <div>
      {/* Write html code here.... */}

      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <input type="text" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={ShowData}>Show Data</button>

      <div>
        {
          arr.map((ele) => {
            return (
              <>
                <div>email : {ele.email} </div>
                <div>password : {ele.password} </div>
              </>
            )
          })

        }
      </div>
    </div>
  )
}

export default Home
