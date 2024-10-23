import { postFormVersionRequest, PostFormVersionRequestType } from '../models/postFormVersionRequest';
import { createFormVersion } from './admin/createFormVersion';
import { testHandler } from './admin/testHandler'
import { FastifyPluginAsync } from "fastify";

const adminRoutes: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/test", testHandler); // Test route

/**
 * POST /admin/createForm
 * Create a new Form and Form Version
 * 
 * @body {PostFormVersionRequestType} - The form data to create a new form version.
 * @returns {formVersionId, formId} - The new form version id and new (or existing form id)
 */
  fastify.post<{ Body: PostFormVersionRequestType }>(
    "/createForm", 
    { schema: { body: postFormVersionRequest } }, 
    (request) => createFormVersion(request.body)
  );
};

export default adminRoutes;