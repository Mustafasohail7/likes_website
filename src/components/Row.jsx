const Row = ({platform,serviceType,amount,icon,service,handleServiceChange,handleAmountChange}) => {

    if(platform==='instagram'){
        console.log('bruh')
        const bruh = service.services.filter((service) => service.name === serviceType)[0].amount
        console.log(bruh)
    }

  return (
    <div className='items-container item'>
                    <div className='platform-column'>
                        <div className='platform-icon'>
                            {icon}
                        </div>
                        <div className='platform-name'>
                            {platform}
                        </div>
                    </div>
                    <div className='service-column'>
                        <select onChange={handleServiceChange} className="service-dropdown">
                        {service.services.map((service) => (
                            <option value={service.name} className='service-option'>
                                {service.name}
                            </option>
                        ))}
                        </select>
                    </div>
                    <div className='amount-column'>
                        <select onChange={handleAmountChange} className="amount-dropdown">
                        {service.services.filter((service) => service.name === serviceType)[0].amount.map((x) => (
                            <option value={x.amount} className='amount-option'>
                                {x.amount} 
                            </option>  
                        ))}
                        </select>
                    </div>
                    <div className='cost-column cost'>
                        {service.services.filter((service) => service.name === serviceType)[0].amount
                        .filter((x) => x.amount === parseInt(amount))[0].cost} €
                    </div>
                    <div className='buy-btn-column'>
                        <button className='buy-btn'>
                            buy
                        </button>
                    </div>
                </div>
  )
}

export default Row
