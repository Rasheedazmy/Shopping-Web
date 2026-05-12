import React , {useContext, useEffect, useState} from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';



export default function Login() {
  let navigate = useNavigate();
  let { setUserLogin } =useContext(UserContext);

  const [apiError, setapiError] = useState('');
  const [isLoading, setisLoading] = useState(false)

 function handleLogin(formValues){
  setisLoading(true);
  axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, formValues)
  .then( (apiResponse) => {
    if (apiResponse?.data?.message === 'success')
      {
        localStorage.setItem('userToken',apiResponse.data.token)
        setUserLogin(apiResponse.data.token)
      navigate('/');
      setisLoading(false);
      console.log(x);
    }
      
    
  })
  .catch( (apiResponse) => {
    setisLoading(false);

    setapiError(apiResponse?.response?.data?.message);
    //console.log(apiResponse?.response?.data?.message);
   })  
   console.log(formValues);
   
   
}

  let ValidationSchema = Yup.object().shape({
    email:Yup.string().email('email is invalid').required('email is required'),
    password:Yup.string().matches(/^[A-Z][a-z]{5,10}$/ ,'Password must start with uppercase vaild egyption number ').required('password is required'),


  })

    let formik = useFormik({
      initialValues: {
          email: '',
          password: '',
      },
      ValidationSchema,
      onSubmit:handleLogin
  })

    
  return (

      <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-xl shadow-md">

      {apiError ? <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
        {apiError}
      </div> :null}


      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

         <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
      
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="p-3 border rounded"
        required
        onBlur={formik.handleBlur}
        value={formik.values.email}
        onChange={formik.handleChange}
      />

{formik.errors.email && formik.touched.email? <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
  {formik.errors.email}
</div>:null}

      <input
        type="password"
        name="password"
        placeholder="Password"
        className="p-3 border rounded"
        required
        onBlur={formik.handleBlur}
        value={formik.values.password}
        onChange={formik.handleChange}
      />

      <div className="flex items-center">
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-3 rounded hover:bg-green-700 transition"
      >
        {isLoading?<i className='fas fa-spinner fa-spin'></i>:'Login'}
        
        
      </button>
      <p className='pl-4'>didn't have account yet ? <span className='font-semibold'><Link to={'/register'}>Register now</Link></span></p>
      </div>
      
    </form>
  </div>
  )
}
