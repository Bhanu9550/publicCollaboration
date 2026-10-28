import './CreateFilePage.css'
import SideNavbar from '../../components/SideNavbar/SideNavbar'
import Navbar from '../../components/Navbar/Navbar'

const CreateFilePage = ()=> {
    return (
        <>
            <Navbar />

            <div className="Hero">
                <SideNavbar />
                <div className="create-file">
                    <h1>Create File</h1>

                    <form>
                        <label>File Name</label>
                        <input
                            type="text"
                            placeholder="Enter file name"
                        />

                        <label>File Content</label>
                        <textarea placeholder="Enter file content"></textarea>

                        <button type="submit">Create File</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateFilePage
