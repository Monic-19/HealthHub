import express from 'express';
import { createAddressForUser, createAddressForClinic, deleteAddressById, getAddressList } from '../Controllers/address.controller';

const router = express.Router();

router.post('/user', createAddressForUser);
router.post('/clinic', createAddressForClinic);
router.delete('/:addressId', deleteAddressById);
router.get('/list', getAddressList);

export default router;
