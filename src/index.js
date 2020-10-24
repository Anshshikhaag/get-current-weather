import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



// const fname="anshshika";
// const curdate= new Date(2020,10,1,15).getHours();
// const cssStyle = {};
// let pri='';
// if(curdate>=1 && curdate<=12)
// {
//   pri='Good Morning';
//   cssStyle.color='green';
// }
// else if(curdate>=13 && curdate<=18)
// {
//   pri='Good Afternoon';
//   cssStyle.color='orange';
// }
// else{
//    pri='Good night';
//   cssStyle.color='black';
// }
    

// function Card(props){
//         return(
//           <div className="cards">
//             <div className="card">
//             <img  className="card_img" src={props.imgsrc}/>
//             <div className="card_info">
//             <span className="card_category">{props.title}</span>
//             <h3 className="card_title">{props.sname}</h3>
//              <a href={props.link} target="_blank">
//           <button>Buy Now</button>
//         </a>
//       </div>
//     </div>
//   </div>
//         );
//   }
ReactDOM.render(
  // <>
  
  // {/* <h1>Hello Sir, <span style={cssStyle}>{pri}</span></h1> */}
  //   <Card
  //   imgsrc="/reacttut/images/brand.JPG"
  //   title="Luxuary Analog Watch"
  //   sname="Mr. Brand"
  //   link='https://www.amazon.in/Mr-Brand-Magnetic-Styish-Luxury/dp/B08DNZMN6V/ref=sr_1_13?crid=3TNV0T3KPRM7Y&dchild=1&keywords=watches+for+girls+stylish+latest&qid=1602054903&sprefix=wa%2Caps%2C579&sr=8-13'/>
  // </>,
 <App />,
  document.getElementById('root')
);


