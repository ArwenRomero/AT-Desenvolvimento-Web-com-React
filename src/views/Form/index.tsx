import { useTranslation } from "react-i18next";

export default function Form() {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t("Form")}</h1>
        </div>
    );
}