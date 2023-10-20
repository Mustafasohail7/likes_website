import { useState, useEffect } from 'react';
import '../styles/ReviewSlider.css'

const reviewsData = [
  {
    id: 1,
    text: "Review 1 - This is the first review",
  },
  {
    id: 2,
    text: "Review 2 - This is the second review",
  },
  {
    id: 3,
    text: "Review 3 - This is the third review",
  },
  // Add more reviews as needed
];

const ReviewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the current index to show the next review
      setCurrentIndex((currentIndex + 1) % reviewsData.length);
    }, 2000); // Change the duration as needed (in milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className='review-container'>
        <div className="review-slider">
        {reviewsData.map((review, index) => (
            <div
            key={review.id}
            className={`review ${index === currentIndex ? "front" : ""}`}
            >
            {review.text}
            </div>
        ))}
        </div>
    </div>
  );
};

export default ReviewSlider;
