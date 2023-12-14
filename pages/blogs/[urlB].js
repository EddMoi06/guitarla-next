import Layout from "@/components/layout"
import style from '@/styles/blog.module.css'
import Image from "next/image"
import { formatearFecha } from "@/utils"

const urlBlogs = ({post}) => {

    const { titulo, publishedAt, imagen, contenido, url } = post[0].attributes

  return (
    <Layout
        title={post[0].attributes.titulo}
    >
      <article className={`${style.post} ${style['mt-3']}`}>
            <Image
                src={imagen.data.attributes.url}
                width={1000}
                height={400}
                alt="Imagen Blog"
            />
            <div className={style.contenido}>
                <h3>{titulo}</h3>
                <p className={style.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={style.texto}>{contenido}</p>
            </div>
      </article>
    </Layout>
  )
}

export default urlBlogs

export async function getStaticPaths(){
    const respuesta = await fetch(`${process.env.API_URL}/posts`)
    const { data } = await respuesta.json()

    const paths = data.map( post => ({
        params: {
            urlB: post.attributes.url
        }
    }))

    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {urlB}}) {

    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${urlB}&populate=imagen`)
    const { data: post } = await respuesta.json();

    return{
        props:{
            post
        }
    }
}