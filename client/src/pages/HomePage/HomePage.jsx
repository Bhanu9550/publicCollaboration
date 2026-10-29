import Navbar from '../../components/Navbar/Navbar'
import SideNavbar from '../../components/SideNavbar/SideNavbar'
import "./HomePage.css"
import collaborationImage from "../../assets/file image.png"

const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className='HomeHeading'>
                <SideNavbar />
                <div className='rightContent'>
                    <h1 id='heading'>Public Collaboration Platform</h1>
                    <img src={collaborationImage} alt="" />
                    <h2>Collaborate. Create. Share.</h2>

                    <p>
                        Create, edit, and share files easily. Access them anytime.
                    </p>
                    <button className='btn-1'>Get Started</button>
                </div>

            </div>
        </>
    )
}

export default HomePage;