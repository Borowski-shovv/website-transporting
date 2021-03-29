import React, {useState, useEffect, useContext} from 'react';
import {Grid, LinearProgress, createStyles, Button } from '@material-ui/core';
import { FileHeader } from './FileHeader';
import axios from 'axios';
import {useField, FieldArray} from 'formik';
import appContext from '../../../../context/userContext';

export function SingleFileUploadWithProgress({file, onDelete, onUpload}) {
    const [progress, setProgress] = useState(0)
  
    const { setFormikImages } = useContext(appContext);

    useEffect(() => {
        async function upload() {
            // console.log('przekazywane zdjecie', file)

            const formData = new FormData();
            formData.append('file', file);

            //const fileData = {'name': file.name, 'path': file.path }
            const url = 'https://najtanszapaczkaszwecja.pl/api/upload';

            const ResponseUploadImg = await axios.post(url, formData, {
                auth: {
                  username: 'shovv', 
                  password: '$HOVV2020'
                },
                onUploadProgress : (progressEvent) => {
                    const progress = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total));
                    // Update state here
                    setProgress(progress);
                  },
            })
            console.log(ResponseUploadImg)
           
            const imagePath = ResponseUploadImg.data.files[0]
            //setNewImagePath(imagePath)
            
            // setFiles(imgName)
            // helpers.setValue((value) => [...value, imagePath]);
            setFormikImages((img) => [...img, imagePath])
        }

        upload();
        // console.log(imageNameFromB)
    }, []);

    return (   
      <Grid item xs={12} sm={6}>
            <FileHeader file={file} onDelete={onDelete} />
            <LinearProgress color="secondary" variant="determinate" value={progress} />
      </Grid>
    
    )
}

// function uploadFile(file, onProgress) {
//     // const url = 'https://api.cloudinary.com/v1_1/demo/image/upload';
//     const url = 'https://najtanszapaczkaszwecja.pl/api/upload';
//     // const key = 'docs_upload_example_us_preset';

//     return new Promise((res,rej) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open('POST', url);


//         //on success
//         xhr.onload = () => {
        
//             res();
//             console.log(res)
//             // console.log('co to jest', resp.files)
//         }

//         const username = "shovv";
//         const password = "$HOVV2020";

     
//         // const authData = btoa(username + ':' + password);
//         // console.log(authData);
//         // xhr.setRequestHeader('PHP_AUTH_USER', 'shovv' )
//         // xhr.setRequestHeader('PHP_AUTH_PASSWORD', '$HOVV2020' )

//         //on error
//         xhr.onerror = (evt) => rej(evt);

//         //on progress
//         xhr.upload.onprogress = (event) => {
//             if(event.lengthComputable) {
//                 const percentage = (event.loaded / event.total) * 100;
//                 onProgress(Math.round(percentage));
//             }
//         }

//         const formData = new FormData();

//         formData.append('file', file);

//         //key jest potrzebny do cloudinary
//         //formData.append('upload_preset', key);

//         xhr.send(formData)
//     })
// } 

