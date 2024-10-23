/*
  Warnings:

  - A unique constraint covering the columns `[currentFormVersionId]` on the table `Form` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Form" ADD COLUMN     "currentFormVersionId" UUID;

-- CreateIndex
CREATE UNIQUE INDEX "Form_currentFormVersionId_key" ON "Form"("currentFormVersionId");

-- AddForeignKey
ALTER TABLE "Form" ADD CONSTRAINT "Form_currentFormVersionId_fkey" FOREIGN KEY ("currentFormVersionId") REFERENCES "FormVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;
