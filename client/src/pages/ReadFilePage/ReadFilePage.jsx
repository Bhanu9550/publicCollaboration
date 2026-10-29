import { useContext } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SideNavbar from '../../components/SideNavbar/SideNavbar'
import FilesContext from '../../contexts/fileContext'
import { Link } from 'react-router-dom'
import "./ReadFilePage.css"


const ReadFilePage = () => {
    const { dataFiles, Loading } = useContext(FilesContext)
    let fileNames;
    if (!Loading) {
        fileNames = Object.keys(dataFiles)
    }
    console.log(fileNames)
    return (
        <>
            <Navbar />
            <div className='HomeHeading'>
                <SideNavbar />
                <div className='publicPageRightContent'>
                    <h1 id='heading'>All Files</h1>
                    <div className='FilesStyle'>
                        {Loading ? (
                            <p>Loading files...</p>
                        ) : fileNames.length > 0 ? (
                            <ul>
                                {fileNames.map((file) => (
                                    <li key={file}><Link to={`/publicFiles/${file}`}>{file}</Link></li>
                                ))}
                            </ul>
                        ) : (
                            <p>No Files</p>
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}

export default ReadFilePage;