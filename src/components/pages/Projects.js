import { useLocation } from 'react-router-dom';

import Message from '../layout/Message';

function Projects(){

   

    const location = useLocation()
    let message = ''
    if (location.state) {
      message = location.state.message
    }
  

    //Mensagens do sistema
    return(
        <div>
           <h1> Meu Projetos</h1>
           {message && <Message msg={message}  type="success"/>}
        </div>
    )
}

export default Projects;