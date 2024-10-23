import { testHandler } from './admin/testHandler'
import { FastifyPluginAsync } from "fastify";

const formRoutes: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", testHandler); // Get a Form 
  fastify.get("/attempt", testHandler); // Get a Form attempt
  fastify.post("/attempt", testHandler); // Post a Form attempt
};

export default formRoutes;