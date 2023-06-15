/*
  Warnings:

  - Made the column `isAdmin` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "isAdmin" SET NOT NULL,
ALTER COLUMN "isAdmin" SET DEFAULT false;
