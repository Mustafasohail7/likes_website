const FeaturesItem = ({feature}) => {
  return (
    <div className="features-card">
        <div className="features-icon">
        {feature.icon}
      </div>
      <h1>{feature.heading}</h1>
      <p>{feature.detail}</p>
    </div>
  )
}

export default FeaturesItem
