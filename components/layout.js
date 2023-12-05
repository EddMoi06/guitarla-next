import Head from "next/head"
import Header from "./header"
import Footer from "./footer"

const Layout = ({children, title = ''}) => {
  return (
    <div>
        <Header/>
        <Head>
            <title>{`GuitarLA - ${title}`}</title>
        </Head>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout
