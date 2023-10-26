import '../styles/PriceList.css'

import Services from '../data/Services'

import Row from './Row'

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
                <Row key={service.id} service={service}
                />
            ))}
        </div>
    </div>
  )
}

export default PriceList
