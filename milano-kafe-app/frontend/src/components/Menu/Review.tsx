import React, { useEffect, useState } from 'react';
import { getReviews } from '../../services/api';

const Review = ({ menuItemId }) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await getReviews(menuItemId);
                setReviews(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, [menuItemId]);

    if (loading) return <div>Loading reviews...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="review-section">
            <h3>User Reviews</h3>
            {reviews.length === 0 ? (
                <p>No reviews yet.</p>
            ) : (
                reviews.map((review) => (
                    <div key={review.id} className="review">
                        <h4>{review.userName}</h4>
                        <p>{review.comment}</p>
                        <p>Rating: {review.rating}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Review;