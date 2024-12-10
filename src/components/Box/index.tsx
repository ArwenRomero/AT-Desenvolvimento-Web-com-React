import "../../styles/components/box.scss";

interface BoxProps {
    title: string;
    value: string | number;
    description?: string;
}

const Box: React.FC<BoxProps> = ({ title, value, description }) => {
    return (
        <div className="box">
            <div className="box-title">{title}</div>
            <div className="box-value">{value}</div>
            {description && <div className="box-description">{description}</div>}
        </div>
    );
};

export default Box;
