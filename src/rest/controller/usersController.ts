import { Request, Response, NextFunction } from 'express';


export const CreateUser = {
    v1: async (request:Request, response:Response, next:NextFunction) => {

    }
}

export const GetAllUser = {
    v1: async (request:Request, response:Response, next:NextFunction) => {
        const users = [
            {
                "name": "wanderson",
                "idade": "22",
                "observacoes": "testeste"
            },
            {
                "name": "Maria",
                "idade": "52",
                "observacoes": "testeste"
            },
            {
                "name": "Renner Lobinho",
                "idade": "18",
                "observacoes": "testeste"
            }
        ]

        return response.json({ users });
    }
}

export const GetUser = {
    v1: async (request:Request, response:Response, next:NextFunction) => {

    }
}

export default {
    GetAllUser,
    GetUser,
    CreateUser,
  };