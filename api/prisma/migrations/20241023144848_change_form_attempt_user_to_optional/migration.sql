-- DropForeignKey
ALTER TABLE "UserFormAttempts" DROP CONSTRAINT "UserFormAttempts_userId_fkey";

-- AlterTable
ALTER TABLE "UserFormAttempts" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "UserFormAttempts" ADD CONSTRAINT "UserFormAttempts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
