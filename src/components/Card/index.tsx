import { IconButton } from "@mui/material";
import { Edit as EditIcon, Star as StarIcon } from "@mui/icons-material";

interface CardProps {
    title: string;
    value: string;
    description: string;
    onEdit: () => void;
    onDelete: () => void;
}

const Card: React.FC<CardProps> = ({ title, value, description, onEdit, onDelete }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h3>{title}</h3>
                <div className="card-actions">
                    <IconButton onClick={onEdit}>
                        <EditIcon />
                    </IconButton>
                    <IconButton>
                        <StarIcon />
                    </IconButton>
                </div>
            </div>
            <p>{description}</p>
            <p><strong>{value}</strong></p>
            <button onClick={onDelete}>Deletar</button>
        </div>
    );
};

export default Card;