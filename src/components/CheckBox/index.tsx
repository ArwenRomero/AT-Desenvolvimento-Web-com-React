import React, { useState } from "react";
import "../../styles/components/checkbox.scss";

interface CheckboxProps {
    question: string;
    onChange: (value: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ question, onChange }) => {
    const [checked, setChecked] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        onChange(event.target.checked);
    };

    return (
        <div className="checkbox-container">
            <div className="checkbox-label">{question}</div>
            <div className="checkbox-group">
                <div className="checkbox">
                    <input
                        type="checkbox"
                        id="checkbox"
                        checked={checked}
                        onChange={handleChange}
                    />
                    <span>{checked ? "Sim" : "Não"}</span>
                </div>
            </div>
        </div>
    );
};

export default Checkbox;
