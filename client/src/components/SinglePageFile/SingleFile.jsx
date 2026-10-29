import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SideNavbar from "../SideNavbar/SideNavbar";
import { useContext, useEffect, useState } from "react";
import FilesContext from "../../contexts/fileContext";
import socket from "../../config/socket";
import "./SingleFile.css";

const SingleFile = () => {
    const { file } = useParams();
    const { dataFiles, Loading, setDataFiles } = useContext(FilesContext);
    const [fileData, setFileData] = useState("");

    useEffect(() => {
        function handleUpdateData(data) {
            // if (file == data.file) {
                setDataFiles(prev => ({
                    ...prev,
                    [data.file]: data.fileData
                }));
            // }

        }

        socket.on("updateFile:Data", handleUpdateData)

        return(()=>
            socket.off("updateFile:Data", handleUpdateData)
        )
    }, [file])

    function handlingData(event) {
        const updatedData = event.target.value;

        setFileData(updatedData);

        socket.emit("updateFile:Data", {
            file,
            fileData: updatedData
        });
    }

    if (Loading) {
        return (
            <>
                <Navbar />
                <div className="HomeHeading">
                    <SideNavbar />
                    <p>Loading Data...</p>
                </div>
            </>
        );
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
                                value={fileData || dataFiles?.[file] || ""}
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