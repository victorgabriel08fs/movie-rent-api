/*
  Warnings:

  - The primary key for the `movie_rent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `movie_rent` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_movie_rent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "movie_rent_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "movie_rent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_movie_rent" ("created_at", "movieId", "status", "updated_at", "userId") SELECT "created_at", "movieId", "status", "updated_at", "userId" FROM "movie_rent";
DROP TABLE "movie_rent";
ALTER TABLE "new_movie_rent" RENAME TO "movie_rent";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
