import React from 'react'

const Login = () => {
    return (
        <div className="container">
             <form action="">
               <label htmlFor="email">Email</label>
               <input type="email" name="email" id=""/>

               <label htmlFor="password">Password</label>
               <input type="password" name="password" id=""/>
               <button type="submit">Login</button>
             </form>
        </div>
    )
}

export default Login
