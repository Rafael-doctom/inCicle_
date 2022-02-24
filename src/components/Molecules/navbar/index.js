import * as S from './style';
import { ReactComponent as IncicleIcon } from '../../../assets/images/home/incicle.svg'

const Navbar = () => {
    return (
        <>
            <S.Container>
                <S.Content>
                    <IncicleIcon />
                </S.Content>
            </S.Container>
        </>
    )
};

export default Navbar