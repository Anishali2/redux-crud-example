# Redux CRUD Learning App

A comprehensive **Next.js** application demonstrating **Redux Toolkit** implementation with full **CRUD operations** (Create, Read, Update, Delete). This project serves as a practical learning resource for understanding modern Redux patterns in React applications.

## 🚀 Features

- **Create**: Add new items with title and description
- **Read**: View all items in a responsive grid layout
- **Update**: Edit existing items with inline editing
- **Delete**: Remove items with confirmation
- **Redux Toolkit**: Modern Redux implementation with slices
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Beautiful, responsive styling
- **Real-time Updates**: Immediate UI updates on state changes

## 🛠 Tech Stack

- **Framework**: Next.js 15.5.2 (App Router)
- **State Management**: Redux Toolkit 2.8.2 + React Redux 9.2.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Build Tool**: Next.js built-in bundler

## 📁 Project Structure

```
redux-crud-app/
├── app/
│   ├── components/           # Reusable React components
│   │   ├── ItemCard.tsx     # Individual item display with edit/delete
│   │   ├── ItemForm.tsx     # Form for create/update operations
│   │   └── ItemList.tsx     # Grid layout for all items
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with Redux provider
│   └── page.tsx             # Main application page
├── store/                   # Redux store configuration
│   ├── slices/
│   │   └── itemsSlice.ts    # Items slice with CRUD actions
│   ├── hooks.ts             # Typed Redux hooks
│   ├── provider.tsx         # Redux store provider component
│   └── store.ts             # Store configuration
└── package.json             # Project dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd redux-crud-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📸 Application Preview

![Redux CRUD App Demo](https://github.com/user-attachments/assets/6c25f3c1-7848-4a2b-996c-160e78863fa3)

## 📖 How It Works

### Redux Store Architecture

The application uses **Redux Toolkit** for state management with the following structure:

#### Items Slice (`store/slices/itemsSlice.ts`)
```typescript
interface Item {
  id: string          // Unique identifier (timestamp-based)
  title: string       // Item title
  description: string // Item description
  createdAt: string   // ISO timestamp
}
```

**Available Actions:**
- `addItem(payload)` - Adds a new item to the store
- `updateItem(payload)` - Updates an existing item by ID
- `deleteItem(id)` - Removes an item by ID

#### Store Configuration (`store/store.ts`)
- Configured with Redux Toolkit's `configureStore`
- Type-safe with TypeScript interfaces
- Exports typed dispatch and state types

### Component Architecture

#### 1. **ItemForm Component** (`app/components/ItemForm.tsx`)
- **Purpose**: Handles both create and update operations
- **Props**: 
  - `itemToEdit?`: Optional item data for update mode
  - `onComplete?`: Callback fired after successful submission
- **Features**:
  - Form validation (required fields)
  - Dual mode: create new items or edit existing ones
  - Auto-resets form after submission

#### 2. **ItemList Component** (`app/components/ItemList.tsx`)
- **Purpose**: Displays all items and handles read operations
- **Features**:
  - Responsive grid layout (1-3 columns based on screen size)
  - Empty state message
  - Integrates with ItemCard for individual item display

#### 3. **ItemCard Component** (`app/components/ItemCard.tsx`)
- **Purpose**: Individual item display with actions
- **Features**:
  - Toggle between view and edit modes
  - Formatted date display
  - Edit and delete action buttons
  - Inline editing using ItemForm component

### Key Features Explained

#### 🔄 **State Management Flow**

1. **Create**: User fills form → `addItem` action → Item added to store → UI updates
2. **Read**: Component subscribes to store → `useAppSelector` gets current items → Renders list
3. **Update**: User clicks edit → Form pre-fills → `updateItem` action → Store updates → UI refreshes
4. **Delete**: User clicks delete → `deleteItem` action → Item removed → UI updates

#### 🎨 **Styling System**

- **Tailwind CSS** for utility-first styling
- **Responsive Design**: Grid layouts adapt to screen sizes
- **Interactive Elements**: Hover effects and transitions
- **Color Scheme**: Blue for primary actions, green for edit, red for delete

#### 🔧 **TypeScript Integration**

- **Typed Redux Hooks**: `useAppDispatch`, `useAppSelector`
- **Interface Definitions**: Strong typing for all data structures
- **Type Safety**: Compile-time error checking

## 🎯 Learning Objectives

This project teaches:

1. **Redux Toolkit Basics**
   - Creating slices with `createSlice`
   - Writing reducers with Immer integration
   - Dispatching actions from components

2. **React-Redux Integration**
   - Setting up providers and store
   - Using typed hooks for type safety
   - Connecting components to Redux state

3. **Modern React Patterns**
   - Functional components with hooks
   - Controlled form inputs
   - Conditional rendering
   - Component composition

4. **Next.js App Router**
   - Server and client components
   - Layout patterns
   - TypeScript configuration

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🏗 Extending the Application

### Adding New Fields
1. Update the `Item` interface in `itemsSlice.ts`
2. Modify the form in `ItemForm.tsx`
3. Update the display in `ItemCard.tsx`

### Adding Persistence
- Integrate with a database (PostgreSQL, MongoDB)
- Add API routes in `app/api/`
- Use Redux Toolkit Query for data fetching

### Adding Authentication
- Implement user authentication
- Add user-specific item filtering
- Protect routes with middleware

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Learn More

- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Redux Documentation](https://react-redux.js.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Perfect for**: Redux beginners, Next.js learners, TypeScript practitioners, and anyone wanting to understand modern React state management patterns.
