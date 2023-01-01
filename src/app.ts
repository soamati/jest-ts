import "reflect-metadata";
import { Author } from "./entity/Author";
import { Book } from "./entity/Book";
import createDataSource from "./lib/createDataSource";

async function main() {
  const dataSource = await createDataSource();

  const author = new Author();
  author.name = "Mati";

  const book1 = new Book();
  book1.title = "Book 1";

  const book2 = new Book();
  book2.title = "Book 1";

  author.books = [book1, book2];
  await author.save();

  console.log(author);
  console.log("Done 🌱");

  process.exit(0);
}

main();
