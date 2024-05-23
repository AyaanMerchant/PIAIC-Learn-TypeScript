
<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/PIAIC_Logo.svg" alt="Your Image Description">
</p>

<p align="center">
  <h2 align="center">:eight_spoked_asterisk: PIAIC-Learn-TypeScript (Batch - 58) :eight_spoked_asterisk:</h2>

  <p align="center">
TypeScript is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript.
  </p>

<p align="center">
    <a href="https://github.com/AyaanMerchant/PIAIC-Learn-TypeScript/stargazers" alt="Stars">
        <img src="https://img.shields.io/github/stars/AyaanMerchant/PIAIC-Learn-TypeScript?style=for-the-badge" /></a>
    <a href="https://github.com/AyaanMerchant/PIAIC-Learn-TypeScript/network/members" alt="Forks">
        <img src="https://img.shields.io/github/forks/AyaanMerchant/PIAIC-Learn-TypeScript?style=for-the-badge" /></a>
    <a href="https://www.typescriptlang.org/" alt="TypeScript Official">
        <img src="https://img.shields.io/badge/Official-TypeScript-blue.svg?longCache=true&style=for-the-badge" /></a>
    <a href="https://www.typescriptlang.org/docs/" alt="TypeScript Documentation">
        <img src="https://img.shields.io/badge/TypeScript-Docs-green?style=for-the-badge" /></a>
</p>

  <h2 align="center"> TypeScript Environment Setup </h2>
  <p align="center">
    
### Step 1: Install Node.js
1. Open your web browser and go to [Node.js website](https://nodejs.org/).
2. Click on the "LTS" version download button to download the Node.js installer.
3. Run the installer and follow the on-screen instructions, using the default settings.

### Step 2: Install TypeScript
1. Open your terminal (Command Prompt or PowerShell on Windows).
2. Run the following command to install TypeScript globally:
   - For Windows users: `npm install -g typescript`
   - For Mac users: `sudo npm install -g typescript`

### Step 3: Install Visual Studio Code (VSCode)
1. Go to [VSCode download page](https://code.visualstudio.com/Download).
2. Download the appropriate version for your operating system.
3. Run the installer and follow the on-screen instructions.

### Step 4: Initialize TypeScript Configuration
1. Open VSCode and open the integrated terminal (`View` > `Terminal`).
2. Navigate to your project folder using the `cd` command.
3. Initialize a TypeScript project with the command: `tsc --init`

### Step 5: Set Execution Policy (Windows Users Only)
1. Open Windows PowerShell as an administrator.
2. Set the execution policy with the command: `Set-ExecutionPolicy RemoteSigned`

### Step 6: Make it a Node.js Project
1. In the terminal, create a `package.json` file with the command: `npm init -y`

### Step 7: Write TypeScript Code
1. Create a new TypeScript file in your project directory (e.g., `index.ts`).
2. Write your TypeScript code in this file:
   ```typescript
   console.log("This is my first line of code");

### Step 8: Transpile TypeScript to JavaScript
1. In the terminal, run the command: `tsc`

### Step 9: Run Transpiled JavaScript
1. After transpilation, you'll find a corresponding JavaScript file in your project directory.
2. Run the JavaScript file using Node.js with the command: `node index.js`
3. You should see the output: `This is my first line of code`
