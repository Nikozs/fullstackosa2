import React from 'react'

const Kurssit = (props) => {
    return (
        <div>
            {props.kurssit.map((kurssi) => 
            <Kurssi key={kurssi.id} kurssi={kurssi}/>
             )}
        </div>
        )
      

}

const Kurssi = (props) => {
    return (
        <div>
        <Otsikko  kurssi={props.kurssi} />
        <Sisalto  osat={props.kurssi.osat}/>
        <Yhteensa osat={props.kurssi.osat}/>
        </div>
    )
}

const Otsikko = (props) => {
    console.log(props.kurssi.nimi)
    return (
    <div><h1>{props.kurssi.nimi}</h1></div>
        )
}

const Sisalto = (props) =>{
    
    return (
    <div>
        {props.osat.map((osa) => 
        <Osa key={osa.nimi} osa={osa}/>
         )}
    </div>
    )
  }

const Osa = (props) => {
    
     return (
     <div>{props.osa.nimi} {props.osa.tehtavia}</div>
     )  
    }
    

const Yhteensa = (props) => {

    let yht = 0
    props.osat.map(p => yht=yht+p.tehtavia);
 
     return (
         <div>Yhteensä: {yht} tehtävää</div>
     );
} 

export default Kurssit