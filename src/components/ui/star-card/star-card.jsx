import React from 'react';
import Title, {TitleSize} from '../title/title';
import StarLabel from '../star-label/star-label';
import './style.css';

function StarCard({name, about, image, feature}) {
    return (
        <article className="star-card">
            <div className="star-card__img-wrapper">
                <img 
                    className="star-card__img" 
                    src={image}
                    width={313}
                    height={320}
                    alt="изображение кота"
                />
                <StarLabel className="star-card__label" feature={feature}/>
            </div>
            <Title as="h3" size={TitleSize.SMALL}>{name}</Title>
            <p className="star-card__text">{about}</p>
        </article>
    );
}

export default StarCard;