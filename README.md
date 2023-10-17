# Mike IT Porfolio website

## Project Structure

HakkaStack project consists of a REST API and a web frontend.

- `backend` - Server logic is located in the /data folder and is handled with Next js. For this project no API is required.
- `frontend` - The web written in TypeScript in React.

## Git

I am using feature branches and merging via merge requests in Github. Naming conventions are:

- Feature: `feature/007-feature-name`
- Fix: `fix/007-fix-bug-name`

`007` is the number of the Trello task.

Feature and Fix branches are deployed by default.

## Backend

### Rules for adding content for stories and projects

- When adding new story or project, also create folder named by the corresponding ID
- All corresponding images must be located in this folder
- All project title images must be named title.jpg

## Frontend

To run the development server:

```bash
npm run dev
```

To build the app:

```bash
npm run dev
```

After making changes to the theme files run this command to update the supported types

```bash
npm run theme
```

### Links to sources for new topics I have learned while developing this project:

[How to include import of other types in ambient module declarations - namely in this project types.d.ts](https://stackoverflow.com/questions/39040108/import-class-in-definition-file-d-ts)
[Inspiration for horizontal springy scroll with framer motion](https://5crke.csb.app/)
[Article on handling video in React](https://blog.logrocket.com/guide-video-playback-react/)
