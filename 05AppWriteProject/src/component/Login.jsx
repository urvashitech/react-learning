import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Button,Input,Logo} from './index'
import {login as authLogin} from '../store/authSlice'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'
function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error , setError] = useState()
    const {register,handelSubmit} = useForm()
    const login = async (data)=>{
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default Login
