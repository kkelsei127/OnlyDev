import Navigation from '../Navbar/Navbar';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { QUERY_USER } from '../../utils/queries';
import Auth from '../../context/authContext';

export default function Profile() {
   
    const [usernamed, setUsername] = useState('');
    useEffect(() => {
      let useri = Auth.getProfile()
      console.log(useri)
      if (useri){
        setUsername(useri.data.username);
      }
    });
    const { data, loading, error } = useQuery(QUERY_USER, {variables: {username: usernamed}});
    console.log(data)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;
    if (data) {
        console.log(data.user)
    }
 
  
    return (
        <div className='bg-slate-200'>
            <Navigation />
                {data ? (
                    
                   <div className='flex items-center justify-center min-h-screen p-2 bg-slate-200'>
                    <div className="relative w-full group max-w-md min-w-0 mx-auto mt-16 mb-6 break-words bg-white border shadow-2xl dark:bg-gray-800 dark:border-gray-700 md:max-w-xl rounded-xl">
                        <div className="pb-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="flex justify-center ">
                                    <div className="relative">
                                        <img alt='placeholder' src="../assets/default-user.png" className="dark:shadow-xl border-white dark:border-gray-800 rounded-full align-middle border-8 absolute -m-16 -ml-18 lg:-ml-16 max-w-[150px]" />
                                    </div>
                                </div>
                            </div>
                        
                            <div className=" mt-20 text-center ">
                                <h3 className="mb-1 text-2xl font-bold leading-normal text-gray-700 dark:text-gray-300 fullName">{data.firstName} {data.lastName}</h3>
                                <div className="flex flex-row justify-center w-full mx-auto space-x-2 text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                                    </svg>
                                    <p className="mb-4 font-light leading-relaxed text-gray-600 dark:text-gray-400 skillz">
                                    {!data.location ? (<div>No location Added</div>) :(data.location)}
                                        </p>
                                    <div className="font-bold tracking-wide text-gray-600 dark:text-gray-300 font-mono text-xl loc-title"></div>  
                                </div>
                            </div>
                            <>
                                <>
                                <div className="pt-6 mx-6 mt-6 text-center border-t border-gray-200 dark:border-gray-700/50">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full px-6">
                                            <h3 className="mb-1 text-2xl font-bold leading-normal text-gray-700 dark:text-gray-300">Qualifications</h3>
                                            <p className="mb-4 font-light leading-relaxed text-gray-600 dark:text-gray-400 skills">
                                            {!data.skills ? (<div>No Skills Added</div>) :(data.skills)}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 mx-6 mt-6 text-center border-t border-gray-200 dark:border-gray-700/50">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full px-6">
                                            <h3 className="mb-1 text-2xl font-bold leading-normal text-gray-700 dark:text-gray-300 ">JobTitle</h3>
                                            <p className="mb-4 font-light leading-relaxed text-gray-600 dark:text-gray-400 publications">
                                            {!data.jobTitle ? (<div>No Job Added</div>) :(data.jobTitle)}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 mx-6 mt-6 text-center border-t border-gray-200 dark:border-gray-700/50">
                                    <div className="w-full px-6">
                                        <h3 className="mb-1 text-2xl font-bold leading-normal text-gray-700 dark:text-gray-300">Contact</h3>
                                        <p className="mb-4 font-light leading-relaxed text-gray-600 dark:text-gray-400 contact">
                                        {!data.contact ? (<div>No Contact Added</div>) :(data.contact)}
                                        </p>
                                    </div>
                                </div>

                                <div className="relative h-6 overflow-hidden translate-y-6 rounded-b-xl">
                                    <div className="absolute flex -space-x-12 rounded-b-2xl">
                                        <div className="w-36 h-8 transition-colors duration-200 delay-75 transform skew-x-[35deg] bg-sky-400/90 group-hover:bg-cyan-600/90 z-10"></div>
                                        <div className="w-28 h-8 transition-colors duration-200 delay-100 transform skew-x-[35deg] bg-sky-300/90 group-hover:bg-cyan-500/90 z-20"></div>
                                        <div className="w-28 h-8 transition-colors duration-200 delay-150 transform skew-x-[35deg] bg-sky-200/90 group-hover:bg-cyan-400/90 z-30"></div>
                                        <div className="w-28 h-8 transition-colors duration-200 delay-200 transform skew-x-[35deg] bg-sky-100/90 group-hover:bg-cyan-300/90 z-40"></div>
                                        <div className="w-28 h-8 transition-colors duration-200 delay-300 transform skew-x-[35deg] bg-sky-50/90 group-hover:bg-cyan-200/90 z-50"></div>
                                    </div>
                                </div>
                             </>
                     
                            </>
                        </div>
                    </div>
                </div>
                ) : null}
        </div>
    )
} 