import Navbar from "../Navbar/Navbar";
import SideNavbar from "../SideNavbar/SideNavbar";

const SingleFile = () => {
    return (
        <>
            <Navbar />
            <div className='HomeHeading'>
                <SideNavbar />
                <div className='rightContent'>
                    <h1 id='heading'></h1>
                </div>
            </div>
        </>
    )
}

export default SingleFile;