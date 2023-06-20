import Image from 'next/image'
import me from '../public/me.png'

export default function Home() {
  // /test
  return (
    <div class='flex flex-wrap justify-center'>
    <ul class="flex flex-wrap justify-center border-b-2 w-11/12 m-2">
      <li>
        <Image
          src={me}
          alt="picture of paul"
          width={100}
          height={100}
        />
      </li>
      <div class='ml-3 flex items-center'>
        <li class="mr-6 text-2xl font-bold">
          <a class="text-gray-400 hover:text-white" href="tel:657-540-6770">657-540-6770</a>
        </li>
        <li class="mr-6 text-2xl font-bold">
          <a class="text-gray-400 hover:text-white" href="mailto:psk65lava@gmail.com">psk65lava@gmail.com</a>
        </li>
        <li class="mr-6 text-2xl font-bold">
          <a class="text-gray-400 hover:text-white" href="/public/mostUTD.pdf" download>Resume</a>
        </li>
      </div>
    </ul>
    <main className="flex flex-wrap min-h-screens justify-center p-5">
      <div class="overflow-hidden m-1 max-w-md relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
        <div class="pointer-events-none">
          <div class="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
          <div class="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50"></div>
          <div class="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"></div>
        </div>
        <a href="https://realestatelifeline.app/">
          <article class="relative w-full h-full p-4 md:p-8">
            <div class="flex items-center justify-between gap-2">
            </div>
            <h2 id="featured-post" class="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">Real Estate Lifeline</h2>
            <p class="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">Led the successful integration of Google/Microsoft calendar and email functionalities through implementation of RESTful APIs, facilitating seamless communication and scheduling between the two platforms. Implemented encryption and decryption functionality using AWS Key Management Service (KMS), ensuring secure storage and transfer of sensitive data. Stored sensitive, encrypted data in a MySQL database, leveraging best practices for data storage and protection. Collaborated with cross-functional teams to design and develop features and functionalities for the platform.</p>
          </article>
        </a>
      </div>
      <div class="overflow-hidden m-1 max-w-md relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
        <div class="pointer-events-none">
          <div class="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
          <div class="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50"></div>
          <div class="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"></div>
        </div>
          <a href="https://poetic-khapse-3a8b7b.netlify.app">
            <article class="relative w-full h-full p-4 md:p-8">
              <div class="flex items-center justify-between gap-2">
              </div>
              <h2 id="featured-post" class="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">Classic Industries Tool</h2>
              <p class="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">This web-based application has been purposefully developed to minimize call duration and eliminate the necessity for memorization, thereby enabling users to allocate more mental capacity to assisting customers, resulting in heightened efficiency and productivity.</p>
            </article>
          </a>
        </div>
      <div class="overflow-hidden m-1 max-w-md relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
        <div class="pointer-events-none">
          <div class="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
          <div class="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50"></div>
          <div class="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"></div>
        </div>
          <a href="https://neon-lolly-001ed8.netlify.app/">
            <article class="relative w-full h-full p-4 md:p-8">
              <div class="flex items-center justify-between gap-2">
              </div>
              <h2 id="featured-post" class="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">OER Tool</h2>
              <p class="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">This web-based application was designed with the objective of streamlining the invoicing process for clients by minimizing the reliance on manual copy and paste operations. By implementing a click-based text copying mechanism, users can effortlessly extract information for invoices without the need to manually select and copy text. Previously, the invoice creation procedure involved printing orders and manually inputting part numbers. To address this inefficiency, I was actively developing a module that would automate the extraction of part numbers from scanned orders, allowing for seamless click-based copying.</p>
            </article>
          </a>
        </div>
        <div class="overflow-hidden m-1 max-w-md relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
        <div class="pointer-events-none">
          <div class="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
          <div class="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50"></div>
          <div class="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"></div>
        </div>
          <a href="https://cvupgrade.com/">
            <article class="relative w-full h-full p-4 md:p-8">
              <div class="flex items-center justify-between gap-2">
              </div>
              <h2 id="featured-post" class="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">cvupgrade.com</h2>
              <p class="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">CVUpgrade was born in 2018 out of frustration as a Recruiter from looking at bad CVs.  Some rivaled a short novel in terms of length whilst some had less writing on them than a tin of baked beans!</p>
            </article>
          </a>
        </div>
        <div class="overflow-hidden m-1 max-w-md relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
        <div class="pointer-events-none">
          <div class="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
          <div class="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50"></div>
          <div class="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"></div>
        </div>
          <a href="https://arrowheadtreeservices.com/">
            <article class="relative w-full h-full p-4 md:p-8">
              <div class="flex items-center justify-between gap-2">
              </div>
              <h2 id="featured-post" class="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">arrowheadtree
              services.com</h2>
              <p class="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">We will go out of our way to take care of you and your project as safely and cost-effectively as possible!</p>
            </article>
          </a>
        </div>
        <div class="overflow-hidden m-1 max-w-md relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
        <div class="pointer-events-none">
          <div class="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
          <div class="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50"></div>
          <div class="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"></div>
        </div>
          <a href="https://stocksmsalert.com/">
            <article class="relative w-full h-full p-4 md:p-8">
              <div class="flex items-center justify-between gap-2">
              </div>
              <h2 id="featured-post" class="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">stocksmsalert.com</h2>
              <p class="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">Receive instant SMS alerts when our team of analysts identify stocks in optimal positions for profit. We are an essential tool for all retail investors from experts to beginners. Sign up to receive your Stock SMS Alerts now.</p>
            </article>
          </a>
        </div>
        <div class="overflow-hidden m-1 max-w-md relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
        <div class="pointer-events-none">
          <div class="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
          <div class="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50"></div>
          <div class="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"></div>
        </div>
          <a href="https://chevitasjuicebagels.com/">
            <article class="relative w-full h-full p-4 md:p-8">
              <div class="flex items-center justify-between gap-2">
              </div>
              <h2 id="featured-post" class="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">fiduciarybenefits
              group.com</h2>
              <p class="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">Retirement plans can be complex. You need a trusted advocate to guide you.</p>
            </article>
          </a>
        </div>
    </main>
    </div>
    
  )
}
