import { Static, Type } from '@sinclair/typebox'

export const getFormContentRequest = Type.Object({
  formId: Type.Optional(Type.String()),
  formVersionId: Type.Optional(Type.String()),
});

export type GetFormContentRequestType = Static<typeof getFormContentRequest>