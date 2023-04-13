/*
  Warnings:

  - You are about to drop the `Grades` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Grades" DROP CONSTRAINT "Grades_alumnId_fkey";

-- DropForeignKey
ALTER TABLE "Grades" DROP CONSTRAINT "Grades_instructorId_fkey";

-- DropTable
DROP TABLE "Grades";
