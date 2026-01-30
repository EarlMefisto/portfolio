import type { tabStatusType } from "../../layout/sections/myProjects/tabMenu/TabMenu";

export const TABS_iTEMS: Array<{ status: tabStatusType; title: string }> = [
  {
    title: 'All',
    status: 'all',
  },
  {
    title: 'Landing Page',
    status: 'landing',
  },
  {
    title: 'App',
    status: 'app',
  },
  {
    title: 'Web',
    status: 'web',
  },
]