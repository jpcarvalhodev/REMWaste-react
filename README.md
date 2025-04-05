# REMWaste-react

A responsive React application for selecting skip packages for waste management. The project leverages Vite as the build tool, React for building the UI, Tailwind CSS for styling, and lucide-react for icons. The application provides an intuitive wizard navigation and a grid of skip package cards for users to choose the best skip for their needs.

## Overview

REMWaste-react is designed to guide users through selecting a skip package by displaying a step-by-step wizard at the top and a series of skip package cards below. The main features include:

- **Responsive Wizard Navigation:**  
  
  Displays multiple steps (e.g., "Postcode", "Waste Type", "Select Skip", "Permit Check", "Choose Date", "Payment") with icons.

  - **Desktop:** Steps are arranged horizontally with custom separators.
  - **Mobile:** Steps are organized in a grid of 2 columns with horizontal separators between pairs.
  - Icon colors change based on the step (steps 4 to 6 appear in white on mobile).

- **Skip Package Cards:**  
  
  Each card shows details such as:

  - **Size** (in yards)
  - **Hire Period** (in days)
  - **Pricing:** The price per week is calculated when available; otherwise, "Price on request" is displayed.
  - **Road Access:** Displays either "On Road" or "Private Property Only" based on data.
  - **Heavy Waste:** Indicates "Yes" or "No".
  - The cards are rendered in a responsive grid (3 columns on desktop, 1 column on mobile).
  - Clicking the "Select" button marks the card as selected, changes its text to "Selected", and updates the button background to a custom blue (`#0037C1` with a lighter hover variant).

- **Selection Summary:**  
  
  When a skip package is selected, a summary bar appears at the bottom of the screen. This bar shows:

  - Selected package details (size and hire period)
  - "Back" and "Continue" buttons for further navigation.

- **Responsive Design:**  
  
  Tailwind CSS is used throughout the project to implement responsive layouts, using utility classes and custom color values.

## Technologies Used

- **React** – For building the user interface.
- **Vite** – Fast build tool for development and optimized production builds.
- **Tailwind CSS** – Utility-first CSS framework used for styling.
- **lucide-react** – Icon library for scalable vector icons.
- **react-router-dom** – For routing between pages (if needed).
- **TypeScript** – (Optional) Provides type checking with custom types defined in the project.

## Setup and Installation

1. **Clone the repository:**

```bash
git clone https://github.com/jpcarvalhodev/REMWaste-react.git
cd REMWaste-react
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm run dev
```

## Implementation Details

- **Wizard Navigation:**

  **Desktop Layout:**
  
  The navigation is rendered as a horizontal list with each step showing an icon and label. Custom separators are inserted between steps. The component uses Tailwind classes such as:

  - p-8 mx-auto w-full for the nav container.
  - flex items-center justify-center list-none for the list.
  - Conditional classes determine icon colors based on the step index.

  **Mobile Layout:**
  
  - The navigation is restructured into a grid of 2 columns per row, with horizontal separators between pairs.
  - The steps are grouped into pairs using JavaScript, and each item includes a globalIndex property to apply conditional styling (steps 4–6 display white icons).

## Skip Package Cards

Card Details:

  - **Title:** – "X Yards Skip Package"
  - **Pricing:** – The price per week is calculated if available; if not, "Price on request" is shown.
  - **Details:** – Size (yards), hire period (days), road access, and heavy waste indication.
  - **Action Button:** – Clicking the button triggers an onSelect callback. If the card is selected, the button text changes to "Selected" and its background becomes #0037C1 (with a lighter hover color).

- **Grid Layout:**

  The cards are rendered in a responsive grid using Tailwind classes:

  - grid grid-cols-1 md:grid-cols-3 gap-6 px-4

## Selection Summary

  When a skip package is selected, a summary bar appears at the bottom of the screen (fixed at the bottom). This bar displays:

  - The selected package details (e.g., "4 yards - 14 days hire")
  - "Back" and "Continue" buttons for navigation.

## Styling with Tailwind CSS

  - All styling is implemented using Tailwind CSS utility classes.
  - Responsive classes (sm:, md:, etc.) adjust the layout for different screen sizes.
  - Custom colors are applied using arbitrary values (e.g., bg-[#0037C1]).

## Deployment

  To build the project for production, run:

```bash
npm run build
```

## Contributing

  - Contributions are welcome! Please open an issue or submit a pull request for improvements, bug fixes, or new features.

## License

  - This project is licensed under the MIT License.