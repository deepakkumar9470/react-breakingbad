import React,{useState, useEffect} from 'react'
import '../App'
const SignUp = () => {
    const [name, setName] =  useState('')
    const [email, setEmail] =  useState('')
    const [password, setPassword] =  useState('')
    return (
        <div className='container form-div'>
        <form className='form-div'>
        <div class="form-group mt-5">
          <label for="name">Name</label>
          <input type="text" class="form-control" value={name} id="name" placeholder="Enter name"/>
         </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control"  value={email} id="email" placeholder="Enter email"/>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" value={password}  id="password" placeholder="Enter password"/>
        </div>
           <button type="submit" class="btn btn-primary">Submit</button>
      </form>
        </div>
    )
}

export default SignUp
