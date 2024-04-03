Author :- Ankit K Kashyap
# what is this all about ?

This ia node project that serve the directory over local/internet if port forwarding enabled. 
Host your local disk in you LAN / WAN. so that any one can access your hard disk over the network by using the web browser like indexing

# How to host  ?
For development :-
1. npm i 
2. npm start

# For production Build :- 
npm run build
inside shareMe/app.js the build is ready to run in any where without any node_module file 
if you want to know to build go to :- https://youtu.be/P1v227ZFqM4

simple download/copythe shareMe folder and run the below command only available after npm run build.

#  For running with flags 

-p for port
-d for directory. 

node app.js -p 3000 -d ../abc/yourDirectory# hostmydisk

# Don't know nodejs still wanna use ? 
step 1 :- Download Nodejs from the official site or googling it.
step 2 :- npm i hostmydisk
step 3 :- npm run build
step 4 :- copy the folder ./shareMe where you want to serve the content
step 5 :- Open terminal / poweshell and run node app in the same path. 

