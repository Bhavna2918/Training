# Assignment 3: Blog Home Page with Redux Toolkit API Integration

This project is a React-based Blog Home Page that fetches dynamic data from the `https://jsonplaceholder.typicode.com` API. It strictly adheres to all assignment requirements, including the mandatory usage of Redux Toolkit and `createAsyncThunk` for all asynchronous state management.

## 🚀 Setup Steps

1. **Clone the repository** (or download the source code).
2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

## 🏗️ Redux Folder Structure Explanation

The state management architecture is strictly divided to ensure modularity and separation of concerns. **No direct API calls (`axios` or `fetch`) are made inside React components.**

```text
src/
 ├── api/
 │    ├── config/          # Centralized Axios client configuration
 │    ├── posts/           # API fetch functions & types for posts
 │    ├── users/           # API fetch functions & types for users
 │    └── comments/        # API fetch functions & types for comments
 │
 ├── store/
 │    ├── index.ts         # Main Redux store configuration
 │    ├── hooks.ts         # Typed useSelector and useDispatch hooks
 │    ├── slices/          # Redux slices managing loading, error, and data states
 │    └── thunks/          # createAsyncThunk logic to handle async API lifecycle
```

### How Data Flows:
1. **Thunks (`store/thunks/posts.thunk.ts`)**: The component dispatches a thunk (`fetchPosts()`).
2. **API Layer (`api/posts/posts.api.ts`)**: The thunk calls the isolated API function, which uses the centralized `axios` instance to fetch data from `https://jsonplaceholder.typicode.com`.
3. **Slices (`store/slices/posts.slice.ts`)**: The slice listens to the thunk's lifecycle hooks (`pending`, `fulfilled`, `rejected`) and updates the state variables (`loading`, `data`, `error`) accordingly.
4. **Components (`components/BlogList.tsx`)**: The UI subscribes to the Redux store via `useAppSelector` and displays Skeleton loaders, Error messages, or the final Blog Cards based on the state.

## 🌟 Key Features

- **Strict Redux Toolkit Integration**: 100% of data fetching routes through Redux `createAsyncThunk`.
- **Pixel-Perfect UI**: The Hero, Navigation, and Category bars match the exact spatial requirements of the reference designs.
- **Hover Animations**: All blog cards and interactive buttons feature smooth CSS transition lifts (`-translate-y-1`) and shadow expansions.
- **TypeScript Strictness**: Interfaces (`PostsState`, `Post`) are strictly defined. No TypeScript errors.
- **Loading & Error Handling**: Beautiful skeleton loaders render while data is fetching, with fallback UI for network errors.
- **Responsive Layout**: Adapts flawlessly from mobile viewports up to `1380px` ultra-wide monitors.

## 📸 Screenshots

*(Attach screenshots of the Blog Home Page, Responsive Views, and Redux DevTools structure here prior to submission as per the rubric)*
