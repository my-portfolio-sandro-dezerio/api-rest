import { Response, Request } from "express";
import { getById as getByIdRepository } from '../../repositories/person/getById';

export const getById = async (req: Request, res: Response) => {
	try {
		let { params: { id } } = req;

		const resp = await getByIdRepository(Number(id));

		if(!resp) {
			return res.sendStatus(204);
		}

		return res.status(200).json({
			ok: true,
			data: resp
		})
	} catch(error) {
		return res.status(500).json({
			ok: false,
			err: "Error."
		});
	}
};