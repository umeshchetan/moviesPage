import React, { useState } from 'react';
import './LoginComp.css';
import HomeComp from './HomeComp';

export default function LoginComp() {
    const [login, setIsLogin] = useState(false)

    const [formdata, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        // console.log(e.target.value)
        const { name, value } = e.target
        setFormData({ ...formdata, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        validate(formdata)

        // console.log(formdata)
    }

    const validate = (data) => {
        if (data.email == '') {
            alert('Please fill email field')
        } else if (data.password == '') {
            alert('Please enter password')
        } else {

            return setIsLogin(true)
            
        }
    }
    return (
        <div className='container-fluid login back'>
            <div className='container d-flex align-items-center flex-column'>
                <div className='sign d-flex align-items-center flex-column'>
                    <div className='logHeading'>
                        <h1>Welcome</h1>
                        <p>Sign in using</p>
                    </div>
                    <div>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className='emailSec'>
                                <label>Email</label> <br />
                                <input type='email' name='email' onChange={(e) => handleChange(e)} />
                            </div>
                            <div className='passSec'>
                                <label>Password</label> <br />
                                <input type='password' name='password' onChange={(e) => handleChange(e)} />
                            </div>

                            <div className='checkSec d-flex align-items-center justify-content-between'>
                                <div>
                                    <input type='checkbox' />
                                    <label className='check'>Remember me</label>
                                </div>
                                <div>
                                    <h1 className='pass'>Reset Password</h1>
                                </div>
                            </div>
                            <div className='contBb'>
                                <input type='submit' className='contBtn' value='Continue' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {login ? <HomeComp formdata={formdata} /> : ''}
        </div>
    )
}
