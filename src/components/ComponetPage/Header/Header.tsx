import styles from './styles/header.module.scss'
import React from "react";
const Header=()=>{
    const [isShowModal,setIsShowModal]=React.useState(false)
    const header={
        logo: 'Ronaldo',
        menu:[
            {
                slug:'home-section',
                title:"Home"
            },
            {
                slug:'about-section',
                title:"About"
            },
            {
                slug:'resume-section',
                title:"Resume"
            },
            {
                slug:'service-section',
                title:"Service"
            },
            {
                slug:'projects-section',
                title:"Projects"
            },
            {
                slug:'myblog-section',
                title:"My Blog"
            },
            {
                slug:'contact-section',
                title:"Contact"
            },
        ]
    }
    return(
        <header>
            <nav>
                <div className="container">
                    <div className={`${styles.header}`}>
                        <a href="/" className={`${styles.logo}`}>
                            <span>R</span>onaldo
                        </a>
                        <div className={`${styles.bar}`}
                        onClick={()=>{setIsShowModal(!isShowModal)}}
                        >
                            <div>
                                <span></span>
                                <p>Menu</p>
                            </div>
                        </div>
                        <ul className={`${styles.menu} ${isShowModal ? styles.show : ''}`}>
                            {header.menu.map((value,index)=>(
                                <a href={`#${value.slug}`} className={`${styles.menuItem}`} key={index}>
                                    <li>{value.title}</li>
                                </a>
                            ))}
                        </ul>
                        {/*{
                            isShowModal &&
                            <ul className={`${styles.menu}`}>
                            {header.menu.map((value,index)=>(
                                <a href={`#${value.slug}`} className={`${styles.menuItem}`} key={index}>
                                    <li>{value.title}</li>
                                </a>
                            ))}
                        </ul>}*/}
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header