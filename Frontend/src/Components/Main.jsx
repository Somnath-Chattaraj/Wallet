import React, { useState } from 'react';
import bip39 from 'bip39';

const Main = () => {
    const [show,setShow] = useState(false);
    // const mnemonic = bip39.generateMnemonic(128)
    const mnemonic = 'seed sock milk update focus rotate barely fade car face mechanic mercy';
  return (
    <div className='w-full h-full p-10 bg-black flex justify-center'>
        <div className=' w-2/3  justify-center mt-10'>
            
            <p className='text-3xl md:text-7xl font-bold  text-white pt-3'>Web 3.0 Wallet</p>
            <p className='pt-2 text-xl text-gray-400 pl-2'>A personal web 3 based wallet</p>
            <div className='flex mt-10 justify-between'>
                <input
                    type="text"
                    placeholder='Enter your secret phrases or keep blank to generate a wallet'
                    className='p-2 mb-4 border border-gray-300 text-white w-full h-14 mr-3 pl-5 rounded bg-transparent'
                />
                <button
                    type="button"
                    className="text-gray-600 bg-gradient-to-r w-40 h-14 text-xl from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"
                >
                    Add Wallet
                </button>
            </div>
            
            <div>
                
            <div className='border-2 rounded-lg my-10 border-gray-500 p-5 flex justify-between'>
                <p className='text-3xl font-bold  text-white'>Current Secret Pairs</p>
            </div>
             <div className='flex justify-between'>
                <p className='text-white'></p>
             </div>   
            </div>

            <div className='flex justify-between'>

            <p className='text-3xl md:text-5xl text-white font-bold py-10'>Vault</p>
            <button type="button" className="focus:outline-none text-white bg-red-700 my-10 hover:bg-red-800 w-40 h-14  focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete Wallets</button>
            </div>
            <div className='border-2 border-gray-500 text-white rounded-xl'>
            <div className='border-b-2  border-gray-500 p-5 flex justify-between'>
                <p className='text-3xl font-bold '> Wallet 1</p>
                <svg xmlns="http://www.w3.org/2000/svg" className='text-red-600 w-6 cursor-pointer h-6 items-center' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>

            </div>
            <div className='p-5 bg-slate-900 rounded-xl'>

                <span className=' border-t-1 border-gray-400 w-full'></span>
                <p className='text-xl font-bold'>Public Key</p>
                <p className=' text-gray-400 pb-5'>fvndnbdnbknlglgn</p>

                <p className='text-xl font-bold'>Private Key</p>
                <div className='flex justify-between'>
                    {show ? <p className=' text-gray-400 pb-5'>fvbfjbvjbjbjdnbjbgbb</p> : <p className=' text-gray-400 pb-5'>•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••</p>}
                    {!show ? 

                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShow(!show)} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShow(!show)} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>

                    }
                </div>
                <p className='text-xl font-bold'>Secret Phrases</p>
                <p className=' text-gray-400 pb-5'>fvbfjbvjbjbjdnbjbgbb</p>
                <p className='text-xl font-bold'>Balance</p>
                <p className=' text-gray-400 text-xl pb-5'> $ 1</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Main;
