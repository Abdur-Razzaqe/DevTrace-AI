/*
  Warnings:

  - You are about to drop the column `defaultBranch` on the `Repository` table. All the data in the column will be lost.
  - You are about to drop the column `forks` on the `Repository` table. All the data in the column will be lost.
  - You are about to drop the column `htmlUrl` on the `Repository` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `Repository` table. All the data in the column will be lost.
  - You are about to drop the column `stars` on the `Repository` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[fullName]` on the table `Repository` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `url` to the `Repository` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Repository` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Repository" DROP CONSTRAINT "Repository_ownerId_fkey";

-- AlterTable
ALTER TABLE "public"."Repository" DROP COLUMN "defaultBranch",
DROP COLUMN "forks",
DROP COLUMN "htmlUrl",
DROP COLUMN "ownerId",
DROP COLUMN "stars",
ADD COLUMN     "url" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."Commit" (
    "id" TEXT NOT NULL,
    "sha" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "committedAt" TIMESTAMP(3) NOT NULL,
    "additions" INTEGER NOT NULL DEFAULT 0,
    "deletions" INTEGER NOT NULL DEFAULT 0,
    "repositoryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Commit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Activity" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "details" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Commit_sha_key" ON "public"."Commit"("sha");

-- CreateIndex
CREATE UNIQUE INDEX "Repository_fullName_key" ON "public"."Repository"("fullName");

-- AddForeignKey
ALTER TABLE "public"."Repository" ADD CONSTRAINT "Repository_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Commit" ADD CONSTRAINT "Commit_repositoryId_fkey" FOREIGN KEY ("repositoryId") REFERENCES "public"."Repository"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Activity" ADD CONSTRAINT "Activity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
