#Sahabat-Hukum API Documentation

##Endpoints :

List of Available Endpoints:
//HOMEPAGE
- `GET /`
//ADVOKAT PAGE
- `GET /advocates`
- `GET /advocates/:id `
//LOGIN & REGISTER
- `POST /register`
- `POST /login`
- `POST /register-advocate`
//DISKUSI DETAIL
- `GET /posts/:slug(include comment)`
- `POST /post/:slug/comment`
- `POST /posts/:slug/vote`
- `POST /post/:slug`
- `POST /:slug/comment/:commentId`
//TAMBAH DISKUSI
- `POST /posts`
//CHAT ADVOKAT
- `GET /chat/:roomId (Talk js)`
// ADVOKAT INBOX
- `GET /chats`
//CHAT AI
- `GET  /chat-ai/:roomId`
- `POST /chat-ai/:roomId `

&nbsp;
