import '../styles/PriceList.css'

import { useState } from 'react'

import Services from '../data/Services'

import Row from './Row'

const PriceList = () => {

    const [dropDownStates, setDropDownStates] = useState([
        { platform: 'instagram', service: 'followers', amount: 300 },
        { platform: 'facebook', service: 'followers', amount: 300 },
        { platform: 'youtube', service: 'followers', amount: 300 },
        { platform: 'discord', service: 'followers', amount: 300 },
        { platform: 'telegram', service: 'followers', amount: 300 },
        { platform: 'twitch', service: 'followers', amount: 300 },
        { platform: 'snapchat', service: 'followers', amount: 300 },
        { platform: 'tiktok', service: 'followers', amount: 300 },
        { platform: 'spotify', service: 'followers', amount: 300 },
    ])

    const handleServiceChange = (v, id) => {
        const newDropDownStates = [...dropDownStates]
        newDropDownStates[id].service = v.target.value
        setDropDownStates(newDropDownStates)
        console.log(dropDownStates[id])
    }

    const handleAmountChange = (v, id) => {
        const newDropDownStates = [...dropDownStates]
        newDropDownStates[id].amount = v.target.value
        setDropDownStates(newDropDownStates)
        console.log(dropDownStates[id])
    }

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
                <Row key={service.id} platform={dropDownStates[service.id].platform}
                    serviceType={dropDownStates[service.id].service}
                    amount={dropDownStates[service.id].amount}
                    icon={service.icon}
                    service={service}
                    handleServiceChange={(value) => handleServiceChange(value, service.id)}
                    handleAmountChange={(value) => handleAmountChange(value, service.id)}
                />
            ))}
        </div>
    </div>
  )
}

export default PriceList
