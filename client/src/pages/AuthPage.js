import React, {useState} from 'react'
import {useHttp} from "../hooks/http.hook";

export const AuthPage = () => {
    const {loading, request} = useHttp()
    const [form, setForm] = useState({
        email:'', password:''
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler =  async () => {
        try {
          const data = await request('/api/auth/register', 'POST', {...form})
            console.log('Data', data)
        } catch (e) {}
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Shorten link</h1>
                <div className="card grey darken-3" style={{borderRadius: 4}}>
                    <div className="card-content white-text">
                        <span className="card-title">Authorization</span>
                        <div>

                            <div className="input-field">
                                <input
                                    placeholder="Enter email"
                                    id="email"
                                    type="text"
                                    name="email"
                                    className="yellow-input"
                                    onChange={changeHandler}
                                />
                                    <label htmlFor="email">Email</label>
                            </div>


                            <div className="input-field">
                                <input
                                    placeholder="Enter password"
                                    id="password"
                                    type="password"
                                    name="password"
                                    className="yellow-input"
                                    onChange={changeHandler}

                                />
                                <label htmlFor="email">Password</label>
                            </div>

                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className="btn red darken-1"
                            style={{marginRight: 10}}
                            disabled={loading}
                        >Login
                        </button>
                        <button
                            className="btn green darken-1"
                            onClick={registerHandler}
                            disabled={loading}

                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}