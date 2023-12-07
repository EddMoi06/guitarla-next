import Layout from "@/components/layout"
import Link from "next/link"

const Pagina404 = () => {
  return (
    <Layout
        title="Pagina no encontrada"
    >
        <h1 className="heading">404</h1>
        <p className='error'>Pagina no encontrada</p>
        <Link href={'/'} legacyBehavior>
            <a className='error-enlace'>
                Ir al Inicio
            </a>
        </Link>
    </Layout>
  )
}

export default Pagina404
