import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ptBR } from 'date-fns/locale';
import { useRecordContext } from '../../context/RecordContext';

interface ModalFraldaProps {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
}

interface FraldaRecord {
  estado: string;
  horario: Date | null;
  observacoes: string;
}

const ModalFralda: React.FC<ModalFraldaProps> = ({ open, onClose, onSave }) => {
  const { addRecord } = useRecordContext();
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
  const [fraldaState, setFraldaState] = useState<string>('');
  const [observacoes, setObservacoes] = useState<string>('');

  const handleSave = () => {
    const record: FraldaRecord = {
      estado: fraldaState,
      horario: selectedDateTime,
      observacoes,
    };

    addRecord('fralda', record);
    onSave();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Registro de Fralda</DialogTitle>
      <DialogContent>
        <div>
          <p>Estado da Fralda:</p>
          <div className="fralda-options">
            {['Suja de Urina', 'Suja de Fezes', 'Ambas', 'Limpa'].map((estado) => (
              <Button
                key={estado}
                variant="outlined"
                onClick={() => setFraldaState(estado)}
                style={{
                  margin: '0 5px',
                  borderColor: fraldaState === estado ? '#45b1f5' : '',
                  color: fraldaState === estado ? '#45b1f5' : '',
                }}
              >
                {estado}
              </Button>
            ))}
          </div>
        </div>
        <div style={{ marginTop: '20px' }}>
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
            <DateTimePicker
              label="Horário da troca"
              value={selectedDateTime}
              onChange={(date) => setSelectedDateTime(date)}
              slots={{ textField: (props) => <TextField {...props} fullWidth /> }}
            />
          </LocalizationProvider>
        </div>
        <TextField
          label="Observações"
          multiline
          rows={4}
          value={observacoes}
          onChange={(e) => setObservacoes(e.target.value)}
          fullWidth
          style={{ marginTop: '20px' }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleSave} color="primary" variant="contained">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalFralda;
