// import pic from './../src/img/LOGO.png'
import pic from '../img/LOGO.png'
import * as React from "react";

export default function Form() {
    return (
        <div className="bg-white px-10 py-10 rounded sm:w-full mr-10">
            <div className='flex justify-center'>
                <img src={pic} alt="xepals-logo" className='lg:hidden'/>
            </div>
            <h1 className="text-4xl font-bold mb-8 text-center">WELCOME BACK!</h1>
            <p className="font-medium text-lg text-gray-800">Login in to your account</p>
            <div className="mt-8">
                <div>
                    <label className="text-lg font-medium">Email/phone number</label>
                    <input
                        className="w-full border-2 border-gray-100 border-none outline-sky-800 rounded-xl p-4 mt-1 bg-gray-100"
                        placeholder="Enter your email or number"
                    />
                </div>
                <div>
                    <label className="text-lg font-medium">Password</label>
                    <input
                        className="w-full border-2 border-gray-100 border-none outline-sky-800 rounded-xl p-4 mt-1 bg-gray-100"
                        placeholder="Enter your password"
                        type="password"
                    />
                </div>
                <div className="mt-8 flex justify-between items-center">
                    <div>
                        <input
                            type="checkbox"
                            id="remember"
                        />
                        <label className="ml-2 font-medium text-base" for="remember">Remember for 30 days</label>
                    </div>
                    <button className="font-medium text-base text-sky-800">Forgot password?</button>
                </div>
                <div className="mt-8 flex flex-col gap-y-4">
                    <button className="active:scale-[.98] hover:scale-[1.01] ease-in-out py-3 rounded bg-sky-800 shadow-lg text-white text-lg font-bold">Login</button>
                </div>
                <div className="mt-8 flex justify-center items-center">
                    <p className="font-medium text-base">Don't have an account?</p>
                    <button className="text-sky-800 text-base font-medium ml-2">Create Account</button>
                </div>
            </div>
        </div>
    )
}
