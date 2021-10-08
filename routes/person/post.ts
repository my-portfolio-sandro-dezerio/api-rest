import { Response, Request } from "express";
import Person from "../../models/Person.model";
import { post as postRepository } from '../../repositories/person/post';

export const post = async (req: Request, res: Response) => {
	try {
		let { body } = req;

		const person: Person = Person.dataToClass(body);

		const resp = await postRepository(person);

		return res.status(201).json({
			ok: true,
			data: resp
		})
	} catch(error) {
		console.log(error);
		return res.status(500).json({
			ok: false,
			err: "Error."
		});
	}
};