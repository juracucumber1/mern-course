import React from 'react'

export const AuthPage = () => {
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

                                />
                                <label htmlFor="email">Password</label>
                            </div>

                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn red darken-1" style={{marginRight: 10}}>Sign in</button>
                        <button className="btn green darken-1">registration</button>
                    </div>
                </div>
            </div>
        </div>
    )
}