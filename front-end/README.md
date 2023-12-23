# React Micro Frontend Build Scripts

This repository contains build scripts for a React application using Webpack.

## Available Scripts

### Production Build

To build the application# Miro Frontend

This repository contains three separate folders, each representing a different micro-frontend application

## Folder Structure

### Folder 1 - authentication-app

Description: Authentication micro frontend, with the features of login, sign-up, forgot password, 2FA

- **Folder Name**: `authentication-app`
- **Build Scripts**:
  - `build`: Webpack production build
  - `build:dev`: Webpack development build
  - `build:start`: Start server for `dist` on port 3001
  - `start`: Start development server
  - `start:live`: Start live-reloading server with hot module replacement
  - `lint`: Code linting using ESLint and Prettier
  - `lint:fix`: Automatically fix linting issues
  - `lint:format`: Format code according to rules

### Folder 2 - dashboard-app

Description: Dashboard page micro frontend of the application

- **Folder Name**: `dashboard-app`
- **Build Scripts**:
  - `build`: Webpack production build
  - `build:dev`: Webpack development build
  - `build:start`: Start server for `dist` on port 3002
  - `start`: Start development server
  - `start:live`: Start live-reloading server with hot module replacement
  - `lint`: Code linting using ESLint and Prettier
  - `lint:fix`: Automatically fix linting issues
  - `lint:format`: Format code according to rules

### Folder 3 - main-app

Description: Main application that integrates the above micro frontend

- **Folder Name**: `main-app`
- **Build Scripts**:
  - `build`: Webpack production build
  - `build:dev`: Webpack development build
  - `build:start`: Start server for `dist` on port 3000
  - `start`: Start development server
  - `start:live`: Start live-reloading server with hot module replacement
  - `lint`: Code linting using ESLint and Prettier
  - `lint:fix`: Automatically fix linting issues
  - `lint:format`: Format code according to rules

## Usage

Each folder contains its own set of build scripts. Navigate to the respective folder and use the appropriate scripts according to your requirements.

```bash
npm run build
```
