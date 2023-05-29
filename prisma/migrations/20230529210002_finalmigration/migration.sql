/*
  Warnings:

  - You are about to drop the column `resources` on the `Test` table. All the data in the column will be lost.
  - You are about to drop the column `result` on the `Test` table. All the data in the column will be lost.
  - Added the required column `coherence` to the `Test` table without a default value. This is not possible if the table is not empty.
  - Added the required column `grammar` to the `Test` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recommendation` to the `Test` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vocabulary` to the `Test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Test" DROP COLUMN "resources",
DROP COLUMN "result",
ADD COLUMN     "coherence" INTEGER NOT NULL,
ADD COLUMN     "grammar" INTEGER NOT NULL,
ADD COLUMN     "recommendation" TEXT NOT NULL,
ADD COLUMN     "vocabulary" INTEGER NOT NULL;
