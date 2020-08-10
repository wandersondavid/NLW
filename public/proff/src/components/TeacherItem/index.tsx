import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem (){
    return (
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
    )
}
export default TeacherItem;