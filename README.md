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

- app/layout.js -> সব পেজের common layout (navbar + footer + font)
- app/page.js -> হোম পেজ
- app/globals.css -> সব CSS
- app/<route>/ -> /notices, /apply, /login ইত্যাদি (এখন placeholder)
- components/ -> Navbar, Footer, Hero, Leaders, Reveal
- lib/data.js -> notice, dates, gallery, leaders এর ডাটা

## Supabase CMS ও অ্যাডমিন

1. Supabase project তৈরি করে SQL Editor-এ `supabase/schema.sql` চালান।
2. Supabase Auth-এ admin email/password user তৈরি করুন। ওই user-এর trusted `app_metadata`-তে `role: admin` দিন; `user_metadata` ব্যবহার করবেন না। SQL Editor থেকে উদাহরণ:
   ```sql
   update auth.users
   set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb) || '{"role":"admin"}'::jsonb
   where email = 'admin@example.com';
   ```
   Role পরিবর্তনের পর admin-কে sign out করে আবার sign in করতে হবে।
3. `.env.example` কপি করে `.env.local` বানান, তারপর Supabase Project URL ও publishable/anon key বসান। `service_role` key কখনো `NEXT_PUBLIC_` env বা browser code-এ দেবেন না।
4. `npm run dev` চালিয়ে `/admin` খুলুন। Admin save করলে `site_content/main` update হবে; realtime publication-এর মাধ্যমে সব খোলা website tab-এ পরিবর্তন দেখা যাবে।

Supabase ছাড়া public site `lib/data.js`-এর default content দেখায়, কিন্তু shared save/realtime কাজ করবে না। Portal form-গুলো বর্তমান প্রজেক্টে demo-only; আবেদন, ফলাফল, payment বা message record এখনও কোনো backend-এ জমা হয় না।
