import { PostFormAttemptRequestType } from "../../models/postFormAttempt";
import prisma from "../../services/prisma";

/**
 * Creates or updates a user form attempt.
 * 
 * Updates existing if attempt id is provided
 * Otherwise, creates new
 */
export async function createFormAttempt(data: PostFormAttemptRequestType) {
  console.log(`Create Form Attempt request`);

  // TODO: User mapping/handling not implemented

  var formAttemptId = data.formAttemptId;

  if (formAttemptId) {
    try {
      await prisma.userFormAttempts.update({
        where: {
          id: formAttemptId,
        },
        data: {
          completed: data.completed,
          content: data.content,
        },
      });
    } catch (e) {
      throw {
        statusCode: 400,
        message: `Unable to update attempt id ${data.formAttemptId}`,
      };
    }
  } else {
    const formAttempt = await prisma.userFormAttempts.create({
      data: {
        formVersionId: data.formVersionId,
        completed: data.completed,
        content: data.content,
      },
    });

    formAttemptId = formAttempt.id;
  }

  return { "formAttemptId": formAttemptId };
}
