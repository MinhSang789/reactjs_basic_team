import Header from "./Header/Header"
import Footer from './Footer/Footer'
const Page = (props: any) => {
    return(
        <>
            <Header/>
            {props?.children}
            <Footer/>
        </>
    )
}
export default Page