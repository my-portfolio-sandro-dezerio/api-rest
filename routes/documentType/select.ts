import { Request, Response } from "express";
import DocumentType from "../../models/DocumentType.model";
import Select from "../../models/Select/Select.model";

import { getAllActive } from "../../repositories/documentType/getAllActive";

export const select = async (req: Request, res: Response) => {
	const documentsType: DocumentType[] = await getAllActive();

	return res.json(Object.values(documentsType).map(row => new Select(row.getDescription, row.getId)));
}