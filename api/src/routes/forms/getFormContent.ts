import { GetFormContentRequestType } from "../../models/getFormContent";
import prisma from "../../services/prisma";

/**
 * Retrieves the content of a specific form version.
 * 
 * If a form version ID is provided, the function retrieves the content for that specific version.
 * If only a form ID is provided, the function fetches the current version of the form using the form's
 * `currentFormVersionId` field. If neither ID is provided, an error is thrown.
 */
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
