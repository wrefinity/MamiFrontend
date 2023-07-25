import { Providers } from '@/redux/Providers'
import { Toaster, toast } from 'sonner';

export const metadata = {
  title: 'MamiHub - Dashboard',
  description: 'The Home of all products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
        <Toaster richColors />
        {children}
    </Providers>
  )
}
