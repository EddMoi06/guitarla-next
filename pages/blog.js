import Layout from "@/components/layout"
import style from '@/styles/blog.module.css'
import styleGrid from '@/styles/grid.module.css'
import Blogs from "@/components/blogs"

export default function Blog({posts}) {
  return (  
      <Layout 
        title={'Blog'}
      >
        <div className={`contenedor`}>
            <div className={styleGrid.grid}>
                {posts.map(post => (
                    <Blogs
                        key={post.id}
                        post={post.attributes}
                    />
                ))}
            </div>
        </div>

      </Layout>
    
  )
}

export async function getStaticProps() {

  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  const { data: posts } = await respuesta.json();

  return {
    props:{
      posts
    }
  }
}
