export interface ITask {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string; // ISO string
  updatedAt: string; // ISO string
  priority: 'low' | 'medium' | 'high'; // strict priority options
  tags: string[];
  dueDate: string; 
  isCompleted : boolean ;
}