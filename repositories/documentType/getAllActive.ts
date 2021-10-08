import { RowDataPacket } from "mysql2";
import Database from "../../database";
import DocumentType from "../../models/DocumentType.model";

export const getAllActive = async (): Promise<DocumentType[]> => {
	const db = new Database();

	const query = `
		SELECT *
			FROM document_type
			WHERE active = 1
	`;

	const rows: RowDataPacket = await db.doQuery(query);

	const documents_type: DocumentType[] = [];

	for (const row of Object.values(rows)) {
		const document_type = new DocumentType();

		document_type.setId = row.id;
		document_type.setDescription = row.description;
		document_type.setActive = row.active;

		documents_type.push(document_type);
	}

	return documents_type;
}