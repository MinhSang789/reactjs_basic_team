import React from "react";
import style from "./style/Footer.module.scss"
const Footer=()=>{
    return(
        <div className={style.footer}>
            <div className={style.container}>
                <div className={style.row}>
                    <div className={style.row1}>
                        <div>
                            <h2>About</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                        <div style={{marginTop:50}}>
                            <ul>
                                <li><a className={`${style.icon} ${style.icon1}`}></a></li>
                                <li><a className={`${style.icon} ${style.icon2}`}></a></li>
                                <li><a className={`${style.icon} ${style.icon3}`}></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.row1}>
                        <h2>Links</h2>
                        <ul>
                            <li><a className={style.ic} > Home</a></li>
                            <li><a className={style.ic}> About</a></li>
                            <li><a className={style.ic}> Services</a></li>
                            <li><a className={style.ic}> Projects</a></li>
                            <li><a className={style.ic}> Contact</a></li>
                        </ul>
                    </div>
                    <div className={style.row1}>
                        <h2>Service</h2>
                        <ul>
                            <li><a className={style.ic}> Web Design</a></li>
                            <li><a className={style.ic}> Web Development</a></li>
                            <li><a className={style.ic}> Bussiness Strategy</a></li>
                            <li><a className={style.ic}> Data Analysis</a></li>
                            <li><a className={style.ic}> Graphic Design</a></li>
                        </ul>
                    </div>
                    <div className={style.row1}>
                        <h2>Have a Questions?</h2>
                        <ul>
                            <li><span className={style.ic1}> 42 Đường số 2, CityLand, Gò Vấp, HCM</span></li>
                            <li><span className={style.ic2}> +84 973685523</span></li>
                            <li><span className={style.ic3}> dongmaivan147@gmail.com</span></li>
                        </ul>
                    </div>
                </div>
                <div className={style.copyright}>
                    <p>Copyright ©2022 All rights reserved | This template is made with  by Mai Văn Đông</p>
                </div>
            </div>

        </div>
    )
}
export default Footer