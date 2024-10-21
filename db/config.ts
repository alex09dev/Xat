import { defineDb, defineTable, column } from 'astro:db';

const Comment = defineTable({
  columns: {
    author: column.text(),
    text: column.text(),
    date: column.text(),
  }
})

export default defineDb({
  tables: { Comment },
})