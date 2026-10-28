import Navbar from '../../components/Navbar/Navbar'
import SideNavbar from '../../components/SideNavbar/SideNavbar'
import "./HomePage.css"

const  HomePage = ()=> {
    return (
        <>
            <Navbar />
            <div className='HomeHeading'>
                <SideNavbar />
                <div className='rightContent'>
                    <h1 id='heading'>Public Collaboration Platform</h1>
                </div>
            </div>
        </>
    )
}

export default HomePage;