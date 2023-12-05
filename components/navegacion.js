import Link from "next/link"
import style from '@/styles/header.module.css'

const Navegacion = () => {
  return (
    <nav className={style.navegacion}>
        <Link href={'/'}>Inicio</Link>
        <Link href={'/nosotros'}>Nosotros</Link>
        <Link href={'/blog'}>Blog</Link>
        <Link href={'/tienda'}>Tienda</Link>
    </nav>
  )
}

export default Navegacion
