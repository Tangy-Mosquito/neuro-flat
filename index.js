
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>NEURO AI</title>
        <meta name="description" content="Token-gated AI chat powered by Solana." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-4">
        <div className="max-w-2xl text-center">
          <h1 className="text-5xl font-bold mb-4">NEURO AI</h1>
          <p className="text-lg text-gray-400 mb-8">
            A token-gated decentralized AI experience built for speed, privacy, and ownership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Launch App
            </a>
            <a
              href="#"
              className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
            >
              Join Discord
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
