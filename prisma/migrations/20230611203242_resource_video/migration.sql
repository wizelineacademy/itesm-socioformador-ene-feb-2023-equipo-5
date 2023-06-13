-- CreateTable
CREATE TABLE "ResourceVideo" (
    "id" TEXT NOT NULL,
    "videoURL" TEXT NOT NULL,
    "level" "Englishlevel" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResourceVideo_pkey" PRIMARY KEY ("id")
);
