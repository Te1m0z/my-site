import localFont from 'next/font/local'

export const oxanium = localFont({
  src: [
    {
      path: '../../assets/fonts/Oxanium/Oxanium-Light.woff2',
      weight: '300',
    },
    {
      path: '../../assets/fonts/Oxanium/Oxanium-Regular.woff2',
      weight: '400',
    },
    {
      path: '../../assets/fonts/Oxanium/Oxanium-Medium.woff2',
      weight: '500',
    },
    {
      path: '../../assets/fonts/Oxanium/Oxanium-SemiBold.woff2',
      weight: '600',
    },
    {
      path: '../../assets/fonts/Oxanium/Oxanium-Bold.woff2',
      weight: '700',
    },
  ],
  variable: '--font-oxanium',
})

export const poppins = localFont({
  src: [
    {
      path: '../../assets/fonts/Poppins/Poppins-Light.woff2',
      weight: '300',
    },
    {
      path: '../../assets/fonts/Poppins/Poppins-Regular.woff2',
      weight: '400',
    },
    {
      path: '../../assets/fonts/Poppins/Poppins-Medium.woff2',
      weight: '500',
    },
    {
      path: '../../assets/fonts/Poppins/Poppins-SemiBold.woff2',
      weight: '600',
    },
    {
      path: '../../assets/fonts/Poppins/Poppins-Bold.woff2',
      weight: '700',
    },
  ],
  variable: '--font-poppins',
})
