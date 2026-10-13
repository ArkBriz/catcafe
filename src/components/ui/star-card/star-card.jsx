import React from 'react';
import Title, {TitleSize} from '../title/title';
import './style.css';

function StarCard(star) {
    return (
        <article className="star-card">
            <div className="star-card__img-wrapper">
                <img 
                    className="star-card__img" 
                    src={star.image}
                    width={313}
                    height={320}
                    alt="изображение кота"
                />
                <span className="star-card__label">{star.feature}</span>
            </div>
            <Title as="h3" size={TitleSize.SMALL}>{star.name}</Title>
            <p className="star-card__text">{star.about}</p>
        </article>
    );
}

export default StarCard;