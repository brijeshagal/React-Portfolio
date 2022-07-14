import './portfolioList.scss';
import { useState } from 'react';

export default function PortfolioList({title, active, setSelected, id}) {
  // const [selected, setSelected] = useState("featured");
  return (
    <li className={active ? "potfolioList active" : "portfolioList"} 
    onClick ={ ()=>
      setSelected(id)
    }>
      {title}
    </li>
  )
}
