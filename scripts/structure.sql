CREATE TABLE `document_type` (
	id VARCHAR(50) NOT NULL,
	description VARCHAR(100) NOT NULL,
	active BIT(1) NOT NULL DEFAULT b'1',
	PRIMARY KEY (id)
);

CREATE TABLE `person` (
	id BIGINT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(75) NOT NULL,
	last_name VARCHAR(75) NOT NULL,
	date_of_birth DATE NULL,
	mobile_number BIGINT NULL,
	document_number BIGINT NOT NULL,
	document_type VARCHAR(50),
	PRIMARY KEY (id),
	CONSTRAINT person_document_type FOREIGN KEY (document_type) REFERENCES document_type (id)
);