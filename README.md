#focus

Block websites that prevents you from being productive :p

Display disapproval images to make you feel bad.

![Disapproval](/images/look.png)

##Important
Your root password will be required to run this project because blocking occurs by writing to /etc/hosts, and the node.js server has to run (does it really?) with sudo as well in order to listen to port 80. So use it at your own risk.

##Setting up the environment
1. Node.js must be installed

2. [Generate a SSL certificate](http://docs.nodejitsu.com/articles/HTTP/servers/how-to-create-a-HTTPS-server) in order to create your HTTPS server successfully

3. Run the server
```
  $ ./server
```
