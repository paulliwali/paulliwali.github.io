# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Prerequisites

- [Node.js](https://nodejs.org/) version 16 or above
- [Yarn](https://yarnpkg.com/) package manager

To install Node.js and Yarn using [Homebrew](https://brew.sh/):

```
$ brew install node
$ brew install yarn
```

### Local Development

```
$ yarn install
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Troubleshooting

- If you encounter issues with dependencies, try deleting the `node_modules` folder and reinstalling:

  ```
  $ rm -rf node_modules
  $ yarn
  ```

- Ensure you are using the correct Node.js version by using a version manager like [nvm](https://github.com/nvm-sh/nvm).

### Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch to your fork.
4. Open a pull request to the main repository.

Please ensure your code follows the project's coding standards and includes appropriate tests.
