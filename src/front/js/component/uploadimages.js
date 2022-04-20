import React from "react";
import { useState } from "react/cjs/react.production.min";


export const Upload = () => {
    const [fileInputState, setFileInputState] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
    }
    return (
        <div>
            <form>
                <input type="file" name="image" onChange={handleFileInputChange} value={fileInputState} className="form-iput" />
                <button className="btn" type="button">Submit</button>
            </form>
        </div>
    )
}