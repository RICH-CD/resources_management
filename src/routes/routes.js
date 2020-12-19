import {Router} from 'express'
import * as tasksController from '../controllers/tasksController' 


const router = Router();

router.get('/', tasksController.findAllTasks)

router.post('/', tasksController.createTasks)

router.get('/done', tasksController.findAllDoneTasks);

router.get('/:id', tasksController.findOneTask)

router.delete('/:id', tasksController.deleteTask)

router.put('/:id', tasksController.updateTask)

export default router;