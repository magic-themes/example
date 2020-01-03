export const state = {
  logotext: '@magic-themes/example',
  menu: [
    { to: '/#installation', text: 'installation' },
    {
      to: '/#usage',
      text: 'usage',
      items: [
        { to: '-require', text: 'require' },
        { to: '-customize', text: 'customize' },
      ],
    },
  ],
}
