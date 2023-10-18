import '../styles/PriceList.css'

import Services from '../data/Services'

const PriceList = () => {

  return (
    <div className='gray-container'>
        <div className='price-list-container'>
            <div className='items-container heading'>
                <div className='platform-column'>
                    platform
                </div>
                <div className='service-column'>
                    service
                </div>
                <div className='amount-column'>
                    amount
                </div>
                <div className='cost-column'> 
                    cost
                </div>
                <div className='buy-btn-column'/>
            </div>
            {Services.map((service) => (
                <div className='items-container item'>
                    <div className='platform-column'>
                        <div className='platform-icon'>
                            {service.icon}
                        </div>
                        <div className='platform-name'>
                            {service.name}
                        </div>
                    </div>
                    <div className='service-column'>
                        <select>
                        {service.services.map((service) => (
                            <option value={service.name} className='service-name'>
                                {service.name}
                            </option>
                        ))}
                        </select>
                    </div>
                    <div className='amount-column'>
                        <select>
                        </select>
                    </div>
                    <div className='cost-column'>
                        200 usd
                    </div>
                    <div className='buy-btn-column'>
                        <button className='buy-btn'>
                            buy
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PriceList
