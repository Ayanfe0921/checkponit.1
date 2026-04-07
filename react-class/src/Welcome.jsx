 import react from 'react';
const Welcome = ({name = 'Ayanfe',btnName, onAlert}) => {
    const style = {color: 'red'}
function handleClick ( ){ 
    console.log('this link is clicked');
}
  return (
    <>
    <div style={style}>hey, {name} </div>
    <button onClick={onAlert}>{btnName}</button>
    <a href="#" onClick={handleClick}>
        click the link
    </a>
    </>
  );
};

export default Welcome ;