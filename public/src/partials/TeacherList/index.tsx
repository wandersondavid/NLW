import React from 'react';

import PageHeader from '../../components/PageHeader';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponiveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="weel_day">Dia da semana</label>
                        <input type="text" id="weel_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/35749537?s=460&u=48c4a235c95b849dbcf4c9169d2fa2ca8f20279a&v=4" alt="Wanderson David Proff"/>
                        <div>
                            <strong>Wanderson David</strong>
                            <span>Matématica</span>
                        </div>
                    </header>
                    <p>
                        Intrutor apaixonado no que faz, buscando sempre melhora o conhecimento
                        <br /><br />
                        Buscando sempre tazer conteudo de qualidade e melhores especicaçao, para que vc aluno entanda da
                        melhora forma possivel o que ta sendo passado.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 100,00</strong>
                        </p>
                        <button>
                                <img src={whatsappIcon} alt="Whatsapp"/>
                                Entar em contato
                            </button>
                    </footer>
                </article>
            </main>
        </div>
    )
}

export default TeacherList;