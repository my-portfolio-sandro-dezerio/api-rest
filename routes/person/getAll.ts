import { Response, Request, NextFunction } from "express";
import Error from "../../models/Error.model";
import Person from "../../models/Person.model";
import { getAll as getAllRepository } from '../../repositories/person/getAll';

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const resp: Person[] = await getAllRepository();

		return res.status(200).json({
			ok: true,
			data: {
				count: resp.length,
				data: resp
			}
		})
	} catch(error: any) {
		next({
			message: error.message
		});
	}
};