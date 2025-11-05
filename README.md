# Sauce Demo — Cypress Page Object Model (POM)
## Overview

This repository contains a Cypress test suite that automates a basic e-commerce flow on Sauce Demo using the Page Object Model (POM) pattern.

## Design choices
POM — Each page has a class with its selectors and actions to keep tests readable and reusable.
Fixtures — Static test data (e.g., usernames) are stored in cypress/fixtures.
Custom commands — Reusable flows (e.g., cy.login) live in cypress/support/commands.js.
Parameterized tests — Test specs accept arguments (product names, users) so tests are data-driven.

## How to Run
1. Install dependencies
  - npm -i init -> for installing package.json on to your project
  - npm install cypress --save-dev
2. Open Cypress Test Runner:

   .node_modules/.bin/cypress open OR npx cypress open
4. Run headless:
  npx cypress run

### Contact
If anything fails when you push or run the tests, paste the error output here and I'll help debug.
