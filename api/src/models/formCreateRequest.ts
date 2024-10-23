import { Static, Type } from '@sinclair/typebox'

export const formCreateRequest = Type.Object({
  userEmail: Type.String({ format: 'email' }),
  formId: Type.Optional(Type.String()),
  formVersionId: Type.Optional(Type.String()),
  content: Type.String()
})

export type FormCreateRequestType = Static<typeof formCreateRequest>