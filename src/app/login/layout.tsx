export const metadata = {
  title: 'Login - HRM',
  description: 'HRM',
}

export default function loginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
