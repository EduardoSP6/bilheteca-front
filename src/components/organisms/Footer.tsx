import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="bg-primary w-full mt-40 flex justify-center py-14">
      <div className="max-w-7xl w-full">
        <div className="flex items-center justify-between pb-6 border-b border-zinc-600/50">
          <Image
            width={150}
            height={50}
            src="/images/white-logo.png"
            alt="Logo"
          />

          <div className="flex items-center gap-4">
            <span className="text-white font-semibold text-xs">
              Baixe o App Produtor
            </span>

            <div className="flex justify-center w-[140px] bg-white p-2  rounded-lg cursor-pointer hover:bg-white/90">
              <Image
                width={24}
                height={16}
                src="/images/apple-logo.png"
                alt="Google play store"
              />
              <span className="ml-2">App Store</span>
            </div>

            <div className="flex justify-center w-[140px] bg-white p-2  rounded-lg cursor-pointer hover:bg-white/90">
              <Image
                width={16}
                height={16}
                src="/images/google-play-logo.png"
                alt="Google play store"
              />
              <span className="ml-2">Google Play</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-white flex gap-4">
            <a className="hover:underline cursor-pointer hover:text-white/80 text-sm font-semibold">
              Home
            </a>
            <a className="hover:underline cursor-pointer hover:text-white/80 text-sm font-semibold">
              Sobre
            </a>
            <a className="hover:underline cursor-pointer hover:text-white/80 text-sm font-semibold">
              Termos e políticas
            </a>
            <a className="hover:underline cursor-pointer hover:text-white/80 text-sm font-semibold">
              Suporte
            </a>
          </div>

          <div className="flex gap-4">
            <a className="cursor-pointer">
              <Image
                width={24}
                height={24}
                src="/images/instagram.png"
                alt="Google play store"
              />
            </a>

            <a className="cursor-pointer">
              <Image
                width={24}
                height={24}
                src="/images/twitter.png"
                alt="Google play store"
              />
            </a>

            <a className="cursor-pointer">
              <Image
                width={24}
                height={24}
                src="/images/facebook.png"
                alt="Google play store"
              />
            </a>
          </div>
        </div>

        <p className="text-zinc-400 text-sm font-semibold mt-10">
          Bilheteca @ Copyright 2023
        </p>
      </div>
    </footer>
  )
}
