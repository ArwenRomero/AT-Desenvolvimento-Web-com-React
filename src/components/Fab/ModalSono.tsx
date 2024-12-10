import { useState, useContext } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ptBR } from 'date-fns/locale';
import { RecordContext } from '../../context/RecordContext.tsx';

interface ModalSonoProps {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
}

interface SleepRecord {
  inicio: Date | null;
  fim: Date | null;
  observacoes: string;
}

export default function ModalSono({ open, onClose }: ModalSonoProps) {
  const { addRecord } = useContext(RecordContext) as { addRecord: (type: string, record: SleepRecord) => void };

  const [startDateTime, setStartDateTime] = useState<Date | null>(null);
  const [endDateTime, setEndDateTime] = useState<Date | null>(null);
  const [observacoes, setObservacoes] = useState<string>('');

  const handleSave = () => {
    addRecord('sono', {
      inicio: startDateTime,
      fim: endDateTime,
      observacoes,
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Registro de Sono</DialogTitle>
      <DialogContent>
        <div style={{ marginBottom: '20px' }}>
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
            <DateTimePicker
              label="Horário de início"
              value={startDateTime}
              onChange={(date) => setStartDateTime(date)}
              slotProps={{ textField: { fullWidth: true } }}
            />
          </LocalizationProvider>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
            <DateTimePicker
              label="Horário de término"
              value={endDateTime}
              onChange={(date) => setEndDateTime(date)}
              slotProps={{ textField: { fullWidth: true } }}
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
}
