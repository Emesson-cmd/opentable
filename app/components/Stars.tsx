import React from 'react';
import fullStar from '../../public/icons/full-star.png';
import halfStar from '../../public/icons/half-star.png';
import emptyStar from '../../public/icons/empty-star.png';
import { Review } from '@prisma/client';
import { getAvaregeRating } from '../../utils/calculateReviewRatingAvarage';
import Image, { StaticImageData } from 'next/image';

export default function Stars({ reviews, rating }: { reviews: Review[]; rating?: number }) {
  const reviewRating = rating || getAvaregeRating(reviews);

  const renderStars = () => {
    const stars: Array<{ src: StaticImageData; alt: string }> = [];

    for (let i = 0; i < 5; i++) {
      const difference = reviewRating - i;
      if (difference === 0) stars.push({ src: emptyStar, alt: 'empty start' });
      else if (difference >= 1) stars.push({ src: fullStar, alt: 'full start' });
      else if (difference > 0.2 && difference < 0.7)
        stars.push({ src: halfStar, alt: 'half start' });
      else stars.push({ src: emptyStar, alt: 'empty start' });
    }

    return stars.map((star, index) => (
      <Image key={index} alt={star.alt} src={star.src} className="w-4 h-4 mr-1" />
    ));
  };

  return <div className="flex items-center">{renderStars()}</div>;
}
