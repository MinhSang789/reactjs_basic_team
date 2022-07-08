import React from "react"
import style from "./style/Resume.module.scss"
const Resume=(props: any)=>{
    const menus = [
        {
            "name":"Education",
            "info":[{
                    "time":"2014-2015",
                    "title":"Bachelor of Science in Computer Science",
                    "university":"Cambridge University",
                    "note":"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                },
                {
                    "time":"2014-2015",
                    "title":"Computer Processing Systems/Computer Software",
                    "university":"Cambridge University",
                    "note":"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                },
                {
                    "time":"2014-2015",
                    "title":"Diploma in Computer",
                    "university":"Cambridge University",
                    "note":"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                },
                {
                    "time":"2014-2015",
                    "title":"Art & Creative Director",
                    "university":"Cambridge University",
                    "note":"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                }
            ]
        },
        {
            "name":"Experience",
            "info":[{
                    "time":"2014-2015",
                    "title":"Software Developer",
                    "university":"Cambridge University",
                    "note":"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                },
                {
                    "time":"2014-2015",
                    "title":"Web Designer",
                    "university":"Cambridge University",
                    "note":"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                },
                {
                    "time":"2014-2015",
                    "title":"Web Marketing",
                    "university":"Cambridge University",
                    "note":"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                },
                {
                    "time":"2014-2015",
                    "title":"Art & Creative Director",
                    "university":"Cambridge University",
                    "note":"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                },
                {
                    "time":"2014-2015",
                    "title":"Wordpress Developer",
                    "university":"Cambridge University",
                    "note":"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                },
                {
                    "time":"2014-2015",
                    "title":"UI/UX Designer",
                    "university":"Cambridge University",
                    "note":"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                }]
        },
        {
            "name":"Skills",
            "info":[{
                    "time":"2014-2015",
                    "title":"Bachelor of Science in Computer Science",
                    "university":"Cambridge University",
                    "note":"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
            }]
        },
        {
            "name":"Awards",
            "info":[{
                    "time":"2014-2015",
                    "title":"Top 10 Web Developer",
                    "university":"Cambridge University",
                    "note":"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                },
                {
                    "time":"2014-2015",
                    "title":"Top 5 LeaderShip Exellence Winner",
                    "university":"Cambridge University",
                    "note":"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                },
                {
                    "time":"2014-2015",
                    "title":"Top 4 Web Tester",
                    "university":"Cambridge University",
                    "note":"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                },
                {
                    "time":"2014-2015",
                    "title":"Art & Creative Director",
                    "university":"Cambridge University",
                    "note":"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                }]
        }
    ]
    const skill1 = [
        {
            "skill":"CSS",
            "pt":90,
            "lastweek":"28",
            "lastmonth":"60"
        },
        {
            "skill":"HTML",
            "pt":80,
            "lastweek":"28",
            "lastmonth":"60"
        },
        {
            "skill":"jQuery",
            "pt":75,
            "lastweek":"28",
            "lastmonth":"60"
        }
    ]
    const skill2 = [
        {
            "skill":"Photoshop",
            "pt":"90"
        },
        {
            "skill":"jQuery",
            "pt":"85"
        },
        {
            "skill":"HTML5",
            "pt":"95"
        },
        {
            "skill":"CSS3",
            "pt":"90"
        },
        {
            "skill":"WordPress",
            "pt":"70"
        },
        {
            "skill":"SEO",
            "pt":"80"
        }

    ]
    return(
        <div className={`container ${style.container}`} id={`resume-section`}>
            <div className={style.row}>
                <div className={style.menu}>
                        <ul>
                            {
                                menus.map((menu)=>
                                    <li><a href={`#${menu.name}`}>{menu.name}</a></li>
                                )
                            }

                        </ul>
                </div>
                <div className={style.info}>
                    {
                        menus.map((menu) => {
                            if (menu.name == 'Skills') {
                                return (
                                    <div className={style.content} id={menu.name}>
                                        <h2 className={style.text}>{menu.name}</h2>
                                        <div className={style.block}>
                                                {
                                                    skill1.map((s)=>
                                                        <div className={style.block1}>
                                                            <div className={style.block2}>
                                                                <h2>{s.skill}</h2>
                                                                <div className={style.circle}>
                                                                    <span className={style.circle1}></span>
                                                                    <span className={style.circle2} style={{transform:`rotate(${(s.pt - 37.5) * 3.6}deg)`}}></span>
                                                                    <span className={style.circle3}></span>
                                                                    <div className={style.circle4}>{s.pt}%</div>
                                                                </div>
                                                                <div className={style.percent}>
                                                                    <div className={style.percent1}>
                                                                        <div className={style.percenttext1}>{s.lastweek}%</div>
                                                                        <span className={style.percenttext2}>last week</span>
                                                                    </div>
                                                                    <div className={style.percent1}>
                                                                        <div className={style.percenttext1}>{s.lastmonth}%</div>
                                                                        <span className={style.percenttext2}>last month</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }

                                        </div>
                                        <div className={style.row2}>
                                            {
                                                skill2.map((s)=>
                                                    <div className={style.percentline}>
                                                        <div>
                                                            <h3>{s.skill}</h3>
                                                        </div>
                                                        <div>
                                                            <div className={style.line}>
                                                                <div className={style.line1}></div>
                                                                <div className={style.line2} style={{width:`${s.pt}%`}}>
                                                                    <div className={style.fff}>{s.pt}%</div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                )
                                            }

                                        </div>
                                    </div>

                                )
                            } else {
                                return (
                                    <div className={style.content} id={menu.name}>
                                        <h2 className={style.text}>{menu.name}</h2>
                                        {
                                            menu.info.map((abc) =>
                                                <div className={style.row1}>
                                                    <div className={style.flaticonideas}>
                                                    </div>
                                                    <div>
                                                        <span className={style.text1}>{abc.time}</span>
                                                        <h2 className={style.text2}>{abc.title}</h2>
                                                        <span className={style.text3}>{abc.university}</span>
                                                        <p className={style.text4}>{abc.note}</p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                )
                            }
                        }                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default Resume