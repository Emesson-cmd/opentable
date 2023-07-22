import React from 'react';
import Stars from '../../../components/Stars';
import { Review } from '@prisma/client';
import { getAvaregeRating } from '../../../../utils/calculateReviewRatingAvarage';

export default function Rating({
  reviews,
}: {
  reviews: Review[];
}) {
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <Stars reviews={reviews} />
        <p className="text-reg ml-3">{getAvaregeRating(reviews)}</p>
      </div>

      <div>
        <p className="text-reg ml-4">
          {reviews.length} review{reviews.length === 1 ? '' : 's'}
        </p>
      </div>
    </div>
  );
}
