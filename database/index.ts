import mysql, { Pool, QueryError, RowDataPacket, FieldPacket } from 'mysql2';

export default class Database {
	private pool: Pool;

	constructor() {
		this.pool = mysql.createPool({
			host: process.env.HOST,
			user: process.env.USER,
			password: process.env.PASSWORD,
			database: process.env.DATABASE,
			waitForConnections: true,
			connectionLimit: 10,
			queueLimit: 0,
			typeCast: function castField(field, useDefaultTypeCasting) {
				if (field.type === "BIT" && field.length === 1) {
					var bytes = field.buffer();
		
					return bytes[0] === 1;
				}
		
				return useDefaultTypeCasting();
				},
		})
	}

	public doQuery(queryString: string): Promise<RowDataPacket> {
		return new Promise((resolve, reject) => {
			this.pool.getConnection((err, conn) => {
				if (err) {
					return reject(new Error('Error al intentar conectar la base de datos.'));
				}
				conn.query(
					queryString,
					function (err: QueryError, rows: RowDataPacket, fields: FieldPacket) {
						if (err) {
							return reject(new Error('Hubo un error en el servidor.'));
						}
						return resolve(rows);
					}
				);
			});
		});
	  }

	public escapeValue(value: string | number) {
		return this.pool.escape(value);
	}
}