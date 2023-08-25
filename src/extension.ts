// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
const fs = require("fs");
const path = require("path");

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "auto-files.createFiles",
    async (folder) => {
      if (folder && folder.fsPath) {
        const folderPath = folder.fsPath;
        await createFilesInFolder(folderPath);
      } else {
        // Prompt the user to select a folder
        const folderUri = await vscode.window.showOpenDialog({
          canSelectFiles: false,
          canSelectFolders: true,
          canSelectMany: false,
          openLabel: "Select Folder",
        });

        if (folderUri && folderUri[0]) {
          const folderPath = folderUri[0].fsPath;
          console.log(folderPath);
          await createFilesInFolder(folderPath);
        }
      }
    }
  );

  context.subscriptions.push(disposable);
}

async function createFilesInFolder(folderPath: string) {
  const filename = await vscode.window.showInputBox({
    prompt: "Enter the folder name:",
  });
  if (filename) {
    const newFolderPath = path.join(folderPath, filename);
    //Create folder
    fs.mkdirSync(newFolderPath);
    // Create .tsx file
    generateTSX(newFolderPath, filename);
    // Create .scss file
    generateSCSS(newFolderPath, filename);
    // Create .stories.tsx file
    generateStory(newFolderPath, filename);
  }
}

function generateTSX(folderPath: any, filename: string) {
  fs.writeFileSync(
    path.join(folderPath, `${filename}.tsx`),
    `import "./${filename}.scss";

const ${filename} = () => {
  return (
    <div className="${toKebabCase(filename)}">
      ${filename}
    </div>
  )
};
export default ${filename};
`
  );
}

function generateStory(folderPath: any, filename: string) {
  fs.writeFileSync(
    path.join(folderPath, `${filename}.stories.tsx`),
    `import type { Meta, StoryObj } from "@storybook/react";
import ${filename} from "./${filename}";

const meta = {
title: "Blocks/${filename}",
component: ${filename},
parameters: {
layout: "centered",
},
} satisfies Meta<typeof ${filename}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
`
  );
}

function generateSCSS(folderPath: any, filename: string) {
  fs.writeFileSync(
    path.join(folderPath, `${filename}.scss`),
    `.${toKebabCase(filename)} {

}`
  );
}

function toKebabCase(str: string) {
  return str
    .replace(/([A-Z])/g, " $1") // Add space before each uppercase letter
    .trim() // Remove any leading or trailing spaces
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
}

// This method is called when your extension is deactivated
export function deactivate() {}
