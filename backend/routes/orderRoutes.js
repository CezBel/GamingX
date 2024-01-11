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
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(protect, admin, getOrders).post(protect, createOrder);
router.get('/myorders',protect, getMyOrders);
router.get('/:id', protect, getOrderById);
router.put('/:id/pay', updateOrderToPaid);
router.put('/:id/deliver',protect, admin, updateOrderToDeliverd);

export default router;