import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function NotFound() {
    const { t } = useTranslation();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                textAlign: 'center',
                bgcolor: '#f0f0f0',
                padding: '2rem',
            }}
        >
            <ErrorOutlineIcon sx={{ fontSize: 100, color: '#d32f2f' }} />
            <Typography variant="h1" component="div" gutterBottom sx={{ color: '#d32f2f', fontWeight: 'bold' }}>
                404
            </Typography>
            <Typography variant="h5" gutterBottom>
                {t("not_found")}
            </Typography>
            <Typography variant="body1" gutterBottom>
                {t("It seems that the page you are looking for does not exist.")}
            </Typography>
            <Button
                variant="contained"
                component={Link}
                to="/AT-Desenvolvimento-Web-com-React/"
                sx={{
                    bgcolor: '#1e90ff',
                    color: '#FFFFFF',
                    marginTop: '1rem',
                    padding: '10px 20px',
                    fontSize: '1rem',
                    "&:hover": {
                        bgcolor: "#002244",
                    },
                }}
            >
                {t("go_back_home")}
            </Button>
        </Box>
    );
}
