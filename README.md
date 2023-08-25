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
   ![Usage video](https://media.cleanshot.cloud/media/33864/WMpJHNXpgu90MbiYgg1kARJVeLCdiCzEVyNp4EYb.gif?Expires=1693002660&Signature=PkjQGjZns2Y44OFGIOdfNO5bC9G7whHDAaXJzY4qlgRZlk-Z4rR7J64Pr6hUVT4Itp3C-IfzH2HCN7k3jSjZr2LlZKRvFZVqy5r7OZlfYPR1BWBLI3n1chSqJC8ZerTTzxv122Dmm8UMhx-QqhemX9dN5V~NO2Cii-AGk4WTlKt04l5Kkm-gGAz5UcQNHD4AMa7NkgVhzleCrCu7Ry0Ra3Qk2uR-0cWAjOXhk5Xz~WadIxkyjGp1ExJo06bx-6XuUc5D3j3VMooov6rfSIRxg08YujU2dIAvhCRaYuyT3f2cdZQqoA02DdmTqgAJbVi4VqArVhR~6QOKX5oOGR2WHA__&Key-Pair-Id=K269JMAT9ZF4GZ)

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
import React from "react";
import "./MyComponent.scss";

const MyComponent = () => {
  return <div className="my-component">MyComponent</div>;
};
export default MyComponent;
```

### MyComponent.scss

```scss
.my-component {
}
```

### MyComponent.stories.tsx

```tsx
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

If you encounter any issues or have suggestions for improvements, please [open an issue on GitHub](https://github.com/tiddi2/auto-files).

Contributions are welcome! Feel free to submit a pull request.
