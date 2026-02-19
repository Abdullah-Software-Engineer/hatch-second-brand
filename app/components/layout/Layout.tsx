import React from 'react'
import Header from './Header'
import FooterContact from './FooterContact'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <FooterContact />
    </>
  )
}
