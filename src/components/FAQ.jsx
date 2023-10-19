import '../styles/FAQ.css'

import FAQItem from './FAQItem'

const FAQ = () => {

    const faq = [
        {id:0, question: 'why should i buy followers?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'},
        {id:1, question: 'can i buy followers for my friend?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'},
        {id:2, question: 'can i buy followers for my friend?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'},
        {id:3, question: 'can i get banned from this?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'},
    ]

  return (
    <div className='faq-container'>
      <div className='faq-headings'>
        <h1 className='faq-title'>Frequently Asked Questions</h1>
        <h3 className='faq-subtitle'>Here are some of our FAQs. If you have any other questions you would like answered please feel free to email us.</h3>
      </div>
      <div className='questions-container'>
        {faq.map((item) => (
            <FAQItem key={item.id} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  )
}

export default FAQ
