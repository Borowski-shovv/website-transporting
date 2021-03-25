import React, {useState, useEffect, useCallback} from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import {useDropzone} from 'react-dropzone';
import {useField} from 'formik';
import {SingleFileUploadWithProgress} from './SingleFileUploadField';
import {UploadError} from './UploadError';

const useStyles = makeStyles((theme) => ({
    dropzone: {
      border: `2px dashed ${theme.palette.primary.main}`,
      borderRadius: theme.shape.borderRadius,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: theme.palette.background.default,
      height: 'auto',
      outline: 'none',
      padding: '30px',
    },
  }));

export function MultipleFileUploadField({name}) {
    const [_, __, helpers] = useField(name)
    const [files, setFiles] = useState([]);
    // const [ imgName, setImgName ] = useState([]);

    const classes = useStyles();

    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
            const mappedAcc = acceptedFiles.map(file => ({file,errors: []}))
            setFiles(curr => [...curr, ...mappedAcc, ...rejectedFiles]);
    }, [])

    useEffect(() => {
        helpers.setValue(files);
        // helpers.setTouched(true);
    }, [files])

    function onUpload(file, url) {
        setFiles((curr) => curr.map(fw => {
            if(fw.file === file) {
                return {...fw, url};
            }
            return fw;
        }));
    }

    function onDelete(file) {
        setFiles((curr) => curr.filter((fw) => fw.file !== file));
    }

    const {getRootProps, getInputProps} = useDropzone({onDrop, accept: 'image/*', maxSize: 2000 * 1024}) //300KB

  return (
    <>
        <Grid xs={12} item>
            <div {...getRootProps({className: classes.dropzone})}>
                <input {...getInputProps()} />
                <p>Przeciągnij i upuść zdjęcie w tym miejscu, lub naciśnij, aby wybrać zdjęcie.</p>
            </div>
        </Grid>
        {
            files.map((fileWrapper, i) => (
                <Grid key={i} item>
                    {
                        fileWrapper.errors.length ? 
                            (
                                <UploadError
                                    file={fileWrapper.file}
                                    errors={fileWrapper.errors}
                                    onDelete={onDelete}
                                /> 
                            ) : (
                                <SingleFileUploadWithProgress 
                                    onUpload={onUpload} 
                                    onDelete={onDelete} 
                                    key={i} 
                                    file={fileWrapper.file}
                                />
                            )
                    }
                </Grid>
                
            ))     
            
        }   
        {/* <p>wartość stanu: {imgName}</p> */}
        {/* {JSON.stringify(files)}     */}
    </>
  )
}