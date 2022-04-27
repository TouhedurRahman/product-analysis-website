import { useEffect, useState } from "react";

const CustomerReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const url = "customerreview.json";
        fetch(url)
            .then((response) => response.json())
            .then((data) => setReviews(data))
    }, []);

    return [reviews, setReviews];
};

export default CustomerReview;