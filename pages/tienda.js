import Layout from "@/components/layout"
import Guitarras from "@/components/guitarras";
import style from '@/styles/grid.module.css'

export default function Tienda({guitarras}) {

  return (
      <Layout 
        title={'Tienda'}
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra Coleccion</h1>

          <div className={style.grid}>
            {guitarras.map( guitarra => (
              <Guitarras
                  key={guitarra.id}
                  guitarra={guitarra}
              />
            ))}
          </div>
        </main>

      </Layout>
  )
}


export async function getServerSideProps() {

  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const { data: guitarras } = await respuesta.json();

  return {
    props:{
      guitarras
    }
  }
}