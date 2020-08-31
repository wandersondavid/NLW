import { Request, Response, NextFunction } from 'express';
import db from '../../database/connections';
import convertHourToMinutes from '../../util/convertHourToMinutes';

interface scheduleItem {
    week_day : number;
    from : string;
    to : string;
}

export const CreateClasses = {
    v1: async (request:Request, response:Response, next:NextFunction) => {
        let {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
            } = request.body

           const trx = await db.transaction();
            try {
                const insertUsersIds =  await trx('users').insert({
                        name,
                        avatar,
                        whatsapp,
                        bio
                    })

                    const users_id = insertUsersIds[0];

                    const insertClassesIds = await trx('classes').insert({
                        subject,
                        cost,
                        users_id,
                    })

                    const class_id = insertClassesIds[0];

                    const classSchedule = schedule.map(((scheduleItem: scheduleItem) => {

                        return {
                            class_id,
                            week_day : scheduleItem.week_day,
                            from: convertHourToMinutes(scheduleItem.from),
                            to: convertHourToMinutes(scheduleItem.to)
                        }
                    }))

                    await trx('class_schedule').insert(
                        classSchedule
                    )

                    await trx.commit();
                    return response.status(201).send();
            } catch (err) {
                await trx.rollback();
                console.log(err)
                return response.status(400).json({ error: 'Unexpectd error while creating new class'});

            }
    }
}

export const ListClasses = {
    v1: async (request:Request, response:Response, next:NextFunction) => {
        const filters = request.query;

        const week_day = filters.week_day as string;
        const subject = filters.subject as string;
        const time = filters.time as string;


        if (!filters.week_day || !filters.subject || !filters.time)
            return response.status(400).json({ error: 'Missing filers to search classes'});

        const timeInMinutes = convertHourToMinutes(time);

        const classes = await db('classes')
            .whereExists(function(){
                this.select('class_schedule.*')
                .from('class_schedule')
                .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
                .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
                .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
            })
            .where('classes.subject', '=', subject)
            .join('users', 'classes.users_id', '=', 'users.id')
            .select(['classes.*', 'users.*'])


        return response.json(classes);
    }
}

export const GetClasses = {
    v1: async (request:Request, response:Response, next:NextFunction) => {

    }
}

export default {
    ListClasses,
    GetClasses,
    CreateClasses,
  };