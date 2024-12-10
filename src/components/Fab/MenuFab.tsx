import React, { useState } from 'react';
import {
    Fab,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Button,
    Snackbar,
    Alert,
    AlertColor,
} from '@mui/material';
import { Add } from '@mui/icons-material';
import { FaBaby, FaBed, FaUtensils } from 'react-icons/fa';
import ModalFralda from './ModalFralda';
import ModalSono from './ModalSono';
import ModalComida from './ModalComida';
import '../../styles/components/fab.scss';

const MenuFab: React.FC = () => {
    const [openMainModal, setOpenMainModal] = useState<boolean>(false);
    const [openFraldaModal, setOpenFraldaModal] = useState<boolean>(false);
    const [openSonoModal, setOpenSonoModal] = useState<boolean>(false);
    const [openComidaModal, setOpenComidaModal] = useState<boolean>(false);
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
    const [snackbarMessage, setSnackbarMessage] = useState<string>('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<AlertColor>('success');

    const handleSnackbar = (message: string, severity: AlertColor): void => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setOpenSnackbar(true);
    };

    return (
        <div className="fab-container">
            <Fab
                color="primary"
                aria-label="add"
                className="fab"
                onClick={() => setOpenMainModal(true)}
            >
                <Add />
            </Fab>

            <Dialog open={openMainModal} onClose={() => setOpenMainModal(false)}>
                <DialogTitle>Escolha a ação</DialogTitle>
                <DialogContent>
                    <div className="action-icons">
                        <IconButton
                            onClick={() => {
                                setOpenMainModal(false);
                                setOpenFraldaModal(true);
                            }}
                        >
                            <FaBaby size={30} />
                        </IconButton>
                        <IconButton
                            onClick={() => {
                                setOpenMainModal(false);
                                setOpenSonoModal(true);
                            }}
                        >
                            <FaBed size={30} />
                        </IconButton>
                        <IconButton
                            onClick={() => {
                                setOpenMainModal(false);
                                setOpenComidaModal(true);
                            }}
                        >
                            <FaUtensils size={30} />
                        </IconButton>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenMainModal(false)}>Fechar</Button>
                </DialogActions>
            </Dialog>

            <ModalFralda
                open={openFraldaModal}
                onClose={() => setOpenFraldaModal(false)}
                onSave={() => handleSnackbar('Registro de fralda salvo com sucesso!', 'success')}
            />

            <ModalSono
                open={openSonoModal}
                onClose={() => setOpenSonoModal(false)}
                onSave={() => handleSnackbar('Registro de sono salvo com sucesso!', 'success')}
            />

            <ModalComida
                open={openComidaModal}
                onClose={() => setOpenComidaModal(false)}
                onSave={() => handleSnackbar('Registro de comida salvo com sucesso!', 'success')}
            />

            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={() => setOpenSnackbar(false)}
            >
                <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default MenuFab;
