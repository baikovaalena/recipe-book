import React, { useState } from 'react';
import { Wine } from '../../../../types/IWine';

interface IProps {
  wine: Wine;
}

const WineCard = ({ wine }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      {isOpen ? (
        <div className="wine-description">
          <p className="description">{wine.description}</p>
        </div>
      ) : (
        <div className="wine-cards" key={wine.id}>
          <h2 className="wine-title">{wine.title}</h2>
          <img src={wine.imageUrl} alt="image-wine" className="wine-img" />
        </div>
      )}
    </div>
  );
};

export default WineCard;
