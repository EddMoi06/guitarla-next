import Layout from "@/components/layout"
import style from '@/styles/grid.module.css'
import Guitarras from "@/components/guitarras"
import Blogs from "@/components/blogs"
import Curso from "@/components/curso"

export default function Home({guitarras, posts, curso}) {

  return (
    <>
      
      <Layout 
        title={'Inicio'}
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

        <Curso
          curso={curso}
        />

        <section className={`contenedor`}>
            <div className={style.grid}>
                {posts.map(post => (
                    <Blogs
                        key={post.id}
                        post={post.attributes}
                    />
                ))}
            </div>
        </section>

      </Layout>
    </>
  )
}


export async function getStaticProps(){

  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlPost = `${process.env.API_URL}/posts?populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`

  const [resGuitarras, resPost, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPost),
    fetch(urlCurso)
  ])

  const [ {data: guitarras}, {data: posts}, {data: curso} ] = await Promise.all([
    resGuitarras.json(),
    resPost.json(),
    resCurso.json()
  ])

  return {
    props: {
      guitarras,
      posts,
      curso
    }
  }
}