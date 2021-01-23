-- Database generated with pgModeler (PostgreSQL Database Modeler).
-- pgModeler  version: 0.9.3
-- PostgreSQL version: 13.0
-- Project Site: pgmodeler.io
-- Model Author: ---

-- Database creation must be performed outside a multi lined SQL file. 
-- These commands were put in this file only as a convenience.
-- 
-- object: new_database | type: DATABASE --
-- DROP DATABASE IF EXISTS new_database;
--CREATE DATABASE new_database;
-- ddl-end --


-- object: public.person | type: TABLE --
-- DROP TABLE IF EXISTS public.person CASCADE;
CREATE TABLE public.person (
	id serial NOT NULL,
	name varchar(255) NOT NULL,
	lastname varchar(255) NOT NULL,
	age integer NOT NULL,
	address varchar(255) NOT NULL,
	created_at timestamptz NOT NULL DEFAULT now(),
	updated_at timestamptz,
	deleted bool NOT NULL DEFAULT false,
	pet_id smallint,
	ocupation_id smallint NOT NULL,
	CONSTRAINT person_pk PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.person OWNER TO postgres;
-- ddl-end --

-- object: public.pet | type: TABLE --
-- DROP TABLE IF EXISTS public.pet CASCADE;
CREATE TABLE public.pet (
	id serial NOT NULL,
	name varchar(255) NOT NULL,
	gender char(1) NOT NULL,
	age smallint NOT NULL,
	CONSTRAINT pet_pk PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.pet OWNER TO postgres;
-- ddl-end --

-- object: public.ocupation | type: TABLE --
-- DROP TABLE IF EXISTS public.ocupation CASCADE;
CREATE TABLE public.ocupation (
	id serial NOT NULL,
	name varchar(255) NOT NULL,
	CONSTRAINT ocupation_pk PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.ocupation OWNER TO postgres;
-- ddl-end --

-- object: pet_fk | type: CONSTRAINT --
-- ALTER TABLE public.person DROP CONSTRAINT IF EXISTS pet_fk CASCADE;
ALTER TABLE public.person ADD CONSTRAINT pet_fk FOREIGN KEY (pet_id)
REFERENCES public.pet (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: ocupation_fk | type: CONSTRAINT --
-- ALTER TABLE public.person DROP CONSTRAINT IF EXISTS ocupation_fk CASCADE;
ALTER TABLE public.person ADD CONSTRAINT ocupation_fk FOREIGN KEY (ocupation_id)
REFERENCES public.ocupation (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

INSERT INTO ocupation(name)
VALUES ('Programmer'),('Engineer'),('Teacher'),('Student')
-- ddl-end --

INSERT INTO pet(name, gender, age)
VALUES ('Benito','M',1),('Pancho','M',2),('Peluche','F',1),('Mascota1','F',3),('Mascota2','F',4)
-- ddl-end --