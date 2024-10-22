import { testHandler } from './admin/testHandler'
import { FastifyPluginAsync } from "fastify";

const adminRoutes: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/test", testHandler);
};

export default adminRoutes;