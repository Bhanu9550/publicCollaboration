import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SideNavbar from "../SideNavbar/SideNavbar";
import "./SingleFile.css"
import { useContext } from "react";
import FilesContext from "../../contexts/fileContext";

const SingleFile = () => {
    const {file} = useParams()
    const {dataFiles} = useContext(FilesContext)
    let fileData = ""
    if(dataFiles && dataFiles[file]){
        fileData = dataFiles[file]
    }

    return (
        <>
            <Navbar />
            <div className='HomeHeading'>
                <SideNavbar />
                <div className='fileRightContent'>
                    <p id='heading'>{file}</p>
                    <div className="container">
                        <div className="file-container">
                            <textarea name="" id="" cols={100} rows={10} defaultValue={fileData}></textarea>
                        </div>
                        <div className="controllers"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleFile;