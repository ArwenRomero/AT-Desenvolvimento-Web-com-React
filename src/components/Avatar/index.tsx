import { useState, useEffect, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Snackbar, Alert } from '@mui/material';
import '../../styles/components/avatar.scss';

type SnackbarSeverity = 'success' | 'error' | 'warning' | 'info';

export default function Avatar(): JSX.Element {
    const { t } = useTranslation();

    const [image, setImage] = useState<string | null>(null);
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
    const [snackbarMessage, setSnackbarMessage] = useState<string>('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<SnackbarSeverity>('success');

    useEffect(() => {
        const savedImage = localStorage.getItem('baby-avatar');
        if (savedImage) {
            setImage(savedImage);
        }
    }, []);

    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
                const result = e.target?.result as string | null;
                if (result) {
                    setImage(result);
                    localStorage.setItem('baby-avatar', result);

                    setSnackbarMessage(t('Photo updated successfully!'));
                    setSnackbarSeverity('success');
                    setOpenSnackbar(true);
                }
            };

            reader.readAsDataURL(file);
        } else {
            setSnackbarMessage(t('Error uploading the photo.'));
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
        }
    };

    const handleCloseSnackbar = (): void => {
        setOpenSnackbar(false);
    };

    return (
        <div className="avatar-container">
            <div className="avatar">
                {image ? (
                    <img src={image} alt={t('Baby photo')} />
                ) : (
                    <div className="avatar-placeholder">{t('Baby photo')}</div>
                )}
            </div>
            <label className="upload-button">
                {t('Change Photo')}
                <input type="file" accept="image/*" onChange={handleImageUpload} />
            </label>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
}
