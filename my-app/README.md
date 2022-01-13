Hello and welcome to my test job.

How to run dev mode? 
>npm start
How to build production build?
>npm run build
How to serve production build?
First you need to have "serve" library installed, then run:
>npm serve -s build

Windows machines might run into an error: "serve.ps1 cannot be loaded because running scripts is disabled on this system".
For that open powershell with admin rights and run: "Set-ExecutionPolicy Unrestricted".
Do so at your own risk.

After front-end server is running we need to start the back-end server
>node src/imageServer.js

Sadly this release does not work with the production build, front-end is fine but the server file does not get included.
I hopo dev mode is enough for now.

products.json must contain an empty array at the least