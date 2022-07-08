import styles from  './styles/contact.module.scss'
import img from '../../assets/images/xabout.jpg.pagespeed.ic.-j2kfNwXDg.webp'
const Contact=()=>{
    const contact={
        section:"Contact me",
        desSection :'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
        infomation:[
            {
                type:1,
                info:"Address",
                icon:"fa-solid fa-signs-post",
                des:"198 West 21th Street, Suite 721 New York NY 10016",
                href:''
            },
            {
                type:2,
                info:"Contact Number",
                icon:"fa-solid fa-phone",
                des:"+ 1235 2355 98",
                href:'tel://1235235598'
            },
            {
                type:2,
                info:"Address",
                icon:"fa-solid fa-paper-plane",
                des:"info@yoursite.com",
                href:'  mailto:info@yoursite.com'
            },
            {
                type:2,
                info:"Website",
                icon:"fa-solid fa-earth-americas",
                des:"yoursite.com",
                href:'#'
            },
        ]
    }
    const forms={
        img: img,
        form:[
            {
                placehoder:"Your Name",
                name:'name'
            },
            {
                placehoder:"Your Email",
                name:'email'
            },
            {
                placehoder:"Subject",
                name:'subject'
            }
        ]

    }
    return(
        <section className={styles.contact} id="contact-section">
            <div className={styles.sectionname}>
                <h2>{contact.section}</h2>
                <p>{contact.desSection}</p>
            </div>
            <div className="container">
                <div className={styles.row}>
                    {contact.infomation.map((value, index) => (
                        <div className={styles.contactItem} key={index}>
                            <div className={styles.contactItemContent}>
                                <i className={value.icon}></i>
                                <h3>{value.info}</h3>
                                    {
                                        value.type==2 ? (<a href={value.href}>{value.des}</a>):(<p>{value.des}</p>)
                                    }
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.form}>
                    <div className={styles.row}>
                        <div className={styles.formImage}
                            style={{backgroundImage:`url(${forms.img})`}}
                        ></div>
                        <div className={styles.formContent}>
                            <form action="">
                                {forms.form.map((value, index) => (
                                    <input type="text" name={value.name} placeholder={value.placehoder}/>
                                ))}
                                <textarea name="message"  cols={30} rows={7} placeholder="Message"></textarea>
                                <button type="submit">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )

}
export default Contact