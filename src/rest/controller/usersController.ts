import { Request, Response, NextFunction } from 'express';


export const CreateUser = {
    v1: async (request:Request, response:Response, next:NextFunction) => {

    }
}

export const GetAllUser = {
    v1: async (request:Request, response:Response, next:NextFunction) => {
        const users = [
            {
                "img":"https://avatars3.githubusercontent.com/u/35749537?s=460&u=48c4a235c95b849dbcf4c9169d2fa2ca8f20279a&v=4",
                "name": "wanderson",
                "telefone": "22",
                "observacoes": "testcvbvbcbvcbcveste"
            },
            {
                "img":"https://avatars3.githubusercontent.com/u/35749537?s=460&u=48c4a235c95b849dbcf4c9169d2fa2ca8f20279a&v=4",
                "name": "Maria",
                "telefone": "52",
                "observacoes": "tescvbvbtessssssste"
            },
            {
                "img":"https://avatars3.githubusercontent.com/u/35749537?s=460&u=48c4a235c95b849dbcf4c9169d2fa2ca8f20279a&v=4",
                "name": "Renner Lobinho",
                "telefone": "18",
                "observacoes": "testssssbvcbvnssssseste"
            }
            ,
            {
                "img":"https://avatars3.githubusercontent.com/u/35749537?s=460&u=48c4a235c95b849dbcf4c9169d2fa2ca8f20279a&v=4",
                "name": "Renner Lobissssnho",
                "telefone": "18",
                "observacoes": "testssssssbcvbcvseste"
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