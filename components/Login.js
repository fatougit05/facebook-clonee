import Image from "next/image"
import logo from '../components/facebooklogo.png';
import { signIn } from "next-auth/react";
function Login() {
  return (
    <div className="grid place-items-center">

    <Image src={logo} height={160}
    width={160}
  objectFit="contain"
    />
    <h1 onClick={signIn} className="p-5 mt-20 text-white bg-blue-500 rounded-full cursor-pointer tex30t-center ">Login with Facebook</h1>
    </div>
  )
}

export default Login