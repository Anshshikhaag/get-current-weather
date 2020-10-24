import React from 'react';

const curdate= new Date(2020,10,1,19).getHours();
         const cssStyle = { };
         let pri=' ';
         if(curdate>=1 && curdate<=12)
         {
          pri='Good Morning';
           cssStyle.color='green';
         }
         else if(curdate>=13 && curdate<=18)
        {
          pri='Good Afternoon';
           cssStyle.color='orange';
         }
         else{
            pri='Good night';
           cssStyle.color='black';
         }
function List()
{
    return(
        <>
        <div>
   <h1>Hello Sir, <span style={cssStyle}>{pri}</span></h1> 
      </div>
      </>
    );
}

export default List;