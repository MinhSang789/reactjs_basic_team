import img1 from '../../assets/images/xwork-1.jpg.pagespeed.ic.-P_sxB_seN.webp'
import img2 from '../../assets/images/xwork-2.jpg.pagespeed.ic.Q2f7kLKqWn.webp'
import img3 from '../../assets/images/xwork-3.jpg.pagespeed.ic.Fm4c11sd7p.webp'
import img4 from '../../assets/images/xwork-4.jpg.pagespeed.ic.AAx_2TLnn9.webp'
import img5 from '../../assets/images/xwork-5.jpg.pagespeed.ic.wj7u8-RD3L.webp'
import img6 from '../../assets/images/xwork-6.jpg.pagespeed.ic.11SwA0AgXc.webp'
import styles from './styles/projects.module.scss'

const Projects=()=>{
    const projects={
        id:"projects-section",
        title:"Our Projects",
        description:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
        project:[
            {
                imgurl:img1,
                name:'Branding & Illustration Design',
                des:'Web Design',
                link:"/"
            },
            {
                imgurl:img2,
                name:'Branding & Illustration Design',
                des:'Web Design',
                link:"/"
            },
            {
                imgurl:img3,
                name:'Branding & Illustration Design',
                des:'Web Design',
                link:"/"
            },
            {
                imgurl:img4,
                name:'Branding & Illustration Design',
                des:'Web Design',
                link:"/"
            },
            {
                imgurl:img5,
                name:'Branding & Illustration Design',
                des:'Web Design',
                link:"/"
            },
            {
                imgurl:img6,
                name:'Branding & Illustration Design',
                des:'Web Design',
                link:"/"
            },
        ]
    }
    const info=[{
        number:100,
        name:"Adwards"
    },
        {
            number:1200,
            name:"Complete Projects"
        },
        {
            number:1200,
            name:"Happy Customers"
        },
        {
            number:500,
            name:"Cups of coffee"
        },
    ]
    return (
        <section id={projects.id} className={`${styles.projects}`}>
            <h2>{projects.title}</h2>
            <p>{projects.description}</p>
            <div className={`${styles.row}`}>
                {projects.project.map((value,index)=>(
                    <div className={`${styles.projectsImg}`} key={index}
                         style={{backgroundImage:`url("${value.imgurl}"`}}
                    >
                        <div className={`${styles.overlay}`}></div>
                        <div className={`${styles.text}`}>
                            <h3>{value.name}</h3>
                            <span>{value.des}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className={`${styles.info}`}>
                <div>
                    <div className={`${styles.row}`} style={{paddingTop:0}}>
                        {info.map((value,index)=>(
                            <div className={`${styles.infoItem}`}>
                                <strong>{value.number}</strong>
                                <span>{value.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Projects