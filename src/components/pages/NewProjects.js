import {useNavigate} from 'react-router-dom'

import ProjectForm from '../project/ProjectForm';
import styles from './NewProjects.module.css'

function NewProjects(){

    //vai permitir redirecionar nas paginas do sistema
    	const history = useNavigate()

        function createPost(project){
            // inicializar alguns produtos zerados
            // serçao preenchidos ao decorrer do tempo
            project.cost = 0
            project.services = []

            fetch("http://localhost:5000/projects",{
                method: "POST",
                headers:{
                    'Content-type': 'application/json',
                },
                //para mandar os dados pro servidor
                body: JSON.stringify(project)
            }).then((res)=> res.json())
            .then((data) =>{
                console.log(data)
                //redirect

                history('/projects',{
                    message:'criado com sucesso'
                })

            }).catch(err => console.log(err))
        }

        // handleSubmit Esta função receberá os dados do formulário se a validação do formulário for bem-sucedida.

    return(
        <div className={styles.newProjectContainer}>
            <h1>
                Criar Projeto
            </h1>
            <p> Crie seu projeto para depois adicionar os serviços</p>
        <ProjectForm handleSubmit={createPost} btnText="CriarProjeto"/>
        
        </div>
    )
}

export default NewProjects;