/*
  Warnings:

  - The `level` column on the `Question` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `englishlevel` column on the `Test` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `englishlevel` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Englishlevel" AS ENUM ('A1', 'A2', 'B1', 'B2', 'C1', 'C2');

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "level",
ADD COLUMN     "level" "Englishlevel" NOT NULL DEFAULT 'A1';

-- AlterTable
ALTER TABLE "Test" DROP COLUMN "englishlevel",
ADD COLUMN     "englishlevel" "Englishlevel" NOT NULL DEFAULT 'A1';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "englishlevel",
ADD COLUMN     "englishlevel" "Englishlevel" NOT NULL DEFAULT 'A1';
