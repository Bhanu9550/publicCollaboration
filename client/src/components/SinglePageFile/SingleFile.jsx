import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SideNavbar from "../SideNavbar/SideNavbar";
import { useContext, useEffect } from "react";
import FilesContext from "../../contexts/fileContext";
import socket from "../../config/socket";
import "./SingleFile.css";

const SingleFile = () => {
    const { file } = useParams();
    const { dataFiles, setDataFiles } = useContext(FilesContext);

    useEffect(() => {
        function handleUpdateData(data) {
            setDataFiles(prev => ({
                ...prev,
                [data.file]: data.fileData
            }));

        }
        socket.on("updateFile:Data", handleUpdateData)

        return(()=>
            socket.off("updateFile:Data", handleUpdateData)
        )
    },[])

    function handlingData(event) {
        const updatedData = event.target.value;

        setDataFiles(prev => (
            {...prev, [file]: updatedData}
        ));

        socket.emit("updateFile:Data", {
            file,
            fileData: updatedData
        });
    }

    return (
        <>
            <Navbar />
            <div className="HomeHeading">
                <SideNavbar />

                <div className="fileRightContent">
                    <p id="heading">{file}</p>

                    <div className="container">
                        <div className="file-container">
                            <textarea
                                value={dataFiles?.[file] ?? ""}
                                onChange={handlingData}
                            />
                        </div>

                        <div className="controllers"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleFile;