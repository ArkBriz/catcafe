import React from 'react';
import Title, {TitleSize} from '../title/title';
import './style.css';

function StarCard() {
    return (
        <article className="star-card">
            <div className="star-card__img-wrapper">
                <img 
                    className="star-card__img" 
                    src="https://i.ibb.co/27Mdx7k/Rectangle-4-2.png"
                    width={313}
                    height={320}
                    alt="изображение кота"
                />
                <span className="star-card__label">Ласковый</span>
            </div>
            <Title as="h3" size={TitleSize.SMALL}>Кошка Сью</Title>
            <p className="star-card__text">
                Эта юная красавица очень общительная и ласковая уже с первого дня, как приехала в кафе.
            </p>
        </article>
    );
}

export default StarCard;