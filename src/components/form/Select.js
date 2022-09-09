import styles from './Select.module.css'

function Select({text, name, options, handleOnchange, value}){
    return(
        <div className={styles.formControl}>
            <label htmlFor={name}> {text}:   </label>
            <select name={name} id={name}>
                <option>Selecione uma opção</option>
            </select>
          
        </div>
    )
}

export default Select;