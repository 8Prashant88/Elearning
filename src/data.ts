import { Course, Achievement } from './types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Web Development Fundamentals',
    description: 'Learn the basics of HTML, CSS, and JavaScript',
    instructor: 'Sarah Johnson',
    duration: '8 weeks',
    level: 'Beginner',
    progress: 65,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    modules: 12,
    completedModules: 8,
    xp: 1200
  },
  {
    id: '2',
    title: 'Data Science Essentials',
    description: 'Master the fundamentals of data analysis and visualization',
    instructor: 'Michael Chen',
    duration: '10 weeks',
    level: 'Intermediate',
    progress: 30,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    modules: 15,
    completedModules: 4,
    xp: 800
  },
  {
    id: '3',
    title: 'UX/UI Design Masterclass',
    description: 'Create beautiful and functional user interfaces',
    instructor: 'Emma Davis',
    duration: '6 weeks',
    level: 'Advanced',
    progress: 90,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
    modules: 8,
    completedModules: 7,
    xp: 2000
  }
];

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Fast Learner',
    description: 'Complete 5 lessons in one day',
    icon: 'Zap',
    unlocked: true,
    xp: 100
  },
  {
    id: '2',
    title: 'Course Master',
    description: 'Complete your first course',
    icon: 'Trophy',
    unlocked: false,
    xp: 500
  },
  {
    id: '3',
    title: 'Study Streak',
    description: 'Learn for 7 days in a row',
    icon: 'Flame',
    unlocked: true,
    xp: 300
  }
];