import React, { useState, ChangeEvent } from 'react';
import calendar_pay from '../../images/calendar-pay.svg';
import './Calendar.css';

const subjects = ['1', '2', '3', '4', '5'];

interface Schedule {
  [date: string]: { time: string; subject: string }[];
}

const Calendar: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [currentDate, setCurrentDate] = useState(new Date(2024, 2));

  // Устанавливаем текущую дату как 1 марта 2024 года
  const today = new Date(2024, 2, 1);
  const todayString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  const schedule: Schedule = {
    '2024-02-27': [
      { time: '13.00-13.45', subject: 'Ментальная арифметика' },
      { time: '13.00-13.45', subject: 'Ментальная арифметика' },
    ],
    '2024-02-28': [
      { time: '13.00-13.45', subject: 'Ментальная арифметика' },
      { time: '13.00-13.45', subject: 'Ментальная арифметика' },
    ],
    '2024-02-29': [
      { time: '13.00-13.45', subject: 'Ментальная арифметика' },
      { time: '13.00-13.45', subject: 'Ментальная арифметика' },
    ],
    '2024-03-01': [
      { time: '13.00-13.45', subject: 'Ментальная арифметика' },
      { time: '13.00-13.45', subject: 'Ментальная арифметика' },
    ],
    '2024-03-02': [
      { time: '13.00-13.45', subject: 'Ментальная арифметика' },
      { time: '13.00-13.45', subject: 'Ментальная арифметика' },
    ],
    '2024-03-03': [
      { time: '13.00-13.45', subject: 'Ментальная арифметика' },
      { time: '13.00-13.45', subject: 'Ментальная арифметика' },
    ],
    '2024-03-04': [
      { time: '13.00-13.45', subject: 'Ментальная арифметика' },
    ],
    '2024-03-06': [
      { time: '13.00-13.45', subject: 'Ментальная арифметика' },
    ],
    '2024-03-08': [
      { time: '13.00-13.45', subject: 'Ментальная арифметика' },
    ],
    '2024-03-14': [
      { time: '13.00-13.45', subject: 'Ментальная арифметика' },
    ],
    '2024-03-16': [
      { time: '13.00-13.45', subject: 'Ментальная арифметика' },
    ],
    '2024-03-18': [
      { time: '13.00-13.45', subject: 'Ментальная арифметика' },
      { time: '13.00-13.45', subject: 'Ментальная арифметика' },
    ],
    '2024-03-23': [
      { time: '13.00-13.45', subject: 'Ментальная арифметика' },
    ],
    '2024-03-31': [
      { time: '13.00-13.45', subject: 'Ментальная арифметика' },
      { time: '13.00-13.45', subject: 'Ментальная арифметика' },
    ],
  };

  const handleSubjectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubject(event.target.value);
  };

  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  const handlePreviousMonth = () => {
    setCurrentDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1)
    );
  };

  const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  const generateCalendar = () => {
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();
    const previousMonthDays = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
    const calendarRows: JSX.Element[] = [];
    let cells: JSX.Element[] = [];
    let dayCounter = 1;
    let adjustedFirstDay = firstDayOfMonth === 0 ? 7 : firstDayOfMonth;

    for (let i = 0; i < 5; i++) {
      for (let j = 1; j <= 7; j++) {
        if (i === 0 && j < adjustedFirstDay) {
          const dayOfMonth = previousMonthDays - adjustedFirstDay + j + 1;
          const currentDayString = `${currentDate.getFullYear()}-${String(
            currentDate.getMonth()
          ).padStart(2, '0')}-${String(dayOfMonth).padStart(2, '0')}`;
          const daySchedule = schedule[currentDayString] || [];
          const hasClasses = daySchedule.some((entry) => entry.time !== '');
          cells.push(
            <td key={j} className='calendar-table__prev-month'>
              <span className={`calendar-day ${hasClasses ? 'calendar-day_color' : ''}`}>{dayOfMonth}</span>
              {daySchedule.length > 0 ? (
                daySchedule.map((entry, index) => (
                  <div key={index} className='calendar-schedule calendar-schedule__prev-month'>
                    <span className='calendar-time'>{entry.time}</span>
                    <span className='calendar-subject'>{entry.subject}</span>
                  </div>
                ))
              ) : (
                <div className='calendar-schedule calendar-schedule_none'></div>
              )}
            </td>
          );
        } else if (dayCounter > daysInMonth) {
          cells.push(
            <td key={j} className='calendar-table__next-month'>
              <span className='calendar-day calendar-day_color'>{dayCounter - daysInMonth}</span>
              <div className='calendar-schedule calendar-schedule_none'></div>
            </td>
          );
          dayCounter++;
        } else {
          const currentDayString = `${currentDate.getFullYear()}-${String(
            currentDate.getMonth() + 1
          ).padStart(2, '0')}-${String(dayCounter).padStart(2, '0')}`;
          const daySchedule = schedule[currentDayString] || [];
          const hasClasses = daySchedule.some((entry) => entry.time !== '');
          const isToday = currentDayString === todayString; // Проверка на текущий день
          const isSpecialDatePay = currentDayString === '2024-02-29';
          cells.push(
            <td key={j} className={isToday ? 'calendar-table__today' : ''}>
              <span className={`calendar-day ${hasClasses ? 'calendar-day_color' : ''} ${isToday ? 'calendar-day_today' : ''}`}>{dayCounter}</span>
              {daySchedule.length > 0 ? (
                daySchedule.map((entry, index) => (
                  <div key={index} className={`calendar-schedule ${isToday ? 'calendar-schedule_today' : ''} ${isSpecialDatePay ? 'calendar-schedule_special-pay' : ''}`}>
                    <span className='calendar-time'>{entry.time}</span>
                    <span className='calendar-subject'>{entry.subject}</span>
                    {!isToday && hasClasses && <img className='calendar-pay' src={calendar_pay} alt='иконка' />}
                  </div>
                ))
              ) : (
                <div className='calendar-schedule calendar-schedule_none'></div>
              )}
            </td>
          );
          dayCounter++;
        }
      }
      calendarRows.push(<tr key={i}>{cells}</tr>);
      cells = [];
    }
    return calendarRows;
  };

  return (
    <section className='calendar'>
      <div className='calendar__header'>
        <div className='calendar-selector'>
          <select
            id='calendar-select'
            value={selectedSubject}
            onChange={handleSubjectChange}
          >
            <option value=''>Выбрать предмет:</option>
            {subjects.map((subject, index) => (
              <option key={index} value={subject}>
                {subject}
              </option>
            ))}
          </select>
          {selectedSubject && <p>Вы выбрали: {selectedSubject}</p>}
        </div>
        <button className='calendar-button'>Изменить расписание</button>
      </div>
      <div className='calendar-title'>
        <div className='calendar-title__button-block'>
          <button
            className='calendar-title__button'
            onClick={handlePreviousMonth}
          >
            &larr;
          </button>
          <span>{`${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`}</span>
          <button className='calendar-title__button' onClick={handleNextMonth}>
            &rarr;
          </button>
        </div>
        <button className='calendar-title-day'>Сегодня</button>
        <button className='calendar-title-question'>?</button>
      </div>
      <div className='calendar-calendar'>
        <table className='calendar-table'>
          <thead>
            <tr className='calendar-tr'>
              {daysOfWeek.map((day, index) => (
                <th key={index} className='calendar-th'>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody className='calendar-td'>{generateCalendar()}</tbody>
        </table>
      </div>
    </section>
  );
};

export default Calendar;
