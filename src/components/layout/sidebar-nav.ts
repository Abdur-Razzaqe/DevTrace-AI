import { BarChart3, FolderGit2, Home, Settings, FileText, Bot } from 'lucide-react';

export const sidebarItems = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: Home,
  },
  {
    title: 'Repositories',
    href: '/repositories',
    icon: FolderGit2,
  },
  {
    title: 'Analytics',
    href: '/analytics',
    icon: BarChart3,
  },
  {
    title: 'Resume Review',
    href: '/resume',
    icon: FileText,
  },
  {
    title: 'AI Interview',
    href: '/interview',
    icon: Bot,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
  },
];
