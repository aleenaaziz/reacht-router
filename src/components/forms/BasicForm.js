import React from 'react'
import { useState } from 'react'

const BasicForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [allEntry, setAllEntry] = useState([]);
    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = {email: email, password:password }
        setAllEntry([...allEntry, newEntry]); 
    }
  
    return (
    <>
      <form action='' onSubmit={submitForm}>
        <div>
            <label htmlFor="email">Name</label>
            <input type="text" name="email" autoComplete='off' value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password"autoComplete='off' value={password} 
            onChange={(e) => setPassword(e.target.value)}
            />
            
        </div>

        <button type='submit'> Login</button>
         </form>
         <div>
            {
                allEntry.map((curElm) => {
                    return (
                        <div>
                    <p>{curElm.email}</p>
                    <p>{curElm.password}</p>
                    </div>
                    )
                })
            }
         </div>
    </>
  )
}

export default BasicForm
