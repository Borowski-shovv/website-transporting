import React, {useState, useEffect} from 'react';
import {Grid, LinearProgress, createStyles } from '@material-ui/core';
import { FileHeader } from './FileHeader';

export function SingleFileUploadWithProgress({file, onDelete, onUpload}) {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        async function upload() {
            const url = await uploadFile(file, setProgress );
            console.log('url', url)
            onUpload(file, url)
        }

        upload();
    }, []);

    return (   
      <Grid item xs={12} sm={6}>
            <FileHeader file={file} onDelete={onDelete} />
            <LinearProgress color="secondary" variant="determinate" value={progress} />
      </Grid>
    
    )
}

function uploadFile(file, onProgress) {
    // const url = 'https://api.cloudinary.com/v1_1/demo/image/upload';
    const url = 'https://najtanszapaczkaszwecja.pl/api/users/upload';
    const key = 'docs_upload_example_us_preset';

    return new Promise((res,rej) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);

        xhr.onload = () => {
            const resp = JSON.parse(xhr.responseText);
            res(resp.secure_url);
            console.log(resp.files)
        }

<<<<<<< Updated upstream
=======
        // const username = "shovv";
        // const password = "$HOVV2020";

        // const authData = base64_encode(username + ':' + password);

        // xhr.setRequestHeader("Authorization", "Basic " + authData)
        // xhr.setRequestHeader("content-type", "application/json");

>>>>>>> Stashed changes
        xhr.onerror = (evt) => rej(evt);

        xhr.upload.onprogress = (event) => {
            if(event.lengthComputable) {
                const percentage = (event.loaded / event.total) * 100;
                onProgress(Math.round(percentage));
            }
        }

        const formData = new FormData();

        formData.append('file', file);

        //key jest potrzebny do cloudinary
        formData.append('upload_preset', key);

        xhr.send(formData)
    })
} 

