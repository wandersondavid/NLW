import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

interface InfoUsersProps {
    img:string;
    name: string;
    telefone: string;
    observacoes?: string;
}

const ListUser: React.FunctionComponent<InfoUsersProps> = (props) => {

    return (
        <article className="teacher-item">
            <header>
                <img src={props.img} alt="Proff"/>
                <div>
                    <strong>{props.name}</strong>
                </div>
            </header>
                <div className="content-info">
                    <div>
                        <strong>Telefone</strong>
                        <strong>Observações</strong>
                    </div>
                    <div>
                        <span>{props.telefone}</span>
                        <span>{props.observacoes}</span>
                    </div>
                </div>
            <footer>
                <button>
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Entar em contato
                </button>
            </footer>
        </article>
    )
}
export default ListUser;