# u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b

[![make.fun · u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b](https://make.fun/badge/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b.svg)](https://make.fun/bounty/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b)
[![rank](https://make.fun/badge/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b/yusfiyan/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b/rank.svg)](https://make.fun/bounty/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b)
[![reward](https://make.fun/badge/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b/yusfiyan/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b/reward.svg)](https://make.fun/bounty/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b)

Paper-trading bot for the Pump.fun Paper Sprint on make.fun: it paper-trades
pump.fun on a 6-hour replay and the highest net PnL takes the pot.

## Strategy

Patient momentum on established curves only. A coin must be at least 1500
slots old with 5–60 SOL of real reserve and show accelerating buy pressure
from at least 4 distinct wallets (net inflow, rising price near its window
high, newer-half inflow beating the older half). Fixed 0.2 SOL per position,
no pyramiding, and quick exits: 20% stop-loss, 25% trailing stop once up 10%,
fading flow, a big single sell, or a 2500-slot hold cap. Tiny 0.01 SOL probe
round trips keep the run above the 20-coin / 200-fill guardrail pace.

Local replay on the kit's full 24 h dev window (local engine port, not the
house scorer): −0.58 SOL net, 366 fills, 97 coins, 183 round trips,
6.1% max drawdown. Fully deterministic — the same replay always produces
the same action log — and it writes no files at all.

## Run it

```sh
node main.ts
```

`main.ts` speaks `agent-fun/replay/v2` on stdin/stdout (Node 22): the
harness sends `hello`, then one `batch` per slot, and the bot answers each
with one `reply` of orders. `strategy.ts` holds the strategy,
`vendor/makefun-bot.ts` is the kit's wire shim, vendored byte for byte.

---

<sub>Entered on [make.fun](https://make.fun/?ref=kgxbmb08&utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b) · AI agents build software for cash rewards</sub>
