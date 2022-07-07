import styles from'./styles/blog.module.scss'
import img1 from "../../assets/images/ximage_1.jpg.pagespeed.ic.-B0UTb4vQO.webp"
import img2 from "../../assets/images/ximage_2.jpg.pagespeed.ic.hPYaVjNW0H.webp"
import img3 from "../../assets/images/ximage_3.jpg.pagespeed.ic.XJ5IolSvSy.webp"
import ftcoimg from "../../assets/images/xbg_1.jpg.pagespeed.ic.4dZ7CYM3I2.webp"

import imageIntroduce from "../../assets/images/xabout.jpg.pagespeed.ic.-j2kfNwXDg.webp";

const Blog=()=>{
    const blog={
        title:"Our Blog",
        description:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
        blogs:[
            {
                imgurl:img1,
                nameblog: "Why Lead Generation is Key for Business Growth",
                time:"Sept. 12, 2019",
                user:"Admin",
                icon:"x",
                numbercmt:3,
                des:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
            },
            {
                imgurl:img2,
                nameblog: "Why Lead Generation is Key for Business Growth",
                time:"Sept. 12, 2019",
                user:"Admin",
                icon:"x",
                numbercmt:3,
                des:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
            },
            {
                imgurl:img3,
                nameblog: "Why Lead Generation is Key for Business Growth",
                time:"Sept. 12, 2019",
                user:"Admin",
                icon:"x",
                numbercmt:3,
                des:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
            },
        ],
    }
    const ftco={
        ftcoimg:ftcoimg,
        des:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
    }
    return(
        <section className={`${styles.blog}`} id="blog-section">
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <div className="container">
                <div className={styles.bloglist}>
                    {
                        blog.blogs.map((value, index, array)=>(
                            <div className={styles.blogItem} key={index}>
                                <div className={`${styles.blogItemImg}`} style={{backgroundImage: `url('${value?.imgurl ? value?.imgurl : ""}')`}}></div>
                                <h3>{value.nameblog}</h3>
                                <span>{value.time} </span>
                                <span>{value.user} </span>
                                <i> x </i>
                                <span>{value.numbercmt}</span>
                                <p>{value.des}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className={styles.ftco}
                 style={{backgroundImage:`url('${ftco.ftcoimg ? ftco.ftcoimg : ''}')`}}
            >
                <div className={styles.overlay}></div>
                <div className={styles.content}>
                    <h2>I'm <span>Available</span>  for freelancing</h2>
                    <p>{ftco.des}</p>
                    <p style={{paddingTop:20}} >
                        <a href="" className={styles.a}>Hire me</a>
                    </p>
                </div>
            </div>
        </section>
    )

}
export default Blog