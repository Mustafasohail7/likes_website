import {useState } from "react"

const Row = ({service}) => {

    const [selectedService,setSelectedService] = useState(service.services[0].name)
    const [amounts,setAmounts] = useState(service.services[0].amount)
    const [finalCost,setFinalCost] = useState(service.services[0].amount[0].cost)
    const [selectedIndex,setSelectedIndex] = useState(0)

    const {name,icon} = service

    const handleDropDownAChange = (selectedValue) => {
        setSelectedService(selectedValue)

        const selectedServices = service.services.find((service) => service.name === selectedValue)

        if(selectedServices){
            setAmounts(selectedServices.amount)
            let costValue;

            if(selectedIndex >= selectedServices.amount.length){
                setSelectedIndex(0)
                costValue = selectedServices.amount[0]
            }else{
                costValue = selectedServices.amount[selectedIndex]
            }

            setFinalCost(costValue.cost)
        }else{
            setAmounts([])
        }
    }

    const handleDropDownBChange = (selectedValue,index) => {
        console.log('hello here')
        setSelectedIndex(index)
        console.log('service is',selectedService)
        console.log('search here',service.services)
        const selectedAmounts = service.services.find((service) => service.name === selectedService)
        console.log('check karo',selectedAmounts)

        if(selectedAmounts){
            const costValue = selectedAmounts.amount.find((amount) => amount.amount === parseInt(selectedValue))
            setFinalCost(costValue.cost)
        }
    }

  return (
    <div className='items-container item'>
                    <div className='platform-column'>
                        <div className={`platform-icon   ${name==='instagram' ? 'instagram-div' : ''}
                        ${name==='tiktok' ? 'tiktok-div' : ''}`}>
                            {icon}
                        </div>
                        <div className='platform-name'>
                            {name}
                        </div>
                    </div>
                    <div className='service-column'>
                        <select onChange={(e) => handleDropDownAChange(e.target.value)} className="service-dropdown">
                        {service.services.map((service) => (
                            <option key={service.id} value={service.name} className='service-option'>
                                {service.name}
                            </option>
                        ))}
                        </select>
                    </div>
                    <div className='amount-column'>
                        <select onChange={(e) => handleDropDownBChange(e.target.value,e.target.selectedIndex)} className="amount-dropdown">
                        {amounts.map((x,index) => (
                            <option key={index} value={x.amount} className='amount-option'>
                                {x.amount} 
                            </option>  
                        ))}
                        </select>
                    </div>
                    <div className='cost-column cost'>
                        {(parseFloat(finalCost) - 0.01).toFixed(2)} €
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
