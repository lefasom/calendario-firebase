import React, { useState, useEffect } from 'react'
import { db } from './firebase.js'
import { collection, deleteDoc, getDoc, getDocs, addDoc, doc } from "firebase/firestore";

import './App.css'

function App() {
	// const [lunes, setLunes] = useState('')
	// const [martes, setMartes] = useState('')
	// const [miercoles, setMiercoles] = useState('')
	// const [jueves, setJueves] = useState('')
	// const [viernes, setViernes] = useState('')
	// const [sabado, setSabado] = useState('')
	// const [domingo, setDomingo] = useState('')
	// const [name, setName] = useState('')

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value })
	}

	const initialStateValues = {
		name: '',
		lunes: '',
		martes: '',
		miercoles: '',
		jueves: '',
		viernes: '',
		sabado: '',
		domingo: ''
	}

	const collectionName = "calendario"
	const [registros, setRegistros] = useState([])
	const [ values, setValues ] = useState(initialStateValues)

	const handleSubmit = async (e) => {
		e.preventDefault()
		await addDoc(collection(db, collectionName), values);
	}
	  	

	const getLinks = async () => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const docs = [];

    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });

    setRegistros(docs);
  
  };


	useEffect(() => {
		getLinks()
	})

  const onDeleteLink = async (id) => {
      await deleteDoc(doc(db, collectionName, id))
  };

 //  let tamano = 0

	// let lunesManana = 0
	// let lunesTarde = 0
	// let lunesNoche = 0

	// let martesManana = 0
	// let martesTarde = 0
	// let martesNoche = 0

	// let miercolesManana = 0
	// let miercolesTarde = 0
	// let miercolesNoche = 0

	// let juevesManana = 0
	// let juevesTarde = 0
	// let juevesNoche = 0

	// let viernesManana = 0
	// let viernesTarde = 0
	// let viernesNoche = 0

	// let sabadoManana = 0
	// let sabadoTarde = 0
	// let sabadoNoche = 0

	// let domingoManana = 0
	// let domingoTarde = 0
	// let domingoNoche = 0

	
	// {registro.forEach((val)=>{
	// 	tamano++
	// })}
 //  const estadisticas = () => {
	// 	{registro.forEach((val)=>{
	// 			// alert(val.lunes)
	// 		if(val.lunes == 'Mañana'){
	// 				lunesManana++
	// 	  }else if(val.lunes == 'Tarde'){
	// 				lunesTarde++
	// 	  }else if(val.lunes == 'Noche'){
	// 				lunesNoche++
	// 	  }
	// 	  if(val.martes == 'Mañana'){
	// 				martesManana++
	// 	  }else if(val.martes == 'Tarde'){
	// 				martesTarde++
	// 	  }else if(val.martes == 'Noche'){
	// 				martesNoche++
	// 	  }
	// 	  if(val.miercoles == 'Mañana'){
	// 				miercolesManana++
	// 	  }else if(val.miercoles == 'Tarde'){
	// 				miercolesTarde++
	// 	  }else if(val.miercoles == 'Noche'){
	// 				miercolesNoche++
	// 	  }
	// 	  if(val.jueves == 'Mañana'){
	// 				juevesManana++
	// 	  }else if(val.jueves == 'Tarde'){
	// 				juevesTarde++
	// 	  }else if(val.jueves == 'Noche'){
	// 				juevesNoche++
	// 	  }
	// 	  if(val.viernes == 'Mañana'){
	// 				viernesManana++
	// 	  }else if(val.viernes == 'Tarde'){
	// 				viernesTarde++
	// 	  }else if(val.viernes == 'Noche'){
	// 				viernesNoche++
	// 	  }
	// 	  if(val.sabado == 'Mañana'){
	// 				sabadoManana++
	// 	  }else if(val.sabado == 'Tarde'){
	// 				sabadoTarde++
	// 	  }else if(val.sabado == 'Noche'){
	// 				sabadoNoche++
	// 	  }
	// 	  if(val.domingo == 'Mañana'){
	// 				domingoManana++
	// 	  }else if(val.domingo == 'Tarde'){
	// 				domingoTarde++
	// 	  }else if(val.domingo == 'Noche'){
	// 				domingoNoche++
	// 	  }
								
	// 	})}
 //  }

 
	return (
		<>
		<h1>Formulario</h1>
			<form onSubmit={handleSubmit}>
				<div className="containerpro">
					<div className="container">
						<div className="dias">
							 <h4>Lunes</h4>
							 <select name='lunes' onChange={handleInputChange}>
								 <option>Ninguno</option>
								 <option>Mañana</option>
								 <option>Tarde</option>
								 <option>Noche</option>
							 </select>
						</div>
				  	<div className="dias">
							 <h4>Martes</h4>
							 <select name='martes' onChange={handleInputChange}>
								 <option>Ninguno</option>
								 <option>Mañana</option>
								 <option>Tarde</option>
								 <option>Noche</option>
							 </select>
						</div>
						<div className="dias">
							 <h4>Miercoles</h4>
							 <select name='miercoles' onChange={handleInputChange}>
								 <option>Ninguno</option>
								 <option>Mañana</option>
								 <option>Tarde</option>
								 <option>Noche</option>
							 </select>
						</div>
						<div className="dias">
							 <h4>Jueves</h4>
							 <select name='jueves' onChange={handleInputChange}>
								 <option>Ninguno</option>
								 <option>Mañana</option>
								 <option>Tarde</option>
								 <option>Noche</option>
							 </select>
						</div>
						<div className="dias">
							 <h4>Viernes</h4>
							 <select name='viernes' onChange={handleInputChange}>
								 <option>Ninguno</option>
								 <option>Mañana</option>
								 <option>Tarde</option>
								 <option>Noche</option>
							 </select>
						</div>
						<div className="dias">
							 <h4>Sabado</h4>
							 <select name='sabado' onChange={handleInputChange}>
								 <option>Ninguno</option>
								 <option>Mañana</option>
								 <option>Tarde</option>
								 <option>Noche</option>
							 </select>
						</div>
						<div className="dias">
							 <h4>Domingo</h4>
							 <select name='domingo' onChange={handleInputChange}>
								 <option>Ninguno</option>
								 <option>Mañana</option>
								 <option>Tarde</option>
								 <option>Noche</option>
							 </select>
						</div>
					</div>
					<div className="miName">
					  <h4>Mi Nombre</h4>
						<input name='name' type="text" onChange={handleInputChange}/>
						<button>Registrar</button>
					</div>
				</div>
			</form>
			
					<h2>Registrados</h2>
					<div className="nombre">
					{registros.map((val)=>{
						return(
								<div key={val.id}>
									<p>{val.name}</p>
									<button onClick={()=>onDeleteLink(val.id)}>X</button>
								</div>
						)
					})}
					</div>
				{/*		
					<h2>Coincidencias</h2>
					<div className="containerpro">
					<div className="container">

						<div className="dias">
							<h4>Lunes</h4>
							<div>
							  Mañana: {parseInt(lunesManana/tamano*100) || 0 }%<br/>
							  Tarde: {parseInt(lunesTarde/tamano*100) || 0 }%<br/>
							  Noche: {parseInt(lunesNoche/tamano*100) || 0 }%<br/>
							</div>
						</div>
						<div className="dias">
							<h4>Martes</h4>
							<div>
							  Mañana: {parseInt(martesManana/tamano*100) || 0 }%<br/>
							  Tarde: {parseInt(martesTarde/tamano*100) || 0 }%<br/>
							  Noche: {parseInt(martesNoche/tamano*100) || 0 }%<br/>
							</div>
						</div>
						<div className="dias">
							<h4>Miercoles</h4>
							<div>
							  Mañana: {parseInt(miercolesManana/tamano*100) || 0 }%<br/>
							  Tarde: {parseInt(miercolesTarde/tamano*100) || 0 }%<br/>
							  Noche: {parseInt(miercolesNoche/tamano*100) || 0 }%<br/>
							</div>
						</div>
						<div className="dias">
							<h4>Jueves</h4>
							<div>
							  Mañana: {parseInt(juevesManana/tamano*100) || 0 }%<br/>
							  Tarde: {parseInt(juevesTarde/tamano*100) || 0 }%<br/>
							  Noche: {parseInt(juevesNoche/tamano*100) || 0 }%<br/>
							</div>
						</div>
						<div className="dias">
							<h4>Viernes</h4>
							<div>
							  Mañana: {parseInt(viernesManana/tamano*100) || 0 }%<br/>
							  Tarde: {parseInt(viernesTarde/tamano*100) || 0 }%<br/>
							  Noche: {parseInt(viernesNoche/tamano*100) || 0 }%<br/>
							</div>
						</div>
						<div className="dias">
							<h4>Sabado</h4>
							<div>
							  Mañana: {parseInt(sabadoManana/tamano*100) || 0 }%<br/>
							  Tarde: {parseInt(sabadoTarde/tamano*100) || 0 }%<br/>
							  Noche: {parseInt(sabadoNoche/tamano*100) || 0 }%<br/>
							</div>
						</div>
						<div className="dias">
							<h4>Domingo</h4>
							<div>
							  Mañana: {parseInt(domingoManana/tamano*100) || 0 }%<br/>
							  Tarde: {parseInt(domingoTarde/tamano*100) || 0 }%<br/>
							  Noche: {parseInt(domingoNoche/tamano*100) || 0 }%<br/>
							</div>
						</div>
					</div>
					</div>*/}


			 
		</>
	
	)
}

export default App
