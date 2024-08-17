import axios from 'axios';

export const fetchProjects = async (): Promise<string[]> => {
    try {
      // Simulate a fetch call with static data
      const data = [
        "Project Alpha",
        "Project Beta",
        "Project Gamma"
      ];
      if (Array.isArray(data)) {
        return data;
      } else {
        console.error('Data fetched is not an array:', data);
        return [];
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
  };
  

export const createProject = async (name: string): Promise<string> => {
  const response = await axios.post<string>('/api/projects', { name });
  return response.data;
};
