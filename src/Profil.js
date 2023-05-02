import React from 'react'

function Profil(props) {
  //   function handleName (name){
  //   alert(name)
  // }
  console.log(props);
  return (
    <div>
    {props.name}
    {props.bio}
    {props.professions}   
    {props.children}
    <button onClick={()=> props.handleName(props.name)}>click me</button>
    {/* <button onClick={() => props.handleName} />CLick me</button> */}
    </div>

   
  )
}

export default Profil