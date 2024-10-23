
import { PostFormVersionRequestType } from "../../models/postFormVersionRequest";
import prisma from "../../services/prisma";

export async function createFormVersion(data: PostFormVersionRequestType) {
  console.log(`Form Create request from ${data.userEmail}`);

  // TODO: The userEmail/userId would come from the user token / auth (not a user client provided field)
  const user = await prisma.user.findUnique({
    where: {
      email: data.userEmail,
      role: "ADMIN",
    },
  });

  if (!user) {
    throw { statusCode: 400, message: "Invalid user." };
  }

  // If no formId is provided, create new Form
  var formId = data.formId;

  if (!formId) {
    const newForm = await prisma.form.create({
      data: {
        ownerId: user.id,
      },
    });

    formId = newForm.id;
  }

  // If a formVersionId is provided, update existing
  var formVersionId = data.formVersionId;

  if (formVersionId) {
    // Disallow updating existing form versions
    throw { statusCode: 400, message: "Cannot modify an existing form version." };
  } else {
    // Create a new form version
    const newFormVersion = await prisma.formVersion.create({
      data: {
        formId: formId,
        content: data.content,
      },
    });

    formVersionId = newFormVersion.id;

    // TODO: This could be simplified to one query
    const updatedForm = await prisma.form.update({
      where: { id: formId },
      data: {
        currentFormVersionId: formVersionId,
      },
    });
  }

  return formVersionId;
}
