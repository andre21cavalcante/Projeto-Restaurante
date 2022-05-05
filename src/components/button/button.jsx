function Button({nome,click}){
    return(
        <button onClick={click}>
            {nome}
        </button>
    )

}

export default Button;