import { Request, Response, NextFunction } from 'express';
import db from '../../database/connections';
import convertHourToMinutes from '../../util/convertHourToMinutes';

interface scheduleItem {
    week_day : number;
    from : string;
    to : string;
}

export const CreateConnections = {
    v1: async (request:Request, response:Response, next:NextFunction) => {
           const {user_id} = request.body;

            try {
                await db('connections').insert({
                    user_id
                })
                return response.status(201).send();
            } catch (err) {
                return response.status(400).json({ error: err});

            }
    }
}

export const GetConnections = {
    v1: async (request:Request, response:Response, next:NextFunction) => {

    }
}

export default {
    GetConnections,
    CreateConnections,
  };