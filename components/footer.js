
import style from '@/styles/footer.module.css'
import Navegacion from './navegacion'

const Footer = () => {
    return (

    <footer className={style.footer}>
        <div className={`contenedor ${style.contenido}`}>
            <Navegacion/>

            <p className={style.copyrigth}>Todos los Derechos Reservados {new Date().getFullYear()}</p>
        </div>
    </footer>
    )
  }
  
  export default Footer
  