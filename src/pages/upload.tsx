import { Box, Button, ThemeProvider, Typography, styled } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import viewTheme from "@/theme/primary";
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import api from "@/api/api";
import { useRouter } from "next/router";


export default function upload() {

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const [imagePreview, setImagePreview] = React.useState<any>(null);
    const [imageFile, setImageFile] = React.useState<File | null>(null);

    const router = useRouter();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        console.log(imagePreview instanceof File);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageFile(file);
                setImagePreview(reader.result);
            }
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null)
            setImageFile(null);
        }
    }

    const submitData = () => {
        if (imageFile) {
            api.uploadMedia(imageFile, new Date())
                .then(
                    d => {
                        router.push("/dashboard");
                    }
                )
        }
    }

    return (
        <Box sx={{ m: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <ThemeProvider theme={viewTheme}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center', gap: '30px' }}>
                    <Typography variant="h2" sx={{ textAlign: 'center' }}>Upload Image</Typography>
                    <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                        Upload file
                        <VisuallyHiddenInput type="file" accept="image/*" onChange={handleImageChange} />
                    </Button>

                    <img src={imagePreview} style={{ maxWidth: '500px', maxHeight: '500px' }}></img>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker />
                        <TimePicker />
                    </LocalizationProvider>

                    <Button variant="contained" onClick={submitData}>Submit</Button>
                </Box>
            </ThemeProvider>
        </Box>
    );
}