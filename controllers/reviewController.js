const Review = require('../models/reviewModel');
// const catchAsync = require('../util/catchAsync');
// const AppError = require('../util/AppError');

const factory = require('./handlerFactory');

// ! get all reviews
exports.getAllReviews = factory.getAll(Review);

// ! create a review
exports.createReview = factory.createOne(Review);

// ! delete a review
exports.deleteReview = factory.deleteOne(Review);

// ! update a review
exports.updateReview = factory.updateOne(Review);

// ! get a review
exports.getReview = factory.getOne(Review);

exports.setTourUserIds = (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;

  next();
};
