// ModalAmamentacao.jsx
import React, { useState, useContext } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputAdornment,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ptBR } from 'date-fns/locale';
import { RecordContext } from '../../context/RecordContext';

interface ModalAmamentacaoProps {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
}

interface AmamentacaoRecord {
  inicio: Date | null;
  fim: Date | null;
  tipo: 'mamadeira' | 'seio';
  lado?: string; // Ajustado para opcional, compatível com FeedingRecord
  quantidade?: number; // Ajustado para opcional, compatível com FeedingRecord
  observacoes: string;
}

const ModalAmamentacao: React.FC<ModalAmamentacaoProps> = ({ open, onClose, onSave }) => {
  const context = useContext(RecordContext);

  if (!context) {
    throw new Error('RecordContext must be used within a RecordProvider');
  }

  const { addRecord } = context;

  const [startDateTime, setStartDateTime] = useState<Date | null>(null);
  const [endDateTime, setEndDateTime] = useState<Date | null>(null);
  const [amamentacaoTipo, setAmamentacaoTipo] = useState<'mamadeira' | 'seio'>('mamadeira');
  const [ladoSeio, setLadoSeio] = useState<string>('');
  const [quantidadeMamadeira, setQuantidadeMamadeira] = useState<number | null>(null);
  const [observacoes, setObservacoes] = useState<string>('');

  const handleSave = () => {
    const record: AmamentacaoRecord = {
      inicio: startDateTime,
      fim: endDateTime,
      tipo: amamentacaoTipo,
      lado: amamentacaoTipo === 'seio' ? ladoSeio : undefined,
      quantidade: amamentacaoTipo === 'mamadeira' ? quantidadeMamadeira || undefined : undefined,
      observacoes,
    };

    addRecord('amamentacao', record);
    onSave();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Registro de Amamentação</DialogTitle>
      <DialogContent>
        <div style={{ marginBottom: '20px' }}>
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
            <DateTimePicker
              label="Horário de início"
              value={startDateTime}
              onChange={(date) => setStartDateTime(date)}
              slots={{ textField: (props) => <TextField {...props} fullWidth /> }}
            />
          </LocalizationProvider>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
            <DateTimePicker
              label="Horário de término"
              value={endDateTime}
              onChange={(date) => setEndDateTime(date)}
              slots={{ textField: (props) => <TextField {...props} fullWidth /> }}
            />
          </LocalizationProvider>
        </div>

        <FormControl component="fieldset" style={{ marginBottom: '20px' }}>
          <RadioGroup value={amamentacaoTipo} onChange={(e) => setAmamentacaoTipo(e.target.value as 'mamadeira' | 'seio')}>
            <FormControlLabel value="mamadeira" control={<Radio />} label="Mamadeira" />
            <FormControlLabel value="seio" control={<Radio />} label="Seio" />
          </RadioGroup>
        </FormControl>

        {amamentacaoTipo === 'mamadeira' && (
          <TextField
            label="Quantidade (ml)"
            type="number"
            value={quantidadeMamadeira ?? ''}
            onChange={(e) => setQuantidadeMamadeira(e.target.value ? Number(e.target.value) : null)}
            fullWidth
            style={{ marginBottom: '20px' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">ml</InputAdornment>,
            }}
          />
        )}

        {amamentacaoTipo === 'seio' && (
          <FormControl component="fieldset" style={{ marginBottom: '20px' }}>
            <RadioGroup value={ladoSeio} onChange={(e) => setLadoSeio(e.target.value)}>
              <FormControlLabel value="direito" control={<Radio />} label="Direito" />
              <FormControlLabel value="esquerdo" control={<Radio />} label="Esquerdo" />
              <FormControlLabel value="ambos" control={<Radio />} label="Ambos" />
            </RadioGroup>
          </FormControl>
        )}

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
};

export default ModalAmamentacao;