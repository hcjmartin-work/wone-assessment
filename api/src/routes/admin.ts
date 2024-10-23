import { formCreateRequest, FormCreateRequestType } from '../models/formCreateRequest';
import { createFormVersion } from './admin/createFormVersion';
import { testHandler } from './admin/testHandler'
import { FastifyPluginAsync } from "fastify";

const adminRoutes: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/test", testHandler); // Test route

  fastify.post<{ Body: FormCreateRequestType }>(
    "/createForm", 
    { schema: { body: formCreateRequest } }, 
    (request) => createFormVersion(request.body)
  ); // Create a Form Version
};

export default adminRoutes;