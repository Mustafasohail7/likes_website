import '../styles/FlashCard.css'

const FlashCard = () => {
  return (
    <div className='flashcard-container'>
      <div className='flashcard'>
        <div className='flashcard-text'>
            <h1>Buy Now</h1>
            <h3>Choose your package and start growing now</h3>
            <div>
                <button className='flashcard-btn'>
                    Choose a service
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FlashCard
