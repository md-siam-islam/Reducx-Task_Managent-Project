export interface ITask {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string; // ISO string
  updatedAt: string; // ISO string
  priority: 'low' | 'medium' | 'high'; 
  tags: string[];
  dueDate: string; 
  isCompleted : boolean ;
}