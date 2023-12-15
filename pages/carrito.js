import { useState, useEffect } from 'react'
import Layout from "@/components/layout"
import style from '@/styles/carrito.module.css'
import Image from "next/image"

const Carrito = ({carrito, actualizarCantidad, eliminarProducto}) => {

    const [ total, setTotal] = useState(0)

    useEffect(() => {
        const totalPagar = carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0)

        setTotal(totalPagar)
    }, [carrito])

  return (
    <Layout title="Carrito">
        <main className="contenedor">
            <h1 className="heading">Carrito de Compras</h1>

            <div className={style.contenido}>
                <div className={style.carrito}>
                    <h2> Articulos </h2>

                    {carrito.lenght <= 0 ? 'Carrito Vacio' : (
                        carrito.map( producto => (
                            <div key={producto.id} className={style.producto}>
                                <div>
                                    <Image src={producto.imagen} width={250} height={480} alt={producto.nombre}/>
                                </div>

                                <div>
                                    <p className={style.nombre}>{producto.nombre}</p>

                                    <div className={style.cantidad}>
                                        <select
                                            onChange={e => actualizarCantidad({
                                                id: producto.id,
                                                cantidad: e.target.value
                                            })}
                                            value={producto.cantidad}
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>

                                    <p className={style.precio}>${producto.precio}</p>
                                    <p className={style.subtotal}> Subtotal: <span>${producto.cantidad * producto.precio}</span></p>
                                </div>

                                <button
                                    className={style.eliminar}
                                    type='button'
                                    onClick={() => eliminarProducto(producto.id)}
                                >
                                X
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <aside className={style.resumen}>
                    <h3>Resumen</h3>
                    <p>Total a Pagar: ${total}</p>
                </aside>
            </div>
        </main>
    </Layout>
  )
}

export default Carrito
