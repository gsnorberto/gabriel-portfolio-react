import { Head, Container } from './style.js';

export const Header = () => {
    return (
        <Head>
            <Container>
                <ul className='menu-items'>
                    <li className='selected'>Início</li>
                    <li>Sobre</li>
                    <li>Formação e Cursos</li>
                    <li>Meus Projetos</li>
                    <li>Contato</li>
                </ul>
            </Container>
        </Head>
    );
}