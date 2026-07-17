import { LayoutDashboard, FolderGit2, BarChart3, FileText, Bot, Settings } from 'lucide-react';

export const sidebarNavItems = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
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
    title: 'AI Resume',
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
