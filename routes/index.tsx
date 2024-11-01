import { Head } from "$fresh/runtime.ts";
import type { JSX } from "preact/jsx-runtime";
import TabletHeader from "../islands/TabletHeader.tsx";
import TabletCalculator from "../islands/TabletCalculator.tsx";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>osu!tableno</title>
        <meta
          name="description"
          content="Calculate optimal tablet area for osu!"
        />
      </Head>
      <div class="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
        <div class="bg-white dark:bg-gray-800 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.3)] rounded-lg p-6 w-[480px]">
          <TabletHeader />
          <TabletCalculator />
        </div>
      </div>
    </>
  );
}
