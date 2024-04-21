import express from 'express';
import { createAddressForUser, createAddressForClinic, deleteAddressById } from '../Controllers/address.controller';

const router = express.Router();

router.post('/user', createAddressForUser);
router.post('/clinic', createAddressForClinic);
router.delete('/:addressId', deleteAddressById);

export default router;
