import Image from 'next/image'
import Link from 'next/link'
import Navegacion from './navegacion'
import style from '@/styles/header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
        <div className={`contenedor ${style.barra}`}>
            <Link href={'/'}>
                <Image src='img/logo.svg' alt="Imagen Logo" width={300} height={40} className={style.logo}/>
            </Link>

            <Navegacion/>
        </div>
    </header>
  )
}

export default Header
