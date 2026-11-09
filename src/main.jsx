import { createRoot } from 'react-dom/client';
import './styles/main.css';
import './styles/part3.css';
import App from './App.jsx';

// StrictMode is intentionally not used: the simulation engines attach
// listeners and animation loops once on mount and are not double-invoke safe.
createRoot(document.getElementById('root')).render(<App />);
