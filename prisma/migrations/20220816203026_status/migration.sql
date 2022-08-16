-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_movie_rent" (
    "userId" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("userId", "movieId"),
    CONSTRAINT "movie_rent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "movie_rent_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_movie_rent" ("movieId", "userId") SELECT "movieId", "userId" FROM "movie_rent";
DROP TABLE "movie_rent";
ALTER TABLE "new_movie_rent" RENAME TO "movie_rent";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
