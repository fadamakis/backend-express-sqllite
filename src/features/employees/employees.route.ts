import express from 'express';
import * as employeesController from './employees.controller';

const router = express.Router();

router.get('/', employeesController.getAll);

router.get('/:id', employeesController.getSingle);

router.post('/', employeesController.create);

router.put('/:id', employeesController.update);

router.delete('/:id', employeesController.remove);


export default router;