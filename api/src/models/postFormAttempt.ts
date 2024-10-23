import { Static, Type } from '@sinclair/typebox'

export const postFormAttemptRequest = Type.Object({
  // TODO: Add user email/id handling
  formVersionId: Type.String(),
  content: Type.String(),
  completed: Type.Boolean({default: false}),
  formAttemptId: Type.Optional(Type.String())
})

export type PostFormAttemptRequestType = Static<typeof postFormAttemptRequest>