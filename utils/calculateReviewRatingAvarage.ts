import { Review } from '@prisma/client';

export const getAvaregeRating = (reviews: Review[]) => {
  const ratingSum = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = reviews.length ? ratingSum / reviews.length : 0;
  return parseFloat(averageRating.toFixed(1));
};
