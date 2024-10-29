import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";

async function dev_(): Promise<void> {
    await dev(import.meta.url, "./main.ts", config);
}

dev_();
