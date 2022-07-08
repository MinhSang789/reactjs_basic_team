import React from "react";
import style from "./style/Services.module.scss"

const Services=(props: any)=>{
    const service = [
        {
            "icon":"flaticon-analysis",
            "title":"web design",
            "note":"A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
            "icon":"flaticon-flasks",
            "title":"photo graphy",
            "note":"A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
            "icon":"flaticon-ideas",
            "title":"web developer",
            "note":"A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
            "icon":"flaticon-innovation",
            "title":"app developing",
            "note":"A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
            "icon":"flaticon-ux-design",
            "title":"branding",
            "note":"A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
            "icon":"flaticon-idea",
            "title":"product strategy",
            "note":"A small river named Duden flows by their place and supplies it with the necessary regelialia."
        }
        ]
    return(
        <div className={style.container} id={`service-section`}>
            <h2>Services</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            <div className={style.row}>
                {
                    service.map((value)=>
                        <div className={style.row1}>
                                <a>
                                    <span className={`${value.icon} ${style.flaticonideas}`}></span>
                                    <div>
                                        <h3 className={style.title}>{value.title}</h3>
                                        <div className={style.gach}></div>
                                        <p className={style.note}>{value.note}</p>
                                    </div>
                                </a>
                        </div>
                    )
                }

            </div>
        </div>
    )
}
export default Services