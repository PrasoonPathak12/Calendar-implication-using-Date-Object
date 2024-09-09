import React, { useState,useEffect } from 'react'

function MonthComponent() {

  const[currentDate,setCurrentDate] = useState(new Date());
  const[today] = useState(new Date());

  const year = currentDate.getFullYear();
  const month  = currentDate.getMonth();

  const getDaysInMonth =(year,month)=> {return new Date(year, month+1, 0).getDate();}

  const getFirstDayOfMonth = (year, month)=>{return new Date(year,month,1).getDay()};

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const Calendar = () =>{
    const daysInmonth = getDaysInMonth(year,month);
    const firstDay = getFirstDayOfMonth(year,month);
  

  const daysArray = [];
  for(let day=0; day<firstDay; day++){
    daysArray.push(null);
  }

  for(let day=1; day <= daysInmonth; day++)
  {
    daysArray.push(day);
  }
  return daysArray;
  };

  const isToday = (day) => {
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };


  const calendarDays = Calendar();
  return (
    <div>
      <h1 className='monthYearHeading'>
        {monthNames[month]} , {year}
      </h1>
      <div className="calendar">
        <div className="calendar-header">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="calendar-grid">
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`calendar-cell ${isToday(day) ? 'highlight' : ''}`}
            >
              {day ? day : ""}
            </div>
          ))}
        </div>
        <div>
        <button onClick={goToPreviousMonth}><i class="fa-solid fa-arrow-left"></i></button>
        <button onClick={goToNextMonth}><i class="fa-solid fa-arrow-right"></i></button>
      </div>
      </div>
    </div>
  );
}

export default MonthComponent
