

function Plashka(props) {
    return (
        <>
            <h1>{props.title}</h1>
            <button onClick={()=>{props.doSomething()}}>Test </button>
        </>
    );
}

export default Plashka;