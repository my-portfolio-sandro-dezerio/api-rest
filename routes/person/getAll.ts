import { Response, Request } from "express";
import { getAll as getAllRepository } from '../../repositories/person/getAll';

export const getAll = async (req: Request, res: Response) => {
	try {
		const resp = await getAllRepository();

		return res.status(200).json({
			ok: true,
			data: {
				count: resp.length,
				data: resp
			}
		})
	} catch(error) {
		return res.status(500).json({
			ok: false,
			err: "Error."
		});
	}
};