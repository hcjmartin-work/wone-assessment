
import { testHandler } from './admin/testHandler'
import { FastifyPluginAsync } from "fastify";
import { getFormContent } from './forms/getFormContent';
import { getFormContentRequest, GetFormContentRequestType } from '../models/getFormContent';
import { postFormAttemptRequest, PostFormAttemptRequestType } from '../models/postFormAttempt';
import { createFormAttempt } from './forms/createFormAttempt';

const formRoutes: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
   // TODO: Get a Form attempt by id
  fastify.get("/attempt", testHandler);

/**
 * GET /form
 * Create a new form attempt
 * 
 * @body {PostFormAttemptRequestType} - The form attempt content
 * @returns  {formVersion.content} - The new (or updated) form attempt id
 */
  fastify.get<{ Querystring: GetFormContentRequestType }>(
    "/", 
    { schema: { querystring: getFormContentRequest } }, 
    (request) => getFormContent(request.query)
  ); 

/**
 * POST /form/attempt
 * Create a new form attempt
 * 
 * @body {PostFormAttemptRequestType} - The form attempt content
 * @returns {formAttemptId} - The new (or updated) form attempt id
 */
  fastify.post<{ Body: PostFormAttemptRequestType }>(
    "/attempt", 
    { schema: { body: postFormAttemptRequest } }, 
    (request) => createFormAttempt(request.body)
  );
};

export default formRoutes;