import { Request, Response } from "express";
import Review from "../Models/Review";
import User from "../Models/User";

const createReview = async (req: Request, res: Response) => {
  try {
    const { userId, rating, comment } = req.body;

    if(!userId || !rating){
        return res.status(404).json({
            message: 'Incomplete credentials',
        })
    }

    const review = await Review.create({
      userId,
      rating,
      comment
    });

    return res.status(201).json(review);
  } catch (error) {
    console.error('Error creating review:', error);
    return res.status(500).json({ error: 'Could not create review' });
  }
};

const deleteReview = async (req: Request, res: Response) => {
  try {
    const reviewId = req.params.reviewId;

    const deletedReview = await Review.destroy({
      where: {
        id: reviewId
      }
    });

    if (deletedReview) {
      return res.status(200).json({ message: 'Review deleted successfully' });
    } else {
      return res.status(404).json({ error: 'Review not found' });
    }
  } catch (error) {
    console.error('Error deleting review:', error);
    return res.status(500).json({ error: 'Could not delete review' });
  }
};

const getReviewsByUserId = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    const user = await User.findOne({where: {id: userId}});
    if(!user){
        return res.status(404).json({
            message: "User not present",
        });
    }
    const reviews = await Review.findAll({
      where: {
        userId: userId
      }
    });

    return res.status(200).json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return res.status(500).json({ error: 'Could not fetch reviews' });
  }
};

export { createReview, deleteReview, getReviewsByUserId };
