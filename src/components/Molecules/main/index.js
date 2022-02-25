import ReminderCard from '../reminderCard';
import * as S from './style';

const Main = () => {
    return (
        <>
            <S.Container>
                <S.Content>
                    <S.Navigation>
                        <h1>
                            Endomarketing
                        </h1>
                        <S.SelecetedOption>
                            <button>Tipo</button>
                            <button>Criar</button>
                        </S.SelecetedOption>
                        <ReminderCard />
                    </S.Navigation>
                    
                </S.Content>
            </S.Container>
        </>
    )
};

export default Main