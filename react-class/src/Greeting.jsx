import Welcome from "./Welcome";

const Greeting = () => {
    function alertMyClick(){
        alert('Button is being clicked')
    }

    return <Welcome  name="ayanfe" btnName="click me" onAlert={alertMyClick}/>;
};

export default Greeting ;
