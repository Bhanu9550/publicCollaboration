
import { useState, useEffect } from "react";
import FilesContext from "./fileContext";
import api from "../config/axios";

const FilesProvider = ({ children }) => {
    const [dataFiles, setDataFiles] = useState(null);
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        async function getFiles() {
            try {
                const res = await api.get("/getfiles");
                setDataFiles(res.data);
            } catch (err) {
                console.log(err.message);
            }finally{
                setLoading(false)
            }
        }

        getFiles();
    }, []);

    return (
        <FilesContext.Provider value={{dataFiles,  Loading, setDataFiles}}>
            {children}
        </FilesContext.Provider>
    );
};

export default FilesProvider;
