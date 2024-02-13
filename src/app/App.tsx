import style from './style/app.module.scss'
import {Outlet} from "react-router-dom";

const App = () => {
    return (<div className={style.div}>
        <span className={style.span}>Hello world!</span>
        <Outlet/>
    </div>)
}

export default App