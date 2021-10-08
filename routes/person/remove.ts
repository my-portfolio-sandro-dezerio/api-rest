import { Response, Request } from "express";
import { remove as removeRepository } from '../../repositories/person/remove';

export const remove = async (req: Request, res: Response) => {
	try {
		let { params: { id } } = req;

		await removeRepository(Number(id));

		return res.status(200).json({
			ok: true
		})
	} catch(error) {
		console.log(error);
		return res.status(500).json({
			ok: false,
			err: "Error."
		});
	}
};