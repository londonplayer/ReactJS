const TemplateExpressions = () => {

    const name = 'Vitor'
    const data = {
        age: 21,
        job: 'Programmer'
    }

    return (
        <div>
            <p>Hi, {name}!</p>
            <p>You are a {data.job}</p>
            <p>{4 + 4}</p>
            <p>{console.log('JSX react')}</p>
        </div>
    )
}

export default TemplateExpressions