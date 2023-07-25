const Events = () => {

    const handleMyEvent = (event) => {
        console.log(event)
        console.log('Activated!')
    }

    const renderingSomething = (x) => {
        if(x) {
            <h1>Rendering this!</h1>
        } else {
            <h1>Can also render this!</h1>
        }

    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Click Here!</button>
            </div>
            <div>
                <button onClick={() => console.log('Clicked')}>Click here too!</button>
            </div>
            <div>
                <button onClick={() => {
                    if(true) {
                        console.log('Wrong function')
                    }
                }}>Click here, please!</button>
            </div>
            <div>
                {renderingSomething(true)}
                {renderingSomething(false)}
            </div>
        </div>
    );
};

export default Events


// if "handleMyEvent()", using the parentesis, the function is executed once the code is loaded and not by the button click