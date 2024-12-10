import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BabyInfoContext } from '../../context/BabyInfoContext.js';
import { RecordContext } from '../../context/RecordContext.tsx';
import BabyCard from '../../components/BabyCard/index.tsx';
import Card from '../../components/Card';
import { Snackbar, Tabs, Tab, Box, Typography, Alert, AlertColor } from '@mui/material';
import '../../styles/views/dashboard.scss';

interface DiaperRecord {
  estado: string;
  horario: Date | null;
  observacoes?: string;
}

interface SleepRecord {
  inicio: Date | null;
  fim: Date | null;
  observacoes?: string;
}

interface FeedingRecord {
  tipo: 'mamadeira' | 'peito';
  quantidade?: number;
  lado?: string;
  inicio: Date | null;
  fim: Date | null;
  observacoes?: string;
}

interface BabyInfo {
  name: string;
  weight: string;
  length: number;
}

interface Records {
  fralda: DiaperRecord[];
  sono: SleepRecord[];
  amamentacao: FeedingRecord[];
}

export default function Dashboard() {
  const { babyInfo } = useContext(BabyInfoContext) as { babyInfo: BabyInfo };
  const { records } = useContext(RecordContext) as { records: Records };
  const { t } = useTranslation();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<AlertColor>('success');
  const [tabIndex, setTabIndex] = useState(0);

  const showSnackbar = (message: string, severity: AlertColor) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setOpenSnackbar(true);
  };

  const handleTabChange = (newValue: number) => {
    setTabIndex(newValue);
  };

  const sortRecordsByDateDesc = <T extends { horario?: Date | null; inicio?: Date | null; fim?: Date | null }>(
    records: T[]
  ) =>
    [...records].sort((a, b) => {
      const dateA = new Date(a.horario || a.inicio || 0).getTime();
      const dateB = new Date(b.horario || b.inicio || 0).getTime();
      return dateB - dateA;
    });

  return (
    <div className="Dashboard">
      <div className="container">
        <Typography variant="h4" component="h1" gutterBottom>
          {t('Welcome to Dashboard')}
        </Typography>

        <BabyCard name={babyInfo.name} weight={babyInfo.weight} length={babyInfo.length} />

        <Box sx={{ width: '100%' }}>
          <Tabs
            value={tabIndex}
            onChange={(_, newValue) => handleTabChange(newValue)}
            aria-label={t('Category of Records')}
          >
            <Tab label={t('Diaper Changes')} />
            <Tab label={t('Sleep')} />
            <Tab label={t('Feeding')} />
          </Tabs>

          {tabIndex === 0 && (
            <div className="card-container">
              {sortRecordsByDateDesc(records.fralda).map((record, index) => (
                <Card
                  key={index}
                  title={t('Diaper Change')}
                  value={`Estado: ${record.estado}`}
                  description={`Horário: ${
                    record.horario ? new Date(record.horario).toLocaleString() : t('No date')
                  }\nObservações: ${record.observacoes || t('No observations')}`}
                  onEdit={() => showSnackbar(t('Editing diaper change'), 'info')}
                  onDelete={() => showSnackbar(t('Diaper deleted successfully'), 'error')}
                />
              ))}
            </div>
          )}

          {tabIndex === 1 && (
            <div className="card-container">
              {sortRecordsByDateDesc(records.sono).map((record, index) => (
                <Card
                  key={index}
                  title={t('Sleep')}
                  value={`Início: ${
                    record.inicio ? new Date(record.inicio).toLocaleString() : t('No start time')
                  } - Fim: ${record.fim ? new Date(record.fim).toLocaleString() : t('No end time')}`}
                  description={`Observações: ${record.observacoes || t('No observations')}`}
                  onEdit={() => showSnackbar(t('Editing sleep record'), 'info')}
                  onDelete={() => showSnackbar(t('Sleep record deleted successfully'), 'error')}
                />
              ))}
            </div>
          )}

          {tabIndex === 2 && (
            <div className="card-container">
              {sortRecordsByDateDesc(records.amamentacao).map((record, index) => (
                <Card
                  key={index}
                  title={t('Feeding')}
                  value={
                    record.tipo === 'mamadeira'
                      ? `Quantidade: ${record.quantidade || t('Unknown')} ml`
                      : `Lado: ${record.lado || t('Unknown')}`
                  }
                  description={`Início: ${
                    record.inicio ? new Date(record.inicio).toLocaleString() : t('No start time')
                  } - Fim: ${
                    record.fim ? new Date(record.fim).toLocaleString() : t('No end time')
                  }\nObservações: ${record.observacoes || t('No observations')}`}
                  onEdit={() => showSnackbar(t('Editing feeding record'), 'info')}
                  onDelete={() => showSnackbar(t('Feeding record deleted successfully'), 'error')}
                />
              ))}
            </div>
          )}
        </Box>
      </div>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
        <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
