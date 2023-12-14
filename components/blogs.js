import style from '@/styles/blog.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { formatearFecha } from '@/utils'


const Blogs = ({post}) => {

    const {titulo, contenido, url, imagen, publishedAt} = post

    return (
        <div className={style.contenido}>
            <Image
                src={imagen.data.attributes.formats.medium.url}
                width={500}
                height={400}
                alt='Imagen Blog'
            />
            <h3>{titulo}</h3>
            <p className={style.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={style.resumen}>{contenido}</p>
            <Link href={`/blogs/${url}`} legacyBehavior>
                <a className={style.enlace}>Visitar Blog</a>
            </Link>
        </div>
    )
}

export default Blogs
