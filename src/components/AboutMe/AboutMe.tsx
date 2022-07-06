import React from "react"
import style from "./style/AboutMe.module.scss"
import imageIntroduce from '../../assets/images/xabout.jpg.pagespeed.ic.-j2kfNwXDg.webp'
import image1 from '../../assets/images/xpartner-1.png.pagespeed.ic.b7FlbbQVdf.webp'
import image2 from '../../assets/images/xpartner-2.png.pagespeed.ic.4tCtqXfPLh.webp'
import image3 from '../../assets/images/xpartner-3.png.pagespeed.ic.K6b-CsdlC4.webp'
import image4 from '../../assets/images/xpartner-4.png.pagespeed.ic.DaTQYymmyu.webp'
import image5 from '../../assets/images/xpartner-5.png.pagespeed.ic.A4xeUmT9Fd.webp'

const AboutMe=(props: any)=>{
    const imgs = [
        image1, image2, image3, image4, image5
    ]
    const info = [
        {
            title:"Name",
            value:"Mai Văn Đông"
        },
        {
            title:"Date of birth",
            value:"December 02, 1999"
        },
        {
            title:"Address",
            value:"Hồ Chí Minh 700000, Việt Nam"
        },
        {
            title:"Zip code",
            value:"700000"
        },
        {
            title:"Email",
            value:"Dongmaivan147@@gmail.com"
        },
        {
            title:"Phone",
            value:"+84 973 685 523"
        }
    ]
    return(
        <div className={`container ${style.container}`}>
            <div className={style.containerAbout}>
                <div className={style.left}>
                    <div className={style.image} style={{backgroundImage: `url('${props?.data?.url ? props?.data?.url : imageIntroduce}')`}}/>
                </div>
                <div className={style.right}>
                    <h2 className={style.title}>About Me</h2>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <ul className={style.list}>{
                        info.map((title)=>
                            <li><span className={style.text}>{title.title}:</span><span  className={style.text1}>{title.value}</span></li>
                        )
                    }

                    </ul>
                    <span className={style.text2}>120</span><span className={style.text3}> Project Complete</span>
                    <div>
                        <a className={style.btn}>DOWLOAD CV</a>
                    </div>
                </div>

            </div>
            <div>
                {
                    imgs.map((img)=>
                        <img className={style.images} src={img}/>
                    )
                }
            </div>

        </div>
    )
}
export default AboutMe