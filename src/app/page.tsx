import { Navbar } from '@/components/layout/navbar';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex h-[80vh] items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to DevTrace AI</h1>
      </main>
    </>
  );
}
