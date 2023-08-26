function Greeting(props) { 
    // const messageJsx = props.children ? <h3>Hello {props.children}!</h3> : "Hello World";

    let messageJsx = <h3>Hello World</h3>;
    if(props.name)
        messageJsx = <h3>Hello {props.name}</h3>

    return (
        <div>
            {messageJsx}
            <p>
                {props.children}
            </p>
        </div>
    )
}

export default Greeting;