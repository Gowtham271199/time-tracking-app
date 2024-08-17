import { createRoot } from 'react-dom/client';
import './index.css'; // Ensure this import is correct and available
import ProjectManagementPage from './pages/ProjectManagementPage';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement); // Create a root
root.render(<ProjectManagementPage />); // Render the component
