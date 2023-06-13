--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
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
687077df-92c3-4275-81ec-ba0382820d11	Welcome to our coffee shop, my name is Amanda, do you know what you would like to order or would you like me to tell you what is on the menu?	2023-05-30 21:51:46.179	2023-05-30 21:51:40.079	A1
5267a18f-2fc5-4fb2-8a85-5182ea014a1f	Hi, I’m Sasha, nice to meet you! Can you tell me a little bit about yourself? What hobbies do you have?	2023-05-30 21:52:31.043	2023-05-30 21:52:25.65	A1
6c645baf-857a-4e01-8b83-346fb8a892bb	Good evening, I’m Dan. My coworker just told me you need help with your lost suitcase, is that correct?	2023-05-30 21:52:16.409	2023-05-30 21:52:40.991	A1
1be13db3-3ef7-47ac-a380-f1e2a90ac81e	Your dad told me about the trip you are planning, tell me, where would you like to go?	2023-05-30 21:52:49.213	2023-05-30 21:52:45.82	A1
51300fb0-ac21-4448-afea-00da0fa22469	Could you tell me what is your favorite movie and why?	2023-05-30 21:53:07.271	2023-05-30 21:53:04.172	A1
f6234ebd-1eb9-4614-8604-f8adb0d9256f	Hi, I am visiting for the week, would you like to tell me some recommendations on where to eat and what to visit, please?	2023-05-30 21:53:16.755	2023-05-30 21:53:12.635	A1
ffdbe1c4-d3ae-4080-99d3-1c934134fdd8	Hey, I am lost, can you tell me where I can find the nearest restaurant?	2023-05-30 21:53:26.558	2023-05-30 21:53:23.151	A1
\.


--
-- Data for Name: Test; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Test" (id, "videoURL", feedaback, "createdAt", "updatedAt", "authorId", "mainSituationId", englishlevel, coherence, grammar, recommendation, vocabulary) FROM stdin;
6b4c2890-f30c-4211-a8d1-2d510380c424	1be13db3-3ef7-47ac-a380-f1e2a90ac81e_google-oauth2|117162713583656519312_2023-06-13T00:46:05.985Z.mp4	Your grammar and vocabulary could use some improvement, which may lead to a few comprehension issues. Your responses showed that you often repeated the same sentences or phrases which made it seem like you had misunderstood the previous question. When answering, it's important to pay attention to both the question and the specific topic. Also, remember that questions should be answered with full, complete sentences in order to practice proper phrase formation.	2023-06-13 00:54:09.682	2023-06-13 00:54:09.682	google-oauth2|117162713583656519312	1be13db3-3ef7-47ac-a380-f1e2a90ac81e	A2	70	60	It would be beneficial to work on some grammar basics such as verb tenses and sentence structures, as well as expanding your vocabulary. Take a closer look at the specific questions and topics that we're discussing in order to provide more accurate and well-developed answers. Finally, try to avoid repetition and always make sure to provide full, complete sentences.	75
9cffc8c5-a85b-4310-a816-4e02b8b27d43	f6234ebd-1eb9-4614-8604-f8adb0d9256f_google-oauth2|113295538584432074460_2023-06-13T01:06:13.128Z.mp4	Based on the conversation, the user shows some errors related to grammar and vocabulary, and sometimes has some trouble expressing complex ideas with a decent level of coherence. However, the user was able to understand the questions and provide some answers, which denotes an intermediate level of English proficiency. To improve the language, it is recommended to review the usage of some basic tenses, expand the vocabulary and practice expressing more complex ideas.	2023-06-13 01:11:24.288	2023-06-13 01:11:24.288	google-oauth2|113295538584432074460	f6234ebd-1eb9-4614-8604-f8adb0d9256f	B1	55	60	1. Expand the usage of complex sentences and expressions.\n2. Review the usage of basic structures and tenses such as the present simple or past simple.\n3. Enhance the usage of linking words and connectors to improve coherence.	45
955179ab-be8d-4617-9012-315b024838cf	1be13db3-3ef7-47ac-a380-f1e2a90ac81e_google-oauth2|110984883537328130186_2023-06-13T01:14:16.484Z.mp4	Your grammar and coherence are good, but there's some room for improvement in your vocabulary usage. You did a great job expressing your ideas about your trip plans and family time, and it was easy to follow along with your train of thought. Keep working on expanding your vocabulary and refining your use of idiomatic expressions to make your communication even stronger.	2023-06-13 01:20:33.08	2023-06-13 01:20:33.08	google-oauth2|110984883537328130186	1be13db3-3ef7-47ac-a380-f1e2a90ac81e	B2	85	80	For future conversations, try to use more varied vocabulary to express your ideas more precisely. It could also be helpful to practice using idiomatic expressions to add nuance to your speech. Lastly, be sure to pace yourself and take a moment to collect your thoughts before answering a question. This will help you deliver a more refined and articulate response.	75
ba1acfb7-844c-4c1b-9c4f-e0052ce1863d	f6234ebd-1eb9-4614-8604-f8adb0d9256f_auth0|6480f4663bae150001973745_2023-06-07T21:27:27.955Z.mp4	Overall, your conversation skills were good. You were able to understand and answer the questions clearly and effectively. You also demonstrated a good range of vocabulary throughout the conversation. However, you did have some instances where grammar could have been improved, and the coherence could be better at times. Keep practicing and engaging in conversations in English to continue improving!	2023-06-07 21:30:33.236	2023-06-07 21:30:33.236	auth0|6480f4663bae150001973745	f6234ebd-1eb9-4614-8604-f8adb0d9256f	B1	80	85	1. Use more complex sentence structures to better convey your ideas.\n2. Pay more attention to grammar and try to identify common errors when speaking in English.\n3. Try to use transition words or phrases to improve the coherence of your ideas.	90
a3a46949-7526-45f4-9ea0-ac8d5379edaa	6c645baf-857a-4e01-8b83-346fb8a892bb_auth0|6480f4663bae150001973745_2023-06-07T21:42:00.469Z.mp4	The user struggled with coherence and vocabulary during our conversation. Although they were able to convey their message in most cases, there were instances where it was difficult for me to fully understand what they meant. Their grammar was decent, but improvements could be made in this area too. However, it's important to note that English may not be their first language, and I appreciate their effort in trying to communicate in a second language.	2023-06-07 21:43:14.572	2023-06-07 21:43:14.572	auth0|6480f4663bae150001973745	6c645baf-857a-4e01-8b83-346fb8a892bb	A2	60	75	Based on our conversation, here are three specific recommendations that could have improved the coherence of their phrasing: 1. Try to avoid repeating the same question multiple times; 2. Use complete sentences and try to avoid relying on single-word answers; and 3. Practice using synonyms to expand your vocabulary and help make your messages more clear.	50
d1e8f269-f94a-4066-ac57-a43b3733437d	6c645baf-857a-4e01-8b83-346fb8a892bb_auth0|6480fdfcfef29fd104dc044d_2023-06-07T22:04:57.173Z.mp4	Based on your English skills showcased in this conversation, your grammar skills were decent and needed some improvement, with notable errors in the locations of articles and the use of repetitive vocabulary. Your ability to communicate was moderately coherent, though some sentences were hard to follow. Your vocabulary is diverse although your use of the chosen vocabulary had some inaccuracies. Overall, there is room to improve coherence and grammar and to expand the range of vocabulary used.	2023-06-07 22:08:20.768	2023-06-07 22:08:20.768	auth0|6480fdfcfef29fd104dc044d	6c645baf-857a-4e01-8b83-346fb8a892bb	B1	75	70	To improve your phrasing, you could use more variety in the vocabulary you use, try expanding your use of phrases and expand your vocabulary. You can also double-check your sentence structure to verify that all articles are placed correctly. Another good technique is to read a lot of books and articles, both in English, to improve your communication skills.	80
58726352-e569-4d1a-bb18-54b1b2dd109a	51300fb0-ac21-4448-afea-00da0fa22469_auth0|648100adebc9aee2347f482e_2023-06-07T22:19:53.354Z.mp4	You did a good job answering the questions and staying on topic. You demonstrated a good level of coherence and were able to express your opinions and thoughts with effectiveness. Your grammar, vocabulary, and phrasing could be improved, but overall, you did well.	2023-06-07 22:21:56.603	2023-06-07 22:21:56.603	auth0|648100adebc9aee2347f482e	51300fb0-ac21-4448-afea-00da0fa22469	B1	85	75	1. Use more varied sentence structures to add depth to your answers. 2. Work on your vocabulary and use more specific words to convey your ideas. 3. Pay attention to your grammar and avoid repeating words too much.	70
97ad5563-e39b-41cd-9dc8-adb9417c102b	ffdbe1c4-d3ae-4080-99d3-1c934134fdd8_auth0|6481038b18b47a2111062498_2023-06-07T22:27:03.728Z.mp4	Your grammar is good, but there is definitely some room for improvement. You used the correct verb tenses and your sentence structures were mostly accurate. Additionally, you showed a broad vocabulary, which enhanced the quality of your answers. However, you seemed to be stuck in a loop of repeating your initial question, which led to a less optimal conversation flow. 	2023-06-07 22:29:16.581	2023-06-07 22:29:16.581	auth0|6481038b18b47a2111062498	ffdbe1c4-d3ae-4080-99d3-1c934134fdd8	B1	100	90	Try to avoid repeating the same question in conversation to make it flow better. It could help you to start using more connectors in your speech to make it clearer for the listener and improve the expression of your ideas. You can also try reading aloud more in English to improve your pronunciation.	95
cc2e4635-231d-407b-87d0-6953ae67a208	ffdbe1c4-d3ae-4080-99d3-1c934134fdd8_auth0|6481054d18b47a2111062505_2023-06-07T22:47:50.174Z.mp4	Your responses were understandable, but there were some mistakes in grammar and your sentences were often not coherent, leading to confusion around the topic. While you demonstrated a basic level of vocabulary, your phrasing could use improvement.	2023-06-07 22:50:26.165	2023-06-07 22:50:26.165	auth0|6481054d18b47a2111062505	ffdbe1c4-d3ae-4080-99d3-1c934134fdd8	A2	60	75	It would have been helpful to use more complex sentence structures, practice using prepositions, and double-checking that your sentences were coherent. Using synonyms for common words can also enrich your vocabulary and make your language sound more natural.	60
759278a5-8942-47c1-a26c-a974140350a9	1be13db3-3ef7-47ac-a380-f1e2a90ac81e_auth0|648109f23bae150001973bd6_2023-06-07T22:54:27.729Z.mp4	Although the conversation was interesting, there is a need for improvement in coherence and vocabulary. There was some repetition of questions during the conversation. However, the answers provided were clear and precise and they demonstrated the ability to use some English grammar structures properly. The conversation could have been improved with more varied vocabulary, more complex sentence structures and stronger coherence in the responses. Overall, the user has potential to further improve their English abilities with more practice and dedication to improving their vocabulary and coherence.	2023-06-07 22:57:03.485	2023-06-07 22:57:03.485	auth0|648109f23bae150001973bd6	1be13db3-3ef7-47ac-a380-f1e2a90ac81e	B1	70	78	1. Use varied sentence structures and vocabulary when answering questions.\n2. Take time before answering questions to organize thoughts and create more coherent responses.\n3. Read and translate articles and academic literature to improve knowledge of complicated vocabulary and phrasal verbs.	73
3edabcd4-d897-4f3b-b885-404c1b1e817f	1be13db3-3ef7-47ac-a380-f1e2a90ac81e_auth0|64810e081446ea144c1edcf2_2023-06-07T23:17:14.947Z.mp4	Overall, your language proficiency leaves some room for improvement. Your grammar was lacking in accuracy and consistency, as well as some lexical errors. While you tried your best to communicate your point, your incoherent phrasing made it difficult to follow your train of thought. Improving on your vocabulary and grammar would greatly benefit your communication skills. However, you showed a great effort and willingness to learn, which will help you in your language journey.	2023-06-07 23:20:50.753	2023-06-07 23:20:50.753	auth0|64810e081446ea144c1edcf2	1be13db3-3ef7-47ac-a380-f1e2a90ac81e	A2	50	60	I noticed that you had some difficulty with phrasing and using the proper vocabulary. In order to improve, I suggest you try to communicate your thoughts more clearly and accurately, and familiarize yourself with more vocabulary related to the topics you are discussing. Lastly, reviewing grammar rules and practicing more exercises would help you gain confidence with the language.	40
3f1be73a-fc60-43d8-99fb-1273561e5a00	5267a18f-2fc5-4fb2-8a85-5182ea014a1f_auth0|64811164fef29fd104dc09a5_2023-06-07T23:43:06.494Z.mp4	Your conversational skills are okay, but there is room for improvement. Your grammar and coherence are decent, but could benefit from more refinement. There were a few occasions where your sentences did not flow smoothly and your ideas were not conveyed as effectively as they could have been. Overall your vocabulary is good, but it would help to learn some more advanced phrases. Keep practicing and you will see improvement!	2023-06-07 23:46:22.662	2023-06-07 23:46:22.662	auth0|64811164fef29fd104dc09a5	5267a18f-2fc5-4fb2-8a85-5182ea014a1f	B1	60	70	Here are three specific recommendations to improve your phrasing:\n1. Use specific and descriptive adjectives to enrich your vocabulary. For example, instead of saying 'good', try using words like 'outstanding' or 'remarkable'\n2. Instead of saying 'hanging out', try using a more precise verb such as 'spending time'.\n3. Use transitions to tie your ideas together and create a seamless flow in your communication. For example, instead of abruptly switching topics, use connecting phrases such as 'in addition', 'furthermore', or 'finally'.	75
602e623f-f4db-4574-9cfd-2d9155a41fe3	5267a18f-2fc5-4fb2-8a85-5182ea014a1f_auth0|6481179a1446ea144c1edf6f_2023-06-08T00:06:48.579Z.mp4	Overall, your grammar and vocabulary are good, but you could improve your coherence. Some of your answers seemed repetitive or off-topic. Additionally, while it's great that you have an interest in old-fashioned video games, it's important to listen to the overall direction of the conversation. To improve your coherence, try to listen carefully to questions and take a moment to gather your thoughts before answering. Additionally, try to incorporate key words from the question into your response to ensure that you are staying on topic. Lastly, don't be afraid to ask for clarification if you're unsure about what's being asked of you.	2023-06-08 00:09:09.642	2023-06-08 00:09:09.642	auth0|6481179a1446ea144c1edf6f	5267a18f-2fc5-4fb2-8a85-5182ea014a1f	B2	70	80	1) When talking about hobbies, try to relate specific experiences or memories you have with them. This will make your responses more interesting and engaging. For instance, you could mention a certain Donkey Kong level that you found particularly challenging.\n2) Work on expanding your vocabulary by studying new words and phrases. You could try reading news articles or books in English to expose yourself to new language.\n3) Practice active listening by repeating or summarizing the questions asked of you before answering. This will help ensure that you are staying on topic and that your responses are coherent.	75
e4c7fbc6-6b4f-46f4-9a4f-baa564e52aca	f6234ebd-1eb9-4614-8604-f8adb0d9256f_auth0|64811d24fef29fd104dc0c03_2023-06-08T00:21:30.740Z.mp4	You demonstrated a good grasp of the language, but there were some errors in your grammar and coherence which made some of your sentences difficult to understand. However, your vocabulary was diverse and precise, allowing you to express ideas succinctly. Keep practicing your grammar and coherence to increase your fluency. 	2023-06-08 00:24:41.378	2023-06-08 00:24:41.378	auth0|64811d24fef29fd104dc0c03	f6234ebd-1eb9-4614-8604-f8adb0d9256f	B2	70	80	It would be beneficial for you to review past and future tenses and practice more complex sentence structures. Additionally, try to use more linking words to help create a better flow between sentences. Lastly, practice proofreading your text to avoid grammar errors.	85
0a3ae731-209e-4754-be90-1ebfd3f5b743	f6234ebd-1eb9-4614-8604-f8adb0d9256f_google-oauth2|106642204098479510450_2023-06-08T19:28:13.796Z.mp4	Overall, you communicated effectively with good coherence and vocabulary. However, there were some minor grammar errors. I would recommend reviewing the usage of past tense and plural/singular nouns to improve your grammar. Also, try to be more concise in your questions and avoid repetition. Keep it up!	2023-06-08 19:31:21.327	2023-06-08 19:31:21.327	google-oauth2|106642204098479510450	f6234ebd-1eb9-4614-8604-f8adb0d9256f	B2	92	84	In order to improve grammar, try using grammar correction tools such as Grammarly or the Hemingway Editor. Also, try to practice more with exercises that target different grammar topics. In addition, try to replace repetitive words or expressions with synonyms to improve phrasing.	88
da148e2a-af3f-41ef-a807-8ac8b0db8002	6c645baf-857a-4e01-8b83-346fb8a892bb_auth0|6483a8b765d56b496846f0af_2023-06-09T22:34:11.430Z.mp4	Your overall performance in this conversation was good. You were able to understand and answer questions effectively, but there is room for improvement in the coherence and vocabulary aspects. Try to organize your sentences more effectively and look for opportunities to integrate more complex vocabulary. Keep practicing!	2023-06-09 22:38:02.381	2023-06-09 22:38:02.381	auth0|6483a8b765d56b496846f0af	6c645baf-857a-4e01-8b83-346fb8a892bb	B1	75	85	1. Try to use more complex sentence structures where you can, as long as they are still appropriate for the situation. 2. Consider practicing with a vocabulary builder to learn new words and phrases. 3. It would be beneficial to practice writing and speaking English more to improve your mastery of the language.	70
1c25fbab-6aed-47f2-9658-1512181c4391	6c645baf-857a-4e01-8b83-346fb8a892bb_auth0|6484920ec916e64947861d7a_2023-06-10T15:13:25.144Z.mp4	Your grammar and coherence were both good, with only minor errors. However, your vocabulary could have been more varied. You should try to use a wider range of words to express yourself and avoid repeating the same words too frequently. Overall, you communicated your message effectively and clearly.	2023-06-10 15:16:10.28	2023-06-10 15:16:10.28	auth0|6484920ec916e64947861d7a	6c645baf-857a-4e01-8b83-346fb8a892bb	B1	80	80	Based on your speech, I suggest that you try to expand your vocabulary and look for synonyms for the repeated words. You could also include more specificity to your sentences to provide more detail, and take more time to articulate your questions or comments.	70
c27c0eb1-6f16-48ae-ad04-2f04c58879bb	51300fb0-ac21-4448-afea-00da0fa22469_auth0|648512c7146ddde5386f3ee2_2023-06-11T00:21:47.985Z.mp4	Based on your conversation, it seems like you struggle a bit with grammar and coherence. At times, your sentences were a bit hard to understand. It would be helpful to focus on building more complex structures and using proper verb tenses. In addition, try to organize your thoughts and ensure that your ideas are expressed in a logical, understandable way. Finally, continue to build your vocabulary so that you can express your ideas more fully.	2023-06-11 00:24:15.177	2023-06-11 00:24:15.177	auth0|648512c7146ddde5386f3ee2	51300fb0-ac21-4448-afea-00da0fa22469	B1	60	70	It would be helpful to develop a more organized approach to your sentences. This could involve creating structured paragraph outlines before writing to ensure that your thoughts follow a logical flow. Additionally, work on using grammar structures such as verb tenses and subject-verb agreement properly. Lastly, remember to use appropriate transition words to link your ideas together. 	60
2a27bf99-97a8-472a-b4d2-7d2023bb245b	5267a18f-2fc5-4fb2-8a85-5182ea014a1f_google-oauth2|104588063189613282861_2023-06-12T14:26:20.195Z.mp4	Based on your responses, it is clear that you have a strong interest in your field of study. However, there were several instances where your phrasing and word usage could have been improved for clarity. Additionally, some of your responses lacked coherence and were difficult to understand. Overall, there is room for improvement in terms of grammar, coherence, and vocabulary.	2023-06-12 14:36:30.559	2023-06-12 14:36:30.559	google-oauth2|104588063189613282861	5267a18f-2fc5-4fb2-8a85-5182ea014a1f	A2	60	50	1. It will help to review the grammar rules and practice exercises to improve your grammar. 2. Utilize a vocabulary development tool to enrich your vocabulary and make use of that new vocabulary in your responses. 3. Practice expressing your ideas in a clear and organized way, using concrete examples when possible.	55
3580afba-8232-44e7-bf1d-830eae8bf1e8	51300fb0-ac21-4448-afea-00da0fa22469_auth0|648745a7c8c08130f077a693_2023-06-12T16:21:46.268Z.mp4	Your grammar and coherence could have been improved. You often repeated the same answers and struggled to provide new information to progress the conversation. However, your vocabulary is decent, which allowed you to answer all the questions. 	2023-06-12 16:28:27.182	2023-06-12 16:28:27.182	auth0|648745a7c8c08130f077a693	51300fb0-ac21-4448-afea-00da0fa22469	B1	60	70	To improve your grammar, try practicing the conjugation of irregular verbs since you struggled with their proper use. Next time you answer a question, try to vary your answers so that the conversation is more dynamic. Lastly, don't be afraid to use a wider range of vocabulary to express your ideas better.	75
f3f14ad2-9c0a-425c-9f69-014f0005fe1f	ffdbe1c4-d3ae-4080-99d3-1c934134fdd8_google-oauth2|113727171811744537669_2023-06-12T17:44:39.829Z.mp4	Overall, you did a good job in providing directions to the nearest restaurant. There were some minor mistakes in tenses and prepositions, but nothing that affected the clarity of your message. You managed to give specific directions, using coherent and concise sentences. However, you could have used a wider range of vocabulary to enrich your answers.	2023-06-12 17:47:38.866	2023-06-12 17:47:38.866	google-oauth2|113727171811744537669	ffdbe1c4-d3ae-4080-99d3-1c934134fdd8	B1	85	80	To improve your phrasing, I recommend using a wider range of vocabulary, practicing complex structures, and reviewing verb tenses. For instance, instead of repeating 'hey, I am lost [...] can you tell me', you could use other phrases such as 'Excuse me, could you provide me with some directions [...]', or 'I'm lost, do you have any recommendations [...]'. Another specific recommendation is to use more adjectives to describe places or things, like 'quaint', 'welcoming', or 'picturesque' to enhance the description of the venues. And lastly, try to use contractions and linking words to make your text more fluid, like 'couldn't', 'didn't', 'therefore', and 'however'.	70
e48000b2-a847-4948-8572-6f2e7b583428	51300fb0-ac21-4448-afea-00da0fa22469_google-oauth2|113727171811744537669_2023-06-12T18:01:10.343Z.mp4	Overall, your grammar was great and you were able to convey your ideas effectively. You have a good vocabulary of words related to science fiction movies. However, your coherence could have been better. Sometimes you repeated information and your responses were not always coherent. I recommend that you try to organize your ideas more efficiently to improve coherence. Additionally, you could benefit from expanding your vocabulary to express your thoughts more accurately. Lastly, reviewing the use of prepositions and articles might help you polish your grammar.	2023-06-12 18:06:22.439	2023-06-12 18:06:22.439	google-oauth2|113727171811744537669	51300fb0-ac21-4448-afea-00da0fa22469	B2	85	90	1. Try to avoid repeating information and focus on providing specific details to support your ideas. For example, instead of using the same word multiple times, you could use synonyms and related words. 2. Incorporate more complex sentence structures and use connecting words to improve the coherence of your responses. 3. When possible, make use of collocations, specific words or expressions that are commonly used together in English to make your responses sound more natural.	75
94e62582-aa3f-47b3-9f95-b8ebc17b3140	51300fb0-ac21-4448-afea-00da0fa22469_google-oauth2|118198653935540440392_2023-06-12T18:10:08.038Z.mp4	Based on the conversation, the user struggled with English grammar, coherence and vocabulary, particularly with sentence structure and word choice. There were difficulties conveying clear and coherent messages due to grammar and vocabulary issues, however, the user was able to partially communicate their thoughts. Some of the suggestions would be to work on their grammar and vocabulary skills, practice different sentence structures, and using a dictionary to improve their vocabulary. 	2023-06-12 18:13:52.64	2023-06-12 18:13:52.64	google-oauth2|118198653935540440392	51300fb0-ac21-4448-afea-00da0fa22469	A2	30	50	1. Use more varied sentence structures, such as simple, compound, and complex sentences, to better convey ideas. 2. Spend more time practicing proper English grammar, especially verb tenses and agreement. 3. Increase vocabulary by practicing with language resources and incorporating new words into everyday conversation.	45
55a488fc-62e7-4cca-be59-961c01656ebd	1be13db3-3ef7-47ac-a380-f1e2a90ac81e_auth0|6483730dae870301b179250a_2023-06-12T18:58:26.772Z.mp4	The conversation flowed relatively smoothly, but there were various grammatical errors and repetition in some parts that made it less coherent. Additionally, vocabulary could benefit from further expansion. 	2023-06-12 19:00:15.394	2023-06-12 19:00:15.394	auth0|6483730dae870301b179250a	1be13db3-3ef7-47ac-a380-f1e2a90ac81e	A2	75	50	To Improve your performance in English, here are our recommendations: Use a wider range of linking words and adverbials to improve your coherence. Try to use synonyms that match the context of what you want to express to enrich your vocabulary Also, try to keep your answers concise and relevant in order to reduce repetition and focus on answering the question directly.	60
861efa45-15be-4dca-9d58-2f1b5b7a79c4	51300fb0-ac21-4448-afea-00da0fa22469_google-oauth2|117422393009703685485_2023-06-12T21:53:38.023Z.mp4	Your responses lacked coherence and contained grammatical errors, which made it challenging to understand what you meant to convey. It seems that you were not able to express yourself effectively, and your answers were sometimes repetitive or unclear. Your vocabulary has room for improvement, and it would help if you practiced using more variety of phrases. 	2023-06-12 21:56:33.516	2023-06-12 21:56:33.516	google-oauth2|117422393009703685485	51300fb0-ac21-4448-afea-00da0fa22469	B1	40	60	For improving your grammar, try to focus on constructing more complete sentences. Avoid repeating words and phrases. For coherence try organizing, outlining your thoughts and using transitional words to guide the reader. For vocabulary development, learn and use new words and idioms, read more, and practice with someone who can provide corrective feedback.	65
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, name, "createdAt", "updatedAt", englishlevel, "familyName", "fullName", "averageMaxLevel", "dateMaxLevel", "isAdmin") FROM stdin;
google-oauth2|117162713583656519312	Javier Enrique	2023-06-13 00:44:04.929	2023-06-13 00:54:09.842	A2	Roque Romo	Javier Enrique Roque Romo	68	2023-06-13 00:54:09.682	f
google-oauth2|113295538584432074460	Alán	2023-06-13 01:00:58.868	2023-06-13 01:11:24.437	B1	Lubbert Licón	Alán Lubbert Licón	53	2023-06-13 01:11:24.288	f
google-oauth2|110984883537328130186	Carolina	2023-06-13 01:13:48.431	2023-06-13 01:20:33.232	B2	Díaz Perales	Carolina Díaz Perales	80	2023-06-13 01:20:33.08	f
google-oauth2|111318669350100590136	Adrian	2023-06-13 01:19:23.429	2023-06-13 01:24:48.13	A1	Faz	Adrian Faz	\N	\N	t
auth0|6487c5a929f8e0968bd21b9b	Adrian	2023-06-13 01:26:02.692	2023-06-13 01:26:08.752	A1	Faz	Adrian Faz	\N	\N	f
google-oauth2|116725110233682628133	Macías	2023-06-07 18:32:13.396	2023-06-07 18:32:13.396	A1	Romero	Macías Romero	\N	\N	f
auth0|6487a0d1450f9a0d018921d7	Luis Carlos	2023-06-12 22:48:51.581	2023-06-12 22:49:22.604	A1	Aguirre Mora	Luis Carlos Aguirre Mora	\N	\N	f
auth0|6480f49568a768f0729a21a7	Francisco Mestizo	2023-06-07 21:20:23.118	2023-06-07 21:20:35.141	A1	Hernandez	Francisco Mestizo Hernandez	\N	\N	f
auth0|6480f4c8fef29fd104dc0260	Adrian Emmanuel	2023-06-07 21:21:14.512	2023-06-07 21:21:22.067	A1	Faz Mercado	Adrian Emmanuel Faz Mercado	\N	\N	f
auth0|6480f4f468a768f0729a21b6	Ariadna Belen	2023-06-07 21:21:57.704	2023-06-07 21:22:15.938	A1	Gonzalez Mendoza	Ariadna Belen Gonzalez Mendoza	\N	\N	f
auth0|6480f5281446ea144c1ed70d	Salma Isabel	2023-06-07 21:22:50.114	2023-06-07 21:23:03.14	A1	Martinez Calderon	Salma Isabel Martinez Calderon	\N	\N	f
auth0|6480f4663bae150001973745	Victoria Lucero	2023-06-07 21:19:36.014	2023-06-07 21:30:33.401	B1	Robles	Victoria Lucero Robles	85	2023-06-07 21:30:33.236	f
auth0|6480fdfcfef29fd104dc044d	pueba 2	2023-06-07 22:00:29.563	2023-06-07 22:08:20.922	B1	pueba	pueba 2 pueba	75	2023-06-07 22:08:20.768	f
auth0|648100adebc9aee2347f482e	prueba 3	2023-06-07 22:11:58.346	2023-06-07 22:21:56.817	B1	prueba3	prueba 3 prueba3	77	2023-06-07 22:21:56.603	f
auth0|6481038b18b47a2111062498	prueba 4	2023-06-07 22:24:13.255	2023-06-07 22:29:16.736	B1	prueba	prueba 4 prueba	95	2023-06-07 22:29:16.581	f
google-oauth2|106642204098479510450	Francisco	2023-06-08 19:27:57.222	2023-06-08 19:31:21.493	B2	Mestizo	Francisco Mestizo	88	2023-06-08 19:31:21.327	f
auth0|6481054d18b47a2111062505	prueba 5	2023-06-07 22:31:43.544	2023-06-07 22:50:26.315	A2	prueba	prueba 5 prueba	65	2023-06-07 22:50:26.165	f
auth0|648109f23bae150001973bd6	prueba 6	2023-06-07 22:51:32.042	2023-06-07 22:57:03.668	B1	prueba	prueba 6 prueba	74	2023-06-07 22:57:03.485	f
auth0|64810e081446ea144c1edcf2	prueba 8	2023-06-07 23:08:57.925	2023-06-07 23:20:50.904	A2	prueba	prueba 8 prueba	50	2023-06-07 23:20:50.753	f
auth0|64811164fef29fd104dc09a5	prueba 9	2023-06-07 23:23:17.925	2023-06-07 23:46:22.816	B1	prueba	prueba 9 prueba	68	2023-06-07 23:46:22.662	f
google-oauth2|113727171811744537669	Renato	2023-06-12 17:43:45.117	2023-06-12 18:06:22.593	B2	Trinidad Rodriguez	Renato Trinidad Rodriguez	83	2023-06-12 18:06:22.439	f
auth0|6481179a1446ea144c1edf6f	prueba 10	2023-06-07 23:49:47.669	2023-06-08 00:09:09.793	B2	prueba	prueba 10 prueba	75	2023-06-08 00:09:09.642	f
google-oauth2|118198653935540440392	Cristina Varela Espinoza	2023-06-12 17:53:16.552	2023-06-12 18:13:52.789	A2	- Aux. Coord. Inglés	Cristina Varela Espinoza - Aux. Coord. Inglés	42	2023-06-12 18:13:52.64	f
auth0|64811d24fef29fd104dc0c03	prueba 11	2023-06-08 00:13:25.518	2023-06-08 00:24:41.576	B2	prueba	prueba 11 prueba	78	2023-06-08 00:24:41.378	f
auth0|6483a8b765d56b496846f0af	Alexa	2023-06-09 22:33:29.312	2023-06-09 22:38:02.541	B1	a	Alexa a	77	2023-06-09 22:38:02.381	f
auth0|6484920ec916e64947861d7a	Josué Faz	2023-06-10 15:09:04.212	2023-06-10 15:16:10.439	B1	Josué	Josué Faz Josué	77	2023-06-10 15:16:10.28	f
auth0|648512c7146ddde5386f3ee2	Daniel	2023-06-11 00:18:17.561	2023-06-11 00:24:15.327	B1	Cano	Daniel Cano	63	2023-06-11 00:24:15.177	f
google-oauth2|104588063189613282861	Julio	2023-06-12 14:10:32.956	2023-06-12 14:36:30.725	A2	Sánchez	Julio Sánchez	55	2023-06-12 14:36:30.559	f
auth0|6483730dae870301b179250a	Panchito	2023-06-12 18:57:52.858	2023-06-12 19:00:15.778	A2	Mestizo Hernández	Panchito Mestizo Hernández	62	2023-06-12 19:00:15.394	f
auth0|648745a7c8c08130f077a693	prueba AI	2023-06-12 16:19:54.25	2023-06-12 16:28:27.334	B1	prueba	prueba AI prueba	68	2023-06-12 16:28:27.182	f
google-oauth2|117422393009703685485	Javier Mauricio	2023-06-12 21:50:37.079	2023-06-12 21:56:33.67	B1	Peña Rodríguez	Javier Mauricio Peña Rodríguez	55	2023-06-12 21:56:33.516	f
auth0|64875b41e7325c100f14f524	Kevin	2023-06-12 17:52:03.819	2023-06-12 17:52:15.567	A1	Romero	Kevin Romero	\N	\N	f
google-oauth2|106631144605076548019	Mauricio	2023-06-12 18:32:18.072	2023-06-12 18:32:18.072	A1	Caballero	Mauricio Caballero	\N	\N	f
google-oauth2|113103743969771857147	Nicolas	2023-06-12 18:58:03.364	2023-06-12 18:58:03.364	A1	Gonzalez Guatibonza	Nicolas Gonzalez Guatibonza	\N	\N	f
google-oauth2|113442915061700150715	CARLOS ALBERTO	2023-06-10 16:53:36.465	2023-06-10 16:53:36.465	A1	MACÍAS ROMERO	CARLOS ALBERTO MACÍAS ROMERO	\N	\N	f
google-oauth2|113171311067732811644	Salma	2023-06-10 17:11:08.372	2023-06-10 17:11:08.372	A1	Martinez	Salma Martinez	\N	\N	f
auth0|64851602146ddde5386f3f1c	Eliakim	2023-06-11 00:32:04.666	2023-06-11 00:32:18.205	A1	Alem	Eliakim Alem	\N	\N	f
auth0|648694a4d959151e3615233d	Alex	2023-06-12 03:44:37.98	2023-06-12 03:45:03.722	A1	Rom	Alex Rom	\N	\N	f
google-oauth2|116586343688735448960	Marco	2023-06-12 15:20:55.346	2023-06-12 15:20:55.346	A1	Mendoza	Marco Mendoza	\N	\N	f
google-oauth2|101557350342904076591	Javi	2023-06-12 17:25:30.637	2023-06-12 17:25:30.637	A1	Martinez Vega	Javi Martinez Vega	\N	\N	f
google-oauth2|111399355621170957823	Arantxa	2023-06-12 17:26:19.028	2023-06-12 17:26:19.028	A1	Ibarra Muñoz	Arantxa Ibarra Muñoz	\N	\N	f
google-oauth2|116962964237355677772	Alejandro	2023-06-12 19:28:27.358	2023-06-12 19:28:27.358	A1	Antillon	Alejandro Antillon	\N	\N	f
auth0|6485cd537c26c2b64e03aad3	prueba borrar	2023-06-12 20:27:24.092	2023-06-12 20:27:46.31	A1	prueba	prueba borrar prueba	\N	\N	f
google-oauth2|103113685891480306792	Marco	2023-06-12 20:55:23.876	2023-06-12 20:55:23.876	A1	Donjuan Rendon	Marco Donjuan Rendon	\N	\N	f
google-oauth2|101331450469424341382	Belen Ariadna	2023-06-12 20:56:42.535	2023-06-12 20:56:42.535	A1	González Mendoza	Belen Ariadna González Mendoza	\N	\N	f
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
67b5f4c9-f704-4dbd-bd9a-a6db7fd39406	e93f9720548505474115c7d7654e299e1a5bce45f8983246a2f919ed2c0b0787	2023-06-13 00:39:55.447269+00	20230413003120_init	\N	\N	2023-06-13 00:39:55.185159+00	1
d4649abc-330c-4bfa-88e5-e2ccd36a7398	70d2bee18aa67675f88f561d09295b7adc3f40d4645e8ca4c7d04f5931a28450	2023-06-13 00:39:55.761708+00	20230413021453_init	\N	\N	2023-06-13 00:39:55.537272+00	1
4d5d02b0-3db5-43fd-9727-b57c7a4580e5	bf228e7450cfc2e329cdcb5fd36f17e72ef359ae81bac767f0ba21f6dfc2bbef	2023-06-13 00:39:56.069785+00	20230413143503_init	\N	\N	2023-06-13 00:39:55.849335+00	1
77b55477-08c0-4308-860e-37689b0c2c58	3492132c0cde148b6a550b4ed4f16147710289154d7cba3814340937af7307cd	2023-06-13 00:39:56.385613+00	20230504174241_init	\N	\N	2023-06-13 00:39:56.157973+00	1
4010469e-4369-475f-add1-3ea1d3ca1b42	f2c9c9d78e18b39dadc90dffe4f53b50a2ef49f058339d343e35dea0ed354c25	2023-06-13 00:39:56.736279+00	20230529210002_finalmigration	\N	\N	2023-06-13 00:39:56.512824+00	1
f5d80a97-48fb-4b5c-a67b-48bb35d975f9	ef56692284eb65fd2fbb334e97b6ed5c145384d179c53d9dba83fb486a6a7633	2023-06-13 00:39:57.043827+00	20230605211617_datosextrauser	\N	\N	2023-06-13 00:39:56.824083+00	1
0af9333b-86c6-4799-a6c8-3b68b7a4249c	d2f908b274f18d6ddcb09b806304ed504ddd943fb3a9a4b28f469b0a69d48869	2023-06-13 00:39:57.356573+00	20230612184638_cambios	\N	\N	2023-06-13 00:39:57.133312+00	1
68e4d86b-968d-43d9-8f36-811797b4c3dd	0d4981ba71387a7544ec0939f9d5fd3823f20d8a66c9e234b68b07825a740f1f	2023-06-13 00:39:57.674246+00	20230612185119_default_normal	\N	\N	2023-06-13 00:39:57.446465+00	1
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

