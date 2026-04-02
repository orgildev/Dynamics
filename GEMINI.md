# Helicopter Dynamics Project Context

This project is a React-based web application designed to visualize and explain the flight dynamics of helicopters and drones using 3D models.

## Project Overview

- **Name:** `helicopter-dynamics`
- **Purpose:** An educational tool for understanding the mechanics of flight for both single-rotor (helicopter) and multi-rotor (drone) aircraft.
- **Core Technologies:**
  - **React (v18.3.1):** The UI framework.
  - **Three.js (v0.175.0):** The underlying 3D engine.
  - **@react-three/fiber:** React reconciler for Three.js.
  - **@react-three/drei:** A collection of useful helpers for `@react-three/fiber`.
  - **styled-components (v6.1.17):** CSS-in-JS for UI styling.
- **Architecture:**
  - `src/App.js`: Main entry point, managing the global state (switching between drone and helicopter) and providing an `ErrorBoundary`.
  - `src/components/Scene.js`: Sets up the 3D environment, including the `Canvas`, lighting, `OrbitControls`, and environment maps.
  - `src/components/HelicopterModel.js` & `src/components/DroneModel.js`: Specialized components that load `.glb` assets from the `/public` folder using `useGLTF`.
  - `src/components/EducationalContent.js`: An overlay providing technical explanations of flight mechanics relevant to the currently displayed model.

## Building and Running

The project was bootstrapped with Create React App.

- **Start Development Server:**
  ```bash
  npm start
  ```
- **Build for Production:**
  ```bash
  npm run build
  ```
- **Run Tests:**
  ```bash
  npm test
  ```
- **Eject (Advanced):**
  ```bash
  npm run eject
  ```

## Development Conventions

- **3D Assets:** Models should be placed in the `public/` directory as `.glb` files. Use `useGLTF.preload` in the component file to ensure smooth loading.
- **Styling:** Prefer `styled-components` for UI elements and inline styles for the `Canvas` container.
- **State Management:** Simple state (like switching models) is managed via React hooks (`useState`) in `App.js` and passed down as props.
- **Error Handling:** The 3D scene is wrapped in an `ErrorBoundary` in `App.js` to handle loading failures or rendering issues gracefully.
- **Shadows & Lighting:** The scene uses `physicallyCorrectLights`. Models should have `castShadow` and `receiveShadow` enabled during traversal in their respective components.

## Key Files

- `src/App.js`: Global layout and state.
- `src/components/Scene.js`: 3D viewport configuration.
- `src/components/EducationalContent.js`: Content overlay.
- `public/*.glb`: 3D model assets.
