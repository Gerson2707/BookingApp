import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import UserLogged from "../components/LoginPage/UserLogged.jsx"
import { useState } from "react"


const LoginPage = () => {
  const {register, handleSubmit, reset} = useForm()

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const {loginUser} = useAuth()

  const submit = data => {
    loginUser(data)
    reset({
      email: '',
      password: ''
    })
  }
if(localStorage.getItem('token')){
  return <UserLogged user={user} setUser={setUser}/>
}

  return (
    <div>
    <form onSubmit={handleSubmit(submit)}>
      <label>
        <span>Email</span>
        <input {...register('email')}  type="email" />
      </label>
      <label>
        <span>Password</span>
        <input  {...register('password')} type="password" />
      </label>
      <button>Submit</button>
    </form>
  </div>
  )
}
export default LoginPage