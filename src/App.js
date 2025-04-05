import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Scene } from './components/Scene';
import { EducationalContent } from './components/EducationalContent';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: #f0f0f0;
`;

const Canvas3DContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const ErrorDisplay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 0, 0, 0.1);
  padding: 20px;
  border-radius: 8px;
  color: red;
  text-align: center;
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Model loading error:', error);
    console.error('Error info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorDisplay>
          <h2>Something went wrong loading the 3D model</h2>
          <p>{this.state.error?.message}</p>
          <button onClick={() => window.location.reload()}>
            Try again
          </button>
        </ErrorDisplay>
      );
    }

    return this.props.children;
  }
}

function App() {
  const [showDrone, setShowDrone] = React.useState(true);
  
  return (
    <AppContainer>
      <ErrorBoundary>
        <Canvas3DContainer>
          <Scene showDrone={showDrone} setShowDrone={setShowDrone} />
        </Canvas3DContainer>
        <EducationalContent showDrone={showDrone} />
      </ErrorBoundary>
    </AppContainer>
  );
}

export default App;
