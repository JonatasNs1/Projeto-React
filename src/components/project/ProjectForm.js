import {useEffect, useState} from 'react';


import styles from './ProjectForm.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import Submit from '../form/Submit';


function ProjectForm({handleSubmit, btnText, projectData}){

    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {})

       /* // vai ser chamado assim que a pagina é atualizada
// e toda vez que a pagina é montada */
// ele guarda o que tem que fazer
    useEffect(() => {
        fetch('http://localhost:5000/categories', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setCategories(data)
          })
      }, [])

      const submit = (e) =>{
        // nao deixo o formulario ser executado
        e.preventDefault()
        // console.log(project)
        // executa o metodo que foi passado pela props e passo o projeto que ta cadastrado
        // como argumento
        handleSubmit(project)
      }

      function handleChange(e){
        setProject({...project, [e.target.name] : e.target.value})
        console.log(project)
      }


      function handleCategory(e){
        setProject({...project, category:{
          id: e.target.value,
          name: e.target.options[e.target.selectedIndex].text,
        },
      })
       
      }

//    console.log(categories);
    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text"
                text="Nome do Projeto"
                name="name"
                placeholder="Nome do Projeto"
                handleOnchange={handleChange}
                value={project.name ? project.name : ''}
                />
             <Input 
                type="number"
                text="Orçamento do Projeto"
                name="budget"
                placeholder="Insira o Orçamento total"
                handleOnchange={handleChange}
                value={project.budget ? project.budget : ''}
                />
                <Select
                    name="category_id" text="Selecione a categoria"
                options={categories}
                handleOnchange={handleCategory}
                value={project.category ? project.category.id : ''}
               />
                <Submit text={btnText}/>
        </form>
        )
}

export default ProjectForm;