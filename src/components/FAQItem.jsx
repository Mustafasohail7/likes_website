import { AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";

const FAQItem = ({question,answer}) => {

    const [display, setDisplay] = useState(false)

    const handleAnswerDisplay = () => {
        setDisplay(!display)
    }

  return (
    <div className="question-holder">
        <div className="question" onClick={handleAnswerDisplay}>
        {question}
        <AiFillCaretDown className="icon"/>
        </div>
        <div className={`answer ${display ? 'open' : ''}`}>
        {answer}
        </div>
    </div>
  )
}

export default FAQItem
