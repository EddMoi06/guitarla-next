import Image from 'next/image'
import Link from 'next/link'
import style from '@/styles/header.module.css' 
import { useRouter } from 'next/router'

const Header = () => {

  const router = useRouter()

  return (
    <header className={style.header}>
        <div className={`contenedor ${style.barra}`}>
            <Link href={'/'}>
                <Image src='/img/logo.svg' alt="Imagen Logo" width={300} height={40} className={style.logo}/>
            </Link>

            <nav className={`${style.navegacion}`}>
                <Link href={'/'} legacyBehavior> 
                    <a className={router.pathname === '/' ? style.pagina : ''}
                    > Inicio </a></Link>
                <Link href={'/nosotros'} legacyBehavior> 
                    <a className={router.pathname === '/nosotros' ? style.pagina : ''}
                    > Nosotros </a></Link>
                <Link href={'/tienda'} legacyBehavior> 
                    <a className={router.pathname === '/tienda' ? style.pagina : ''}
                    > Tienda </a></Link>
                <Link href={'/blog'} legacyBehavior> 
                    <a className={router.pathname === '/blog' ? style.pagina : ''}
                    > Blog </a></Link>
                <Link href={'/carrito'} legacyBehavior> 
                    <a
                    > <Image
                          src={'/img/carrito.png'}
                          width={30}
                          height={25}
                          alt='Imagen Carrito'
                      /> 
                    </a></Link>
                
            </nav>
        </div>
    </header>
  )
}

export default Header
