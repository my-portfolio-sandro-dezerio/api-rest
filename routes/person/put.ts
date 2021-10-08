import { Response, Request } from "express";
import Person from "../../models/Person.model";
import { put as putRepository } from '../../repositories/person/put';

export const put = async (req: Request, res: Response) => {
	try {
		let { body, params: { id } } = req;

		const person: Person = Person.dataToClass(body);

		await putRepository(person, Number(id));

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