# Auto-Files Extension for Visual Studio Code

The Auto-Files extension for Visual Studio Code allows you to quickly create a new folder with a specified name, containing three files: `[filename].tsx`, `[filename].scss`, and `[filename].stories.tsx`. It's a handy tool for developers working with TypeScript components, enabling rapid file and folder creation with just a few clicks or a simple command.

## Features

- **Right-Click Menu Integration**: Right-click on any folder in the Explorer pane to run the "Create Typescript component files" command directly from the context menu.
- **Command Palette Support**: Run the "Create Typescript component files" command from the Command Palette (`Ctrl+Shift+P`) to specify a folder and filename.
- **Predefined File Templates**: Automatically populates the created files with basic starting code, saving you time and effort.

## Usage

### Using the Right-Click Menu

1. Right-click on a folder in the Explorer pane.
2. Select "new Component" from the context menu.
3. Enter the desired filename in the input box.
4. The new folder and files will be created inside the selected folder.

### Using the Command Palette

1. Press `Ctrl+Shift+P`/ `Cmd+Shift+P` to open the Command Palette.
2. Type "New Component" and select the command.
3. If no folder is selected, you'll be prompted to choose a folder.
4. Enter the desired filename in the input box.
5. The new folder and files will be created inside the selected or specified folder.

## Example Output

When you run the command and specify a filename (e.g., "MyComponent"), the following folder and files will be created:

```
MyComponent/
├── MyComponent.tsx
├── MyComponent.scss
├── MyComponent.stories.tsx

```

### MyComponent.tsx

```tsx
// Example content for MyComponent.tsx
import React from "react";

const MyComponent = () => {
  return <div className="my-component">MyComponent works!</div>;
};

export default MyComponent;
```

```Example content for MyComponent.scss
.my-component {

}
```

```Example content for MyComponent.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import MyComponent from "./MyComponent";

const meta = {
title: "Blocks/MyComponent",
component: MyComponent,
parameters: {
layout: "centered",
},
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};

```

## Installation

You can install the Auto-Files extension from the Visual Studio Code Marketplace or download the `.vsix` file and install it manually.

## Support and Contributions

Contributions are welcome! Feel free to submit a pull request.
