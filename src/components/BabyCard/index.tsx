    import React from "react";
    import PropTypes from "prop-types";
    import "../../styles/components/BabyCard.scss";

    interface BabyCardProps {
    name: string;
    weight: string;
    length: number;
    }

    const BabyCard: React.FC<BabyCardProps> = ({ name, weight, length }) => {
    return (
        <div className="baby-card">
        <h3>{name}</h3>
        <p>Peso: {weight}</p>
        <p>Comprimento: {length} cm</p>
        </div>
    );
    };

    BabyCard.propTypes = {
    name: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    length: PropTypes.number.isRequired,
    };

    export default BabyCard;
