import { useContext, useState, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../Layout/Header/index';
import { BabyInfoContext } from '../../context/BabyInfoContext.js';
import { AlertContext } from '../../context/Alert';
import '../../styles/views/settings.scss';

interface BabyInfo {
  name: string;
  weight: string;
  length: number;
}

interface AlertContextType {
  showAlert: (message: string, severity: 'success' | 'error' | 'info' | 'warning') => void;
}

export default function Settings() {
  const { t, i18n } = useTranslation();
  const { babyInfo, setBabyInfo } = useContext(BabyInfoContext) as {
    babyInfo: BabyInfo;
    setBabyInfo: (info: BabyInfo) => void;
  };
  const { showAlert } = useContext(AlertContext) as AlertContextType;

  const [name, setName] = useState<string>(babyInfo.name);
  const [weight, setWeight] = useState<string>(babyInfo.weight);
  const [length, setLength] = useState<number>(babyInfo.length);
  const [selectedLanguage, setSelectedLanguage] = useState<string>(i18n.language);

  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang);
  };

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBabyInfo({ name, weight, length });

    i18n.changeLanguage(selectedLanguage);

    showAlert(t('Changes Saved'), 'success');
  };

  return (
    <div className="settings-container">
      <Header />
      <div className="language-switcher">
        <button onClick={() => handleLanguageChange('en')}>{t('English')}</button>
        <button onClick={() => handleLanguageChange('pt-BR')}>{t('Português')}</button>
        <button onClick={() => handleLanguageChange('es')}>{t('Español')}</button>
      </div>
      <h1>{t('Settings')}</h1>
      <div className="form-container">
        <form onSubmit={handleSave}>
          <div className="form-group">
            <label>{t('Name')}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t('Enter Name')}
            />
          </div>
          <div className="form-group">
            <label>{t('Weight')}</label>
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder={t('Enter Weight')}
            />
          </div>
          <div className="form-group">
            <label>{t('Length')}</label>
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              placeholder={t('Enter Length')}
            />
          </div>
          <button type="submit">{t('Save')}</button>
        </form>
      </div>
    </div>
  );
}
