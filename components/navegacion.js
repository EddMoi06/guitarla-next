import Link from "next/link"
import styleH from '@/styles/header.module.css'
import styleF from '@/styles/footer.module.css' 
import { useRouter } from 'next/router'

const Navegacion = () => {
    const router = useRouter()

  return (
    <nav className={`${styleH.navegacion} ${styleF.navegacion}`}>
        <Link href={'/'} legacyBehavior> 
            <a className={router.pathname === '/' ? styleH.pagina : ''}
            > Inicio </a></Link>
        <Link href={'/nosotros'} legacyBehavior> 
            <a className={router.pathname === '/nosotros' ? styleH.pagina : ''}
            > Nosotros </a></Link>
        <Link href={'/blog'} legacyBehavior> 
            <a className={router.pathname === '/blog' ? styleH.pagina : ''}
            > Blog </a></Link>
        <Link href={'/tienda'} legacyBehavior> 
            <a className={router.pathname === '/tienda' ? styleH.pagina : ''}
            > Tienda </a></Link>
    </nav>
  )
}

export default Navegacion
