import { FormCreateRequestType } from "../../models/formCreateRequest";
import prisma from "../../services/prisma";

export async function createFormVersion(data: FormCreateRequestType) {
  console.log(`Form Create request from ${data.userEmail}`);

  // In reality the userEmail/userId would come from the user token (not a user client provided field)
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
    // Update existing form version
    const newFormVersion = await prisma.formVersion.update({
      where: {
        id: formVersionId,
      },
      data: {
        content: data.content,
      },
    });
  } else {
    // Create a new form version
    const newFormVersion = await prisma.formVersion.create({
      data: {
        formId: formId,
        content: data.content,
      },
    });

    formVersionId = newFormVersion.id;
  }

  return formVersionId;
}
