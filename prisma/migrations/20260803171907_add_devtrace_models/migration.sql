/*
  Warnings:

  - A unique constraint covering the columns `[providerId,accountId]` on the table `account` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."Repository" ADD COLUMN     "defaultBranch" TEXT NOT NULL DEFAULT 'main',
ADD COLUMN     "forks" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "openIssues" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "stars" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE INDEX "Activity_userId_idx" ON "public"."Activity"("userId");

-- CreateIndex
CREATE INDEX "Commit_repositoryId_idx" ON "public"."Commit"("repositoryId");

-- CreateIndex
CREATE INDEX "Repository_userId_idx" ON "public"."Repository"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "account_providerId_accountId_key" ON "public"."account"("providerId", "accountId");
