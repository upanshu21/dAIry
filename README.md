<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/nafisk/notebookai">
    <img src="./src/app/assets/favicon_package_v0.16/android-chrome-512x512.png" alt="Logo" height="140">
  </a>
  
  <h3 align="center"><a href="https://notebookai.nafisk.com/">NotebookAI</a></h3>

  <p align="center">
    A powerful note-taking application to organize your thoughts and ideas.
    <br />
    <a href="src/app/assets/demo.gif">View Demo</a>
    ·
    <a href="https://github.com/nafisk/notebookai/issues">Report Bug</a>
    ·
    <a href="https://github.com/nafisk/notebookai/issues">Request Feature</a>
  </p>
</div>

## About the Project

NotebookAI is designed to help you organize your notes in an efficient and user-friendly manner. Whether it's for work, study, or personal use, our application provides a range of features to support your note-taking needs.

Here's why:

- **Your time should be focused on creating something amazing.** NotebookAI provides a streamlined interface that allows you to focus on taking notes and organizing your thoughts without unnecessary distractions.
- **You should implement DRY (Don't Repeat Yourself) principles to the rest of your life.** NotebookAI ensures that your notes are easily searchable and organized, saving you time and effort in the long run.

### Built With

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)][Next.js-url]
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)][TypeScript-url]
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)][Tailwind-url]
[![Clerk](https://img.shields.io/badge/Clerk-000000?style=for-the-badge&logo=clerk&logoColor=white)][Clerk-url]
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)][Prisma-url]
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)][MongoDB-url]
[![Pinecone](https://img.shields.io/badge/Pinecone-000000?style=for-the-badge&logo=pinecone&logoColor=white)][Pinecone-url]
[![Zod](https://img.shields.io/badge/Zod-3178C6?style=for-the-badge&logo=zod&logoColor=white)][Zod-url]
[![Vercel](https://img.shields.io/badge/Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)][Vercel-url]

</div>

[Next.js-url]: https://nextjs.org/
[TypeScript-url]: https://www.typescriptlang.org/
[Tailwind-url]: https://tailwindcss.com/
[Clerk-url]: https://clerk.dev/
[Prisma-url]: https://www.prisma.io/
[MongoDB-url]: https://www.mongodb.com/
[Pinecone-url]: https://www.pinecone.io/
[Zod-url]: https://zod.dev/
[Vercel-url]: https://vercel.com/

## Demo

<img src="src/app/assets/demo.gif" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Installation

1. Clone the repo

```sh
git clone https://github.com/nafisk/notebookai.git
```

2. Install the dependencies by running `npm i`.
3. Create an OpenAI and a Pinecone account for API keys
4. Create an `.env` file, populated with the values specified in the `.env.example` file

### Setting Up the Database

For this application, you can use MongoDB as your database provider. Follow this guide to set up MongoDB. Once your database is set up, you can push the schema defined in this repository to your database by running:

```sh
npm prisma migrate deploy
```

### Running the Front End

To run the front-end code (in development mode), run:

```sh
npm run dev
```

- For production, build the code using `npm build` and then `npm start` to run off the build

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features

### Note Management

- Create and Edit Notes: Users can create new notes and edit existing ones using a rich text editor
- Tagging System: Organize your notes with tags for easy searchability (currently being worked on)

### User Authentication

- Secure Login: User authentication is managed using Clerk.
- User Profiles: Each user has a profile where they can manage their personal information.

### Advanced Search

- Search Functionality: Users can search their notes by keywords, tags, or dates using Pinecone for enhanced search capabilities.

### Theming

- Dark Mode: The application supports dark mode for comfortable note-taking in low-light environments.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Nafis Khan - [LinkedIn](https://www.linkedin.com/in/nafisrk/) · [Email](nafisrizwank@gmail.com) · [Twitter](https://twitter.com/nafisxk)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
