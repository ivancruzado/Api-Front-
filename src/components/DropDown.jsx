import { Menu, Transition } from '@headlessui/react'
import { Avatar } from '@mui/material'
import { CardStackIcon, ChevronDownIcon, DiscIcon, ExitIcon, IdCardIcon, SunIcon } from '@radix-ui/react-icons'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../pages/ContextoGlobal'


export default function DropDown() {

    const handleLogout = () => {
        window.localStorage.removeItem("loggedUser")
        logout();
      }
  const[userId,setUserId] = useState(null);

  useEffect(()=>{
    const loggedUser = window.localStorage.getItem('loggedUser');
    if (loggedUser){
      const user = JSON.parse(loggedUser)
      setUserId(user.loginUser.user._id)
      
    }
  },[])

  const { logout,authenticated } = useAuth();
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
            
            <Menu.Button className="gap-16">
            <Avatar sx={{ width: 50, height: 43 }}></Avatar>            
          </Menu.Button>
          
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-slate-800 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <IdCardIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <CardStackIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Perfil
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link to={`/PerfilUsuario/${userId}`} className="">
                  <button
                    className={`${
                      active ? 'bg-slate-800 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (

                      <IdCardIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <CardStackIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Mis publicaciones
                  </button>
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link to = {`/Contactos/${userId}`}>
                  <button
                  
                    className={`${
                      active ? 'bg-slate-800 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <IdCardIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <CardStackIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Contactos
                  </button>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link to ={`/Opiniones/${userId}`}>
                  <button
                    className={`${
                      active ? 'bg-slate-800 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <IdCardIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <CardStackIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Opiniones
                  </button>
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                    <Link to = "/">
                  <button
                    onClick={handleLogout}
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <ExitIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <ExitIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    )}
                    Cerrar Sesion
                  </button>
                  </Link>
                )}
                
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}