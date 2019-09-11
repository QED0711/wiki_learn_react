# Wiki Learn (React Frontend)

This is the React frontend companion application to the main [Wiki Learn](https://github.com/QED0711/wiki_learn) project. See the main project for more details on the design of the recommendation system and classifier models. See [here](https://github.com/QED0711/wiki_learn_flask) for the backend component to this companion web app. 

If you would like to run a local version of this application on your device, see the installation instructions below. 

___

## Installation:

_Note: this installation assumes that you have `node` and `npm` installed on your device._

Once forked, clone this repository and cd in the project directory:

```
$ git clone git@github.com:QED0711/wiki_learn_react.git

$ cd wiki_learn_react
```

Once in the directory, you will need to install all the required packages:

```
$ npm install
```

Once all packages have been installed, start the react server on port 3000 as you normally would:

```
$ npm start
```

___

## Notes:

In order to make new article requests, you will need to have the companion flask backend running on port 5000. Installation instructions for the backend can be found [here](https://github.com/QED0711/wiki_learn_flask).