-- CreateTable
CREATE TABLE "sessions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
