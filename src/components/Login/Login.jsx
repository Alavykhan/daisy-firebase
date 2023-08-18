import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const {signInUser} = useContext(AuthContext);

    const handleLogin= event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password= form.password.value;
        console.log(email, password)

        signInUser(email, password)
        .then(result=>{
            const signIn = result.user;
            console.log(signIn);
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                <h1 className="text-5xl font-bold my-3">Please Login!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                    <label className="label">
                        <a href="#" className="text-sm link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                    <Link to='/register'><label className="label">
                        <span href="#" className="text-sm link link-hover">Don't have an account? Please Register</span>
                    </label></Link>
                </form>
                
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;