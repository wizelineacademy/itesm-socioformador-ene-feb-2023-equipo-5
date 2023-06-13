/*
  Warnings:

  - You are about to drop the column `summary` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Comments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Teacher` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_instructorId_fkey";

-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_situationId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "summary",
ADD COLUMN     "isAdmin" BOOLEAN;

-- DropTable
DROP TABLE "Comments";

-- DropTable
DROP TABLE "Teacher";
