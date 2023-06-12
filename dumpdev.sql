--
-- PostgreSQL database dump for DEV
--

-- Dumped from database version 14.7
-- Dumped by pg_dump version 15.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS '';


--
-- Name: Englishlevel; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."Englishlevel" AS ENUM (
    'A1',
    'A2',
    'B1',
    'B2',
    'C1',
    'C2'
);


ALTER TYPE public."Englishlevel" OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Question; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Question" (
    id text NOT NULL,
    situation text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    level public."Englishlevel" DEFAULT 'A1'::public."Englishlevel" NOT NULL
);


ALTER TABLE public."Question" OWNER TO postgres;

--
-- Name: Test; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Test" (
    id text NOT NULL,
    "videoURL" text NOT NULL,
    feedaback text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "authorId" text NOT NULL,
    "mainSituationId" text NOT NULL,
    englishlevel public."Englishlevel" DEFAULT 'A1'::public."Englishlevel" NOT NULL,
    coherence integer NOT NULL,
    grammar integer NOT NULL,
    recommendation text NOT NULL,
    vocabulary integer NOT NULL
);


ALTER TABLE public."Test" OWNER TO postgres;

--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id text NOT NULL,
    name text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    englishlevel public."Englishlevel" DEFAULT 'A1'::public."Englishlevel" NOT NULL,
    "familyName" text,
    "fullName" text,
    "averageMaxLevel" integer,
    "dateMaxLevel" timestamp(3) without time zone,
    "isAdmin" boolean DEFAULT false NOT NULL
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Data for Name: Question; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Question" (id, situation, "createdAt", "updatedAt", level) FROM stdin;
9d3b6714-c769-4157-bdbf-ae658b526b5a	Welcome to our coffee shop, my name is Amanda, do you know what you would like to order or would you like me to tell you what is on the menu?	2023-06-05 21:29:26.585	2023-06-05 21:28:35.541	A1
a6e773d7-123c-4fd9-8290-30c0253b13f4	Hi, I’m Sasha, nice to meet you! Can you tell me a little bit about yourself? What hobbies do you have?	2023-06-05 21:29:26.585	2023-06-05 21:28:43.172	A1
9ccb16a8-9f68-472f-ba35-b7ab42e7a661	Good evening, I’m Dan. My coworker just told me you need help with your lost suitcase, is that correct?	2023-06-05 21:29:26.585	2023-06-05 21:28:51.109	A1
3b849382-f4a1-4700-bf40-730703c7e756	Your dad told me about the trip you are planning, tell me, where would you like to go?	2023-06-05 21:29:26.585	2023-06-05 21:28:58.123	A1
cb9e4d6c-0dd9-4602-b463-24da3b6d32a4	Could you tell me what is your favorite movie and why?	2023-06-05 21:29:26.585	2023-06-05 21:29:04.461	A1
c804d244-2db6-48db-b7ab-7813d6857db1	Hi, I am visiting for the week, would you like to tell me some recommendations on where to eat and what to visit, please?	2023-06-05 21:29:26.585	2023-06-05 21:29:12.162	A1
7abf7bd3-8044-4fda-9f27-6984fd14ff08	Hey, I am lost, can you tell me where I can find the nearest restaurant?	2023-06-05 21:29:26.585	2023-06-05 21:29:20.421	A1
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, name, "createdAt", "updatedAt", englishlevel, "familyName", "fullName", "averageMaxLevel", "dateMaxLevel", "isAdmin") FROM stdin;
google-oauth2|116725110233682628133	Macías	2023-06-09 16:54:24.424	2023-06-09 16:54:24.424	A1	Romero	Macías Romero	\N	\N	f
auth0|6484ac14d959151e3614ef90	prueba x	2023-06-10 17:00:10.646	2023-06-10 17:33:55.94	A1	prueba	prueba x prueba	\N	\N	f
auth0|6484c245c8570106833660db	prueba x2	2023-06-10 18:35:01.667	2023-06-10 18:39:39.859	A1	prueba	prueba x2 prueba	\N	\N	f
auth0|6484c40ec857010683366101	si	2023-06-10 23:05:47.591	2023-06-10 23:07:07.148	A1	aja	si aja	\N	\N	f
google-oauth2|101331450469424341382	Belen Ariadna	2023-06-11 01:02:59.38	2023-06-11 01:02:59.38	A1	González Mendoza	Belen Ariadna González Mendoza	\N	\N	f
google-oauth2|113563226659045729245	Adrián Emmanuel	2023-06-12 01:29:16.571	2023-06-12 01:29:16.571	A1	Faz Mercado	Adrián Emmanuel Faz Mercado	\N	\N	f
auth0|6485cd537c26c2b64e03aad3	Ariadna 	2023-06-11 13:34:26.132	2023-06-12 15:31:03.232	A2	G	Ariadna  G	50	2023-06-12 15:31:01.7	f
\.


--
-- Data for Name: Test; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Test" (id, "videoURL", feedaback, "createdAt", "updatedAt", "authorId", "mainSituationId", englishlevel, coherence, grammar, recommendation, vocabulary) FROM stdin;
9f3cead3-fe09-4e81-91bb-edd433bc9b0d	9ccb16a8-9f68-472f-ba35-b7ab42e7a661_auth0|6485cd537c26c2b64e03aad3_2023-06-12T15:26:46.501Z.mp4	Your grammar and vocabulary could use some improvement. You tended to use very short and simple sentences, which made your responses less coherent and difficult to follow. You also made a few spelling mistakes and used some incorrect verb tenses. Overall, there is room for improvement, but with practice, you should be able to improve your English skills.	2023-06-12 15:31:01.7	2023-06-12 15:31:01.7	auth0|6485cd537c26c2b64e03aad3	9ccb16a8-9f68-472f-ba35-b7ab42e7a661	A2	40	60	In order to improve your English skills, I would recommend: (1) expanding your vocabulary by learning new words and phrases on a regular basis; (2) practicing speaking and writing in English on a regular basis, preferably with a native speaker who can provide feedback on your mistakes; and (3) reviewing English grammar rules and focusing on areas that you find particularly challenging, such as verb tenses and sentence structure.	50
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
22a06972-558c-4843-b0eb-86548d203216	e93f9720548505474115c7d7654e299e1a5bce45f8983246a2f919ed2c0b0787	2023-06-12 18:46:32.233355+00	20230413003120_init	\N	\N	2023-06-12 18:46:31.956392+00	1
b62d16ca-dd53-4919-a4af-e45bb0e9a454	70d2bee18aa67675f88f561d09295b7adc3f40d4645e8ca4c7d04f5931a28450	2023-06-12 18:46:32.546638+00	20230413021453_init	\N	\N	2023-06-12 18:46:32.323178+00	1
11537c86-64fb-4cc1-8e5b-4b15a73a8c61	bf228e7450cfc2e329cdcb5fd36f17e72ef359ae81bac767f0ba21f6dfc2bbef	2023-06-12 18:46:32.858993+00	20230413143503_init	\N	\N	2023-06-12 18:46:32.635033+00	1
9bde2bdf-52f6-4e20-bb5e-18e1819ea3b6	3492132c0cde148b6a550b4ed4f16147710289154d7cba3814340937af7307cd	2023-06-12 18:46:33.168934+00	20230504174241_init	\N	\N	2023-06-12 18:46:32.947536+00	1
7b0ac3d9-d10b-4fa8-8398-4442a2578460	f2c9c9d78e18b39dadc90dffe4f53b50a2ef49f058339d343e35dea0ed354c25	2023-06-12 18:46:33.500542+00	20230529210002_finalmigration	\N	\N	2023-06-12 18:46:33.262653+00	1
f2ebadf3-1837-4f51-b583-578ed37f32d0	ef56692284eb65fd2fbb334e97b6ed5c145384d179c53d9dba83fb486a6a7633	2023-06-12 18:46:33.811648+00	20230605211617_datosextrauser	\N	\N	2023-06-12 18:46:33.590604+00	1
9aa12717-422a-4846-9ae2-ca9284f8342b	d2f908b274f18d6ddcb09b806304ed504ddd943fb3a9a4b28f469b0a69d48869	2023-06-12 18:46:38.947061+00	20230612184638_cambios	\N	\N	2023-06-12 18:46:38.720418+00	1
cf57c05f-86bb-4c11-b59c-68b65fdc2e63	0d4981ba71387a7544ec0939f9d5fd3823f20d8a66c9e234b68b07825a740f1f	2023-06-12 18:51:19.559374+00	20230612185119_default_normal	\N	\N	2023-06-12 18:51:19.336032+00	1
899b5a2d-2e7a-4e02-bbcf-6dc2d9797730	e93f9720548505474115c7d7654e299e1a5bce45f8983246a2f919ed2c0b0787	2023-06-05 21:15:58.851989+00	20230413003120_init	\N	\N	2023-06-05 21:15:58.559484+00	1
666cb5b1-e2db-449b-9cbd-99b4b7071ee1	70d2bee18aa67675f88f561d09295b7adc3f40d4645e8ca4c7d04f5931a28450	2023-06-05 21:15:59.284567+00	20230413021453_init	\N	\N	2023-06-05 21:15:58.962628+00	1
9a2d4a10-0bf8-4636-a8f6-d8aa398daa37	bf228e7450cfc2e329cdcb5fd36f17e72ef359ae81bac767f0ba21f6dfc2bbef	2023-06-05 21:15:59.722556+00	20230413143503_init	\N	\N	2023-06-05 21:15:59.374763+00	1
45d4750a-5095-42d4-b5cc-db3513585eb2	3492132c0cde148b6a550b4ed4f16147710289154d7cba3814340937af7307cd	2023-06-05 21:16:00.232854+00	20230504174241_init	\N	\N	2023-06-05 21:15:59.839416+00	1
1263169a-b523-4283-9241-d623c1c44e87	f2c9c9d78e18b39dadc90dffe4f53b50a2ef49f058339d343e35dea0ed354c25	2023-06-05 21:16:00.550192+00	20230529210002_finalmigration	\N	\N	2023-06-05 21:16:00.326673+00	1
1ffaa993-f2b9-411f-a862-66dd6723830f	ef56692284eb65fd2fbb334e97b6ed5c145384d179c53d9dba83fb486a6a7633	2023-06-05 21:16:17.840767+00	20230605211617_datosextrauser	\N	\N	2023-06-05 21:16:17.496+00	1
b9ec625a-39d7-473a-ae87-91949d82ce3e	90796208e3f1fbe95d6034bad2c000a8bfab14eb9a699c762cdf502d69775820	2023-06-11 20:32:43.074276+00	20230611203242_resource_video	\N	\N	2023-06-11 20:32:42.583103+00	1
\.


--
-- Name: Question Question_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Question"
    ADD CONSTRAINT "Question_pkey" PRIMARY KEY (id);


--
-- Name: Test Test_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Test"
    ADD CONSTRAINT "Test_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Test Test_authorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Test"
    ADD CONSTRAINT "Test_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Test Test_mainSituationId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Test"
    ADD CONSTRAINT "Test_mainSituationId_fkey" FOREIGN KEY ("mainSituationId") REFERENCES public."Question"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

