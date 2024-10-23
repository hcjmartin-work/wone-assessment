import { PostFormAttemptRequestType } from "../../models/postFormAttempt";
import prisma from "../../services/prisma";

export async function createFormAttempt(data: PostFormAttemptRequestType) {
  console.log(`Create Form Attempt request`);

  // TODO: User mapping/handling not implemented

  const formAttempt = await prisma.userFormAttempts.create({
    data: {
      formVersionId: data.formVersionId,
      completed: data.completed,
      content: data.content
    }
  });

  return formAttempt.id;
}
