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
            const url = 'https://transport-szwecja.com/api/upload';

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
