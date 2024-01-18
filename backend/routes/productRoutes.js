import express from 'express';
import { 
  getAllProducts, 
  getProduct, 
  createProduct, 
  updateProduct, 
  deleteProduct, 
  createProductReview,
  getTopProducts
} from '../controllers/productController.js';
import { protect, admin} from '../middleware/authMiddleware.js';
import checkObjectId from '../middleware/checkObjectId.js';

const router = express.Router();

router.route('/').get(getAllProducts).post(protect, admin, createProduct);
router.route('/top').get(getTopProducts);
router.route('/:id').get(checkObjectId, getProduct).put(protect, admin, checkObjectId, updateProduct).delete(protect, admin, checkObjectId, deleteProduct);
router.post('/:id/reviews', protect, checkObjectId, createProductReview);

export default router;