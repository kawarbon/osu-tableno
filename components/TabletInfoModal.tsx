import type { JSX } from "preact";

interface TabletInfoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function TabletInfoModal(
    { isOpen, onClose }: TabletInfoModalProps,
): JSX.Element {
    if (!isOpen) return <></>;

    return (
        <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full mx-4 relative">
                <button
                    onClick={onClose}
                    class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                    <i class="fas fa-times text-xl"></i>
                </button>
                <h2 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    osu! Tablet Area Calculator in a Nutshell
                </h2>
                <div class="text-gray-700 dark:text-gray-300 space-y-4">
                    <p class="font-semibold">Why 4:3?</p>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>
                            While osu! is 16:9, actual gameplay area is 4:3
                        </li>
                        <li>
                            16:9 area creates uneven movement requirements -
                            more horizontal than vertical movement needed
                        </li>
                        <li>
                            4:3 ratio guarantees consistent physical movement
                            for both axes
                        </li>
                    </ul>

                    <p class="font-semibold mt-4">Mathematics</p>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>
                            On 1920x1080 (16:9) screen, gameplay area is
                            1440x1080 (4:3)
                        </li>
                        <li>
                            Height ratio between gameplay and screen is
                            1080/1440 ~= 75%
                        </li>
                        <li>
                            Area needs to match given 75% ratio for
                            close-to-exact 1:1 movement mapping
                        </li>
                    </ul>

                    <p class="font-semibold mt-4">Practicality</p>
                    <p>
                        <code>(height / 3) * 4</code>{" "}
                        can be used to calculate your optimal width
                    </p>
                </div>
            </div>
        </div>
    );
}
