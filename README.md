# Black Book Tattoo Studio

_This is a project for a tattoo studio & barbershop._

### Running nginx & express.js:

#### App running on `/var/www/`

- in `/html` serving static files
- in `/server` running the express server on port `80`

## Set up project

Client side:

1. Run: `npm run dev`
2. Build: `npm run build` to build your project to `./dist` folder

Server side:

1. Run `node server.js` / `nodemon server.js` to start server

- Check .env variables in both `root` and `./server` projects

## Tech stack

### Frontend

- React + Typescript
- SCSS

### Backend

- Node.js
- Express
- log4js
- nodemailer

### Libraries

- Formik
- Yup
- React Router Dom
- Akar Icons
- reCaptchav2
- material-ui
- open layer maps
- react carousel

### Other

- Connected Google Analytis
- SSL by letsencrypt
