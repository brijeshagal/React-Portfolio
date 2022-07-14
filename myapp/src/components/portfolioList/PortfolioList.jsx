import './portfolioList.scss';

export default function PortfolioList({id, title, active, setSelected}) {  
  return (
    
    <li className={active ? "potfolioList active" : "portfolioList"} 
    onClick = { ()=>
      setSelected(id)
    }>
      {title}
    </li>
  )
}
