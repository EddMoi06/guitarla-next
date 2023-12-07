import Image from 'next/image';
import Link from 'next/link';
import style from '@/styles/guitarras.module.css'

const Guitarras = ({guitarra}) => {
    const {nombre, precio, imagen, descripcion, url} = guitarra.attributes;
    return (
        <div className={style.guitarra}>
                <Image 
                    width={600}
                    height={400}
                    src={imagen.data.attributes.formats.small.url} 
                    alt={`Imagen Guitarra ${nombre}`} 
                />
                
                <div className={style.contenido}>
                <h3>{nombre}</h3>
                    <p className={style.descripcion}>{descripcion}</p>
                    <p className={style.precio}>${precio}</p>
                    <Link href={`guitarras/${url}`} legacyBehavior>
                        <a className={style.enlace}>
                            Ver Producto
                        </a>
                    </Link>
                </div>
        </div>
    )
}

export default Guitarras
