import Image from "next/image"
import style from '@/styles/guitarras.module.css'
import Layout from "@/components/layout"

const urlGuitarra = ({guitarra}) => {
    const {nombre, descripcion, imagen, precio} = guitarra[0].attributes
  return (
    <Layout
        title={nombre}
    >
        <div className={style.guitarra}>
            <Image 
                width={600}
                height={400}
                src={imagen.data.attributes.url} 
                alt={`Imagen Guitarra ${nombre}`} 
            />
            
            <div className={style.contenido}>
            <h3>{nombre}</h3>
                <p className={style.descripcion}>{descripcion}</p>
                <p className={style.precio}>${precio}</p>
            </div>
        </div>
    </Layout>
  )
}

export default urlGuitarra

export async function getStaticPaths(){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const { data } = await respuesta.json()

    const paths = data.map( guitarra => ({
        params: {
            url: guitarra.attributes.url
        }
    }))

    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {url}}) {

    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const { data: guitarra } = await respuesta.json();

    return{
        props:{
            guitarra
        }
    }
}