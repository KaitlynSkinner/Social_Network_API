# Social_Network_API

## Description
An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.


## User Story
As a social media startup, I want an API for my social network that uses a NoSQL database in order for my website to handle large amounts of unstructured data.


## Table of Contents
  * [Features](#features)
  * [Technology Used](#technologyused)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Photos](#photos)
  * [License](#license)
  * [Credits](#credits)
  * [Contribute](#contribute)
  * [Tests](#tests)
  * [Questions](#questions)


## Features
 * Signup - with a username and email
 * User's can create thoughts
 * User's can react to other user's thoughts
 * View existing thoughts and their reactions
 * User's can also delete or update their thoughts and reactions
 * Application deletes a user's associated thoughts when the user is deleted.


## Technology Used
* **Git:** Version control system to track changes to source code.

* **GitHub:** Hosts repository that can be deployed to GitHub Pages.

* **Node.js:** Used for package managment and to execute JavaScript code to build the command line tool for server-side scripting.

* **Express.js:** Express. js is a Node. js web application server framework, designed for building single-page, multi-page, and hybrid web applications. Used in this application to set middle ware for end point connection between the front end and backend.

* **Mongoose:** is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.

* **MongDB:** is a general purpose, document-based, distributed NoSQL database built for web application developers in the cloud era. It’s one of the most popular database choices for modern applications.

* **MongoDB Atlas:** is a cloud-based database service that's created and maintained by MongoDB. It works with hosting services such as AWS, Azure, and Google Cloud to help users provision, maintain, and secure new databases for their applications.



## Installation
Download or clone the repository URL
To install packages run the following command:
  ```
  # using npm
  npm i
  ```


## Usage
 Once installed, type ```npm start``` to run the application.


## Photos
 **Current Application Screenshots**
** GET All Users **
![Deployed Application](https://github.com/KaitlynSkinner/Social_Network_API/blob/b996a423efbe483c94152554fad582f3e097ad30/assets/images/GET-api-users.png?raw=true)
** GET All Thoughts **
![Deployed Application](https://github.com/KaitlynSkinner/Social_Network_API/blob/b996a423efbe483c94152554fad582f3e097ad30/assets/images/GET-api-thoughts.png?raw=true) 
 ** GET One User **
![Deployed Application](https://github.com/KaitlynSkinner/Social_Network_API/blob/b996a423efbe483c94152554fad582f3e097ad30/assets/images/GET-api-users-userId.png?raw=true)
** GET One Thought **
![Deployed Application](https://github.com/KaitlynSkinner/Social_Network_API/blob/b996a423efbe483c94152554fad582f3e097ad30/assets/images/GET-api-thoughts-thoughtId.png?raw=true)
** POST a user **
![Deployed Application](https://github.com/KaitlynSkinner/Social_Network_API/blob/b996a423efbe483c94152554fad582f3e097ad30/assets/images/POST-api-users.png?raw=true)
** PUT a user **
![Deployed Application](https://github.com/KaitlynSkinner/Social_Network_API/blob/b996a423efbe483c94152554fad582f3e097ad30/assets/images/PUT-api-users-userId.png?raw=true)
** DELETE a user **
![Deployed Application](https://github.com/KaitlynSkinner/Social_Network_API/blob/b996a423efbe483c94152554fad582f3e097ad30/assets/images/DELETE-api-users-userId.png?raw=true)
** POST a friend to a user **
![Deployed Application](https://github.com/KaitlynSkinner/Social_Network_API/blob/b6abe10791e87988adb07ff752cb4d757378530a/assets/images/POST-api-users-userId-friends-friendId.png?raw=true)
** DELETE a friend from a user **
![Deployed Application](https://github.com/KaitlynSkinner/Social_Network_API/blob/b6abe10791e87988adb07ff752cb4d757378530a/assets/images/DELETE-api-users-userId-friends-friendId.png?raw=true)
** POST a reaction to a thought **
![Deployed Application](https://github.com/KaitlynSkinner/Social_Network_API/blob/b6abe10791e87988adb07ff752cb4d757378530a/assets/images/POST-api-thoughts-thoughId-reactions.png?raw=true)
** DELETE a reaction to a thought **
![Deployed Application](https://github.com/KaitlynSkinner/Social_Network_API/blob/b6abe10791e87988adb07ff752cb4d757378530a/assets/images/DELETE-api-thoughts-thoughtId-reactions-reactionId.png?raw=true)

## License
This application does not have a license. 


## Credits
The application does not have any collaborators at this time.


## Contribute
This application is not open to contributors at this time.


## Tests
This application does not have any tests.


## Questions
If you have any questions please feel free to contact me.
** **
**Email:** kaitlyneskinner@gmail.com
** **
**GitHub Username:** kaitlynskinner