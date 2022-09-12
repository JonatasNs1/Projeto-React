import styles from './Select.module.css'


// onChange ele é sempre executado quando fazemos alguma alteração no html
function Select({text, name, options, handleOnchange, value}){
    return(
        <div className={styles.formControl}>
            <label htmlFor={name}> {text}:   </label>
            <select name={name} id={name} onChange={handleOnchange} value={value || ''}>
                <option>Selecione uma opção</option>
                {options.map((options) => (
                <option value={options.id} key={options.id}>
                    {options.name}
                </option>
                ))}
            </select>
          
        </div>
    )
}

export default Select;