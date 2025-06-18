import React, { useState } from 'react'
import { Form, Link, useNavigate } from 'react-router-dom'
import {Button,Input,Logo} from './index'
import {login as authLogin} from '../store/authSlice'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'
function Singin() {
    const [error , setError] = useState("")
    const [register,handelSubmit] = useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const singin = async(data) =>{
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentSession()
                if (userData) {
                    dispatch(login(data))
                }
                navigate("/")
                
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handelSubmit(singin)}>
                    <div className='space-y-5'>

                        <Input 
                        label = "Full Name"
                        type = "text"
                        placeholder = "Enter your name "
                        {...register ("name", {required:true})}
                        />
                        <Input
                            label = "Email: "
                            placeholder = "Enter Your Email "
                            type= "email"
                            {...register ("email" , {required: true , validate: {matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||"Email address must be a valid address",}})}/>
                        <Input 
                            label = "password"
                            type = "password"
                            placeholder = "Enter your password"
                            {...register ("password", {required : true})}/>
                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>
    </div>

  )
}

export default Singin
