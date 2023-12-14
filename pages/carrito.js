import Layout from "@/components/layout"
import style from '@/styles/carrito.module.css'

const Carrito = () => {
  return (
    <Layout title="Carrito">
        <main className="contenedor">
            <h1 className="heading">Carrito de Compras</h1>

            <div className={style.contenido}>
                <div className={style.carrito}>
                    <h2> Articulos </h2>
                </div>

                <aside className={style.resumen}>
                    <h3>Resumen</h3>
                    <p>Total a Pagar:</p>
                </aside>
            </div>
        </main>
    </Layout>
  )
}

export default Carrito
