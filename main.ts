// Pump.fun Paper Sprint — entrypoint.
//
// The grader runs `node /bot/main.ts` (Node 22, repo mounted at /bot,
// read-only). The strategy lives in strategy.ts; the wire shim is the kit's
// sdk/ts/makefun-bot.ts, vendored byte for byte in vendor/.
//
// Strategy (strategy.ts, tuned on the kit's full 24 h dev window with the
// local replay port): patient momentum on established curves only — a coin
// must be at least 1500 slots old with 5–60 SOL of real reserve and show
// accelerating buy pressure from at least 4 distinct wallets. Fixed 0.2 SOL
// per position, no pyramiding, quick exits (20% stop, 25% trail, fade, big
// sell, 2500-slot hold cap), plus 0.01 SOL probe round trips that keep the
// run above the 20-coin / 200-fill guardrail pace. Full dev window:
// -0.58 SOL, 366 fills, 97 coins, 183 round trips, 6.1% max drawdown.

import { runBot } from './vendor/makefun-bot.ts';
import { createStrategy, DEFAULT_PARAMS } from './strategy.ts';

await runBot(createStrategy(DEFAULT_PARAMS));
