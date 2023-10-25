import { useEffect, useState, useRef } from "react"

const Row = ({platform,serviceType,amount,icon,service,handleServiceChange,handleAmountChange}) => {

    const [amounts,setAmounts] = useState([])

    const bruhh = useRef(null)

    if(platform==='instagram'){
        // console.log('bruh')
        // const bruh = service.services.filter((service) => service.name === serviceType)[0].amount
        // console.log(bruh)
    }

    // const handleAmountChange = (v) => {
    //     setFake(v.target.value)
    // }

    useEffect(() => {
        console.log('changed')
        const temp = service.services.filter((service) => service.name === serviceType)[0].amount
        setAmounts(temp)
        console.log(temp)
        const temp2 = temp.filter((x) => x.amount === parseInt(amount))[0]
        console.log(temp2)
    },[serviceType,service.services,amount])

    useEffect(()=> {
        console.log('ref here',bruhh.current.value)
    },[bruhh.current.value])

    // useEffect(() => {
    //     console.log('amount changed')
    //     console.log('array',amounts)
    //     console.log('from component above',amount)
    //     console.log('from within component',parseInt(fake))
    //     const temp = amounts.filter((x) => x.amount === parseInt(fake))[0]
    //     console.log(temp)
    //     setCost(temp)
    //     // console.log(cost)
    // },[amount,amounts,fake])

  return (
    <div className='items-container item'>
                    <div className='platform-column'>
                        <div className={`platform-icon   ${platform==='instagram' ? 'instagram-div' : ''}
                        ${platform==='tiktok' ? 'tiktok-div' : ''}`}>
                            {icon}
                        </div>
                        <div className='platform-name'>
                            {platform}
                        </div>
                    </div>
                    <div className='service-column'>
                        <select onChange={handleServiceChange} className="service-dropdown">
                        {service.services.map((service) => (
                            <option key={service.id} value={service.name} className='service-option'>
                                {service.name}
                            </option>
                        ))}
                        </select>
                    </div>
                    <div className='amount-column'>
                        <select onChange={handleAmountChange} className="amount-dropdown" ref={bruhh}>
                        {amounts.map((x,index) => (
                            <option key={index} value={x.amount} className='amount-option'>
                                {x.amount} 
                            </option>  
                        ))}
                        </select>
                    </div>
                    <div className='cost-column cost'>
                        {/* {amounts.filter((x) => x.amount === parseInt(amount))[0].cost} € */}
                        {/* {cost} € */}
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
