import { useAuth } from '@/contexts/AuthContext'
import { FiChevronDown, FiSearch } from 'react-icons/fi'
import { MdLogout } from 'react-icons/md'
import { BiUser } from 'react-icons/bi'
import Image from 'next/image'
import { Avatar } from '../atoms/Avatar'
import { useState } from 'react'
import { useRouter } from 'next/router'

interface HeaderProps {
  onSignUpClick: () => void
  onSignInClick: () => void
  initialSearchTerm?: string
}

export const Header = ({
  onSignUpClick,
  onSignInClick,
  initialSearchTerm
}: HeaderProps) => {
  const [showMenu, setShowMenu] = useState(false)
  const { user, isAuthenticated, isLoading, finalizeSession } = useAuth()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm)

  const handleSearch = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault()

    if (searchTerm) {
      router.push(`/eventos/${searchTerm}`)
    }
  }

  const handleProducerAreaClick = () => {
    if (isAuthenticated) {
      router.push(`/organizador/meus-eventos`)
    } else {
      router.push(`/sobre`)
    }
  }

  return (
    <header className="fixed top-0 left-0 w-screen h-20 flex items-center px-6 justify-between shadow-sm z-10 bg-white">
      <div className="flex items-center flex-1 max-w-screen-md mr-6">
        <div onClick={() => router.push('/')}>
          <Image
            width={140}
            height={50}
            className="cursor-pointer"
            src="/images/purple-logo.png"
            alt="Logo"
          />
        </div>

        <form
          onSubmit={handleSearch}
          className="border rounded-md h-12 ml-6 flex flex-1 overflow-hidden outline-1 items-center px-3"
        >
          <FiSearch size={20} color="#ccc" />
          <input
            className="flex-1 p-3 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <a
            className="cursor-pointer text-zinc-500 hover:text-primary"
            onClick={() => handleSearch()}
          >
            Pesquisar
          </a>
        </form>
      </div>

      {!isLoading && (
        <>
          <div className="text-primary flex gap-4 items-center ">
            <a
              className="text-sm font-semibold cursor-pointer hover:text-primary/80"
              onClick={handleProducerAreaClick}
            >
              {isAuthenticated ? 'ÁREA DO PRODUTOR' : 'SEJA UM PRODUTOR'}
            </a>

            {!isAuthenticated && (
              <>
                <a
                  className="cursor-pointer hover:text-primary/80"
                  onClick={onSignInClick}
                >
                  ACESSE SUA CONTA
                </a>

                <button
                  onClick={onSignUpClick}
                  className="border-primary border rounded-lg px-4 py-2 hover:bg-primary/80 hover:text-white transition-colors"
                >
                  CADASTRE-SE
                </button>
              </>
            )}

            {!!user && (
              <div className="relative">
                <button
                  className="flex items-center  ml-4 "
                  onClick={() => setShowMenu((currState) => !currState)}
                >
                  <Avatar title={user?.name ?? ''} avatarUrl={user?.avatar} />
                  <span className="ml-3 mr-2">{user?.name}</span>
                  <div className="flex items-center justify-center bg-zinc-100 rounded-full p-1">
                    <FiChevronDown />
                  </div>
                </button>

                {showMenu && (
                  <div className="w-full bg-white absolute right-0 top-[48px] shadow-2xl rounded-lg p-2 border border-zinc-100">
                    <div
                      className="flex items-center gap-3 w-full hover:bg-zinc-100 cursor-pointer rounded p-2"
                      onClick={() => router.push('/organizador/minha-conta')}
                    >
                      <BiUser />
                      <p>Minha conta</p>
                    </div>

                    <div
                      className="flex items-center gap-3 w-full hover:bg-zinc-100 cursor-pointer rounded p-2"
                      onClick={finalizeSession}
                    >
                      <MdLogout />
                      <p>Sair</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </header>
  )
}
