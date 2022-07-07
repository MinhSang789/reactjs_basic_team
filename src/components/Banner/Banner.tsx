import styles from './styles/banner.module.scss'
const Banner=()=>{
    const banner={
        say:"Hey! I AM",
        name:"Ronaldo Fredrickson",
        a:"I'm a ",
        job: "Web Designer"
    }
    return(
        <section className={`${styles.banner}`}>
            <div className={`${styles.overlay}`}></div>
            <div className="container">
                <div className={`${styles.main}`}>
                    <span>{banner.say}</span>
                    <h1>{banner.name}</h1>
                    <h2>{banner.a}
                        <span>
                            {banner.job}
                        </span>
                    </h2>
                </div>
            </div>
        </section>)
}
export default Banner