
import { testHandler } from './admin/testHandler'
import { FastifyPluginAsync } from "fastify";
import { getFormContent } from './forms/getFormContent';
import { getFormContentRequest, GetFormContentRequestType } from '../models/getFormContent';
import { postFormAttemptRequest, PostFormAttemptRequestType } from '../models/postFormAttempt';
import { createFormAttempt } from './forms/createFormAttempt';

const formRoutes: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/attempt", testHandler); // TODO: Get a Form attempt by id

  fastify.get<{ Querystring: GetFormContentRequestType }>(
    "/", 
    { schema: { querystring: getFormContentRequest } }, 
    (request) => getFormContent(request.query)
  ); // Get a form version

  fastify.post<{ Body: PostFormAttemptRequestType }>(
    "/attempt", 
    { schema: { body: postFormAttemptRequest } }, 
    (request) => createFormAttempt(request.body)
  ); // Post a Form attempt
};

export default formRoutes;