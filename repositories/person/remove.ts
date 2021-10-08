import { RowDataPacket } from "mysql2";
import Database from "../../database";

export const remove = async (id: number) => {
	const db = new Database();

	await db.doQuery(
		`DELETE FROM person
			WHERE
				id = ${db.escapeValue(id)}`
	);
}