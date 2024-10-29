import { Head } from "$fresh/runtime.ts";
import type { JSX } from "preact/jsx-runtime";
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
          <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
              osu! Tablet Area Calculator
            </h1>
            <a
              href="https://github.com/kawarbon/osu-tableno"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <i class="fab fa-github text-2xl"></i>
            </a>
          </div>
          <TabletCalculator />
        </div>
      </div>
    </>
  );
}
