import { db,Comment } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	await db.insert(Comment).values([
		{
			author: "Pep",
			text: "Què passa nen",
			date: "21/10/24"
		}
	])
}


