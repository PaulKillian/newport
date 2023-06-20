// import { makeSource, defineDatabase } from 'contentlayer-source-notion'
// import { defineDocumentType } from 'contentlayer/source-files'
// import { Client } from '@notionhq/client'

// const client = new Client({ auth: 'https://www.notion.so/Database-d6a3517e08ed49ecbba257dba4185576' })

// export const Portfolio = defineDatabase(() => ({
//   name: 'Portfolio',
//   databaseId: '<databaseId>',
//   query: {
//     filter: {
//       property: 'Status',
//       status: {
//         equals: 'Done',
//       },
//     },
//   },
//   properties: {
//     date: {
//       name: 'Created time',
//     },
//   },
//   computedFields: {
//     url: {
//       type: 'string',
//       resolve: (post) => `/posts/${post._id}`,
//     },
//   },
// }))

// export default makeSource({
//   client,
//   databaseTypes: [],
// })

// export const Post = defineDocumentType(() => ({
//   name: 'Post',
//   filePathPattern: `**/*.md`,
//   fields: {
//     title: { type: 'string', required: true },
//     date: { type: 'date', required: true },
//   },
//   computedFields: {
//     url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
//   },
// }))

// export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })

