import { useState } from 'react';

import * as S from './style';

const ReminderCard = () => {

    const [showCard, setShowCard] = useState(true);

    const handleClickShowCard = () => {
        setShowCard(false)
    };

    return (
        <>
            {
                showCard ? <>
                    <S.Container>
                        <h1>Endormarketing</h1>
                        <p>Endomarketing está relacionado às ações de treinamento ou qualificação dos colaboradores da empresa visando um melhor serviço para o cliente. Marketing interno, devido ao nome, é usualmente confundido com Endomarketing mesmo sendo conceitos diferentes.</p>
                        <input type="button" value="DISPENSAR" onClick={handleClickShowCard} />
                    </S.Container>
                </>
                    : null}

        </>
    )
};

export default ReminderCard;