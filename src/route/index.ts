import { Router, Request, Response } from 'express';
import usersController from '../rest/controller/usersController';
import classesController from '../rest/controller/classesController';
import connectionsController from '../rest/controller/connctionsController';

const router = Router();

router.head('/', (request:Request, response:Response) => {
    response.sendStatus(200);
});

// router.get('/users', ()=> {
//       console.log('Aqui......')
// })

router.get('/users', usersController.GetAllUser.v1);
router.get('/users/:users', usersController.GetUser.v1);
router.post('/users/:users', usersController.CreateUser.v1);

router.get('/classes', classesController.ListClasses.v1);
router.get('/classes', classesController.GetClasses.v1);
router.post('/classes', classesController.CreateClasses.v1);

router.post('/connections', connectionsController.CreateConnections.v1);




export default router;
