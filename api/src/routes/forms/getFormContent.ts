import { GetFormContentRequestType } from "../../models/getFormContent";
import prisma from "../../services/prisma";

export async function getFormContent(data: GetFormContentRequestType) {
  console.log(`Get Form request`);

  var formVersionId = data.formVersionId;

  if (!formVersionId) {
    if (!data.formId) {
      throw { statusCode: 400, message: `formId or formVersionId must be provided to retrieve a form.` };
    }

    const form = await prisma.form.findUnique({
      where: {
        id: data.formId
      },
    });

    if (form?.currentFormVersionId) {
      formVersionId = form.currentFormVersionId
    } else {
      throw { statusCode: 400, message: `Unable retrieve current version of form ${data.formId}` };
    }
  }
  
  const formVersion = await prisma.formVersion.findUnique({
    where: {
      id: formVersionId
    },
  });

  return formVersion?.content;
}
