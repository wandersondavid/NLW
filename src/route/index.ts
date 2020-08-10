import { Router, Request, Response } from 'express';
import usersController from '../rest/controller/usersController.ts';

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

export default router;
