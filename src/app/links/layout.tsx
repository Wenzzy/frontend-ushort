import MainLayout from '#comp/layouts/MainLayout'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>
}
