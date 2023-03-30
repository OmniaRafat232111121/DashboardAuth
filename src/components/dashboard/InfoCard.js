import React from 'react'
import CountUp from 'react-countup';
const InfoCard = ({color,icon,title,count}) => {
  return (
    <div className={`card-info px-3 py-4 mb-3 rounded bg-white shadow-sm`}>
    <div className={`icon bg-light-${color} text-${color}`}>{icon}</div>
    <div className="text">
      <h4>
          <CountUp
            start={0}
            end={count}
            duration={count < 20 ? 1 : count < 200 ? 2 : 3}
            decimals={0}
            />
      +</h4>
      <span>{title}</span>
    </div>
    </div>
  )
}

export default InfoCard