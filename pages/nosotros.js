import Layout from "@/components/layout"
import style from '@/styles/nosotros.module.css'
import Image from "next/image"


const Nosotros = () => {
  return (
    <Layout 
        title={'Nosotros'}
    >

    <main className={`contenedor ${style.nosotros}`}>  
        <h2 className="heading"> Nosotros </h2>

        <div className={style.contenido}>

          <Image src='/img/nosotros.jpg' width={1000} height={800} alt="Imagen Nosotros" />

          <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem perspiciatis ad voluptas quibusdam, amet voluptatum necessitatibus tempore nostrum ut eligendi molestias suscipit esse? Esse tempore velit minima. Amet, consequatur velit.</p>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem perspiciatis ad voluptas quibusdam, amet voluptatum necessitatibus tempore nostrum ut eligendi molestias suscipit esse? Esse tempore velit minima. Amet, consequatur velit.</p>
          </div>

        </div>
    </main>

    </Layout>
  )
}

export default Nosotros
