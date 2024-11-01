import { useSignal } from "@preact/signals";
import type { JSX } from "preact";
import TabletInfoModal from "../components/TabletInfoModal.tsx";

export default function TabletHeader(): JSX.Element {
    const isModalOpen = useSignal(false);

    return (
        <>
            <div class="flex justify-between items-center mb-6">
                <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
                    osu! Tablet Area Calculator
                </h1>
                <div class="flex gap-4">
                    <button
                        onClick={() => isModalOpen.value = true}
                        class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                        <i class="fas fa-circle-info text-2xl"></i>
                    </button>
                    <a
                        href="https://github.com/kawarbon/osu-tableno"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                        <i class="fab fa-github text-2xl"></i>
                    </a>
                </div>
            </div>

            <TabletInfoModal
                isOpen={isModalOpen.value}
                onClose={() => isModalOpen.value = false}
            />
        </>
    );
}
