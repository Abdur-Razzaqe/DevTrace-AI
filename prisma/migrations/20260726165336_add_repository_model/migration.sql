/*
  Warnings:

  - A unique constraint covering the columns `[githubUsername]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."user" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "githubUsername" TEXT,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "website" TEXT;

-- CreateTable
CREATE TABLE "public"."Repository" (
    "id" TEXT NOT NULL,
    "githubId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "description" TEXT,
    "language" TEXT,
    "stars" INTEGER NOT NULL DEFAULT 0,
    "forks" INTEGER NOT NULL DEFAULT 0,
    "defaultBranch" TEXT,
    "htmlUrl" TEXT NOT NULL,
    "isPrivate" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "Repository_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Repository_githubId_key" ON "public"."Repository"("githubId");

-- CreateIndex
CREATE UNIQUE INDEX "user_githubUsername_key" ON "public"."user"("githubUsername");

-- AddForeignKey
ALTER TABLE "public"."Repository" ADD CONSTRAINT "Repository_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
