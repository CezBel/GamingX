import express from 'express';
const router = express.Router();
import { 
  createOrder, 
  getMyOrders, 
  getOrderById, 
  updateOrderToPaid, 
  updateOrderToDeliverd, 
  getOrders 
} from '../controllers/orderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import checkObjectId from '../middleware/checkObjectId.js';

router.route('/').get(protect, admin, getOrders).post(protect, createOrder);
router.get('/myorders',protect, getMyOrders);
router.get('/:id', protect, checkObjectId, getOrderById);
router.put('/:id/pay', checkObjectId, updateOrderToPaid);
router.put('/:id/deliver',protect, admin, checkObjectId, updateOrderToDeliverd);

export default router;