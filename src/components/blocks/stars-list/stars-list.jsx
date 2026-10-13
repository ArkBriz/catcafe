import React from 'react';
import Title from '../../ui/title/title';
import Button from '../../ui/button/button';
import StarCard from '../../ui/star-card/star-card';
import './style.css';

function StarsList({stars}) {
    return (
        <section className="stars-list">
            <Title as="h2">Наши звезды</Title>
            <ul className="stars-list__list">
                <li className="stars-list__item">
                    <StarCard />
                </li>
            </ul>
            <Button minWidth={353}>Купить билет</Button>
        </section>
    );
}

export default StarsList;