-- CreateTable
CREATE TABLE "UserFormAttempts" (
    "id" SERIAL NOT NULL,
    "formVersionId" INTEGER NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "content" JSONB,

    CONSTRAINT "UserFormAttempts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserFormAttempts" ADD CONSTRAINT "UserFormAttempts_formVersionId_fkey" FOREIGN KEY ("formVersionId") REFERENCES "FormVersion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
