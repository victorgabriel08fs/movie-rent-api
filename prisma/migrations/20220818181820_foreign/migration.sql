-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_movie_rent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "movieId" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "movie_rent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "movie_rent_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_movie_rent" ("created_at", "id", "movieId", "status", "updated_at", "userId") SELECT "created_at", "id", "movieId", "status", "updated_at", "userId" FROM "movie_rent";
DROP TABLE "movie_rent";
ALTER TABLE "new_movie_rent" RENAME TO "movie_rent";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
