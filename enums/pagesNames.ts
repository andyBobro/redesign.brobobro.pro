export enum PagesNames {
  index = 'index',
  desktop = 'desktop',
  terminal = 'terminal',
  cv = 'cv',
  about = 'about',
  settings = 'settings',
  contact = 'contact',
  other = 'other'
}

export enum PagesRoutes {
  index = `/`,
  desktop = `/${PagesNames.desktop}`,
  terminal = `/${PagesNames.terminal}`,
  cv = `/${PagesNames.cv}`,
  about = `/${PagesNames.about}`,
  settings = `/${PagesNames.settings}`,
  contact = `/${PagesNames.contact}`,
  other = `/404`,
}

export enum WindowPages {
  terminal = PagesNames.terminal,
  // cv = PagesNames.cv,
  about = PagesNames.about,
  // settings = PagesNames.settings,
  // contact = PagesNames.contact,
}
