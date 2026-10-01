# TBF — Next.js Frontend

## চালানোর নিয়ম
1. Node.js 18.17+ (বা 20 LTS) ইনস্টল থাকতে হবে: https://nodejs.org
2. টার্মিনালে এই ফোল্ডারে ঢুকুন:
   cd tbf-nextjs
3. প্যাকেজ ইনস্টল:
   npm install
4. ডেভ সার্ভার চালু:
   npm run dev
5. ব্রাউজারে খুলুন: http://localhost:3000

## প্রোডাকশন
   npm run build
   npm start

## ফোল্ডার স্ট্রাকচার
- app/layout.js    -> সব পেজের common layout (navbar + footer + font)
- app/page.js      -> হোম পেজ
- app/globals.css  -> সব CSS
- app/<route>/     -> /notices, /apply, /login ইত্যাদি (এখন placeholder)
- components/      -> Navbar, Footer, Hero, Leaders, Reveal
- lib/data.js      -> notice, dates, gallery, leaders এর ডাটা
