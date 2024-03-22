import "./reviews.css";
import { ReviewForm, SingleReview } from "../../../allPagesPaths";

/*===========================================*/
/*===========================================*/
/*===========================================*/

const Reviews = () => {
    return (
        <div className="reviews">
            <h2>Reviews (5) </h2>
            <div className="reviews-content">
                <div className="left">
                    <SingleReview />
                    <SingleReview />
                    <SingleReview />
                    <SingleReview />
                    <SingleReview />
                    <SingleReview />
                    <SingleReview />
                    <SingleReview />
                </div>
                <div className="right">
                    <ReviewForm />
                </div>
            </div>
        </div>
    )
}

export default Reviews;