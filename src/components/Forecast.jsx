import React from 'react'

const Forecast = ({title, data}) => {

 let handleDaysWeek = (data)=> {
  for (let i = 0; i < data[i].length; i++) {
    if(data === 'Monday') return 'Lunes';
    if(data === 'Tuesday') return 'Martes';
    if(data === 'Wednesday') return 'Miércoles';
    if(data === 'thursday') return 'Jueves';
    if(data === 'Friday') return 'Viernes';
    if(data === 'Saturday') return 'Sábado';
    if(data === 'Sunday') return 'Domingo';
    else return data
  }
  console.log(data);
    
 }
 

 

  return (
    <div className='glassCard my-2'>
      <div className='flex items-center justify-start mt-6'>
        <p className='font-medium uppercase'>{title}</p>
      </div>
      <hr className='my-1' />
      <div className='flex items-center justify-between'>
        {
          data.map((d, index) => (            
            <div key={index}
              className='flex flex-col items-center justify-center '
            >
              
              <p className='font-light text-sm'>{handleDaysWeek(d.title)}</p>
              <img src={d.icon} alt="" />
              <p className='font-medium'>{`${d.temp.toFixed()}°`}</p>
              
          </div>
          
          ))
        }
       
      </div>
    </div>
  )
}

export default Forecast