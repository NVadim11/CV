import localFont from 'next/font/local';

export const titilliumWeb = localFont({
  src: [
    {
      path: '../fonts/TitilliumWeb-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/TitilliumWeb-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/TitilliumWeb-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-titillium-web',
  display: 'swap',
}); 