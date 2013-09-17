#!/bin/bash
printf "\n\n"
printf "# ############### #\n"
printf "Retina Image Viewer\n"
printf "# ############### #\n\n"
printf "You are now running a server on port 8000! You can visit this in your browser by typing\n\n"
printf "\t\t\thttp://localhost:8000\n\n"
printf "into your browser window. When you are ready stop the server, simply close the terminal window or press Ctrl + C\n\n\n\n\n"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd ${DIR} && python -m SimpleHTTPServer