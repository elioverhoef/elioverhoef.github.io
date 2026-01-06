---
title: "GLM Coding Plan: How I Get 3x Claude Code Usage for $30/Month"
date: 2026-01-06
permalink: /posts/2026/01/glm-coding-plan/
tags:
  - AI
  - coding
  - development
  - Claude Code
  - productivity
---

![GLM-4.7 powering Claude Code](https://miro.medium.com/v2/resize:fit:1400/format:webp/glm-coding-plan-hero.png)

## The Claude Code Rate Limit Problem

If you've used Claude Code seriously, you've hit the wall. That frustrating moment when you're deep into a coding session and suddenly everything stops. Your subscription runs out mid-feature. Mid-debug. Mid-everything important.

Claude Max 5x costs $100/month and gives you roughly 50-200 prompts every five hours. For anyone running background agents or tackling complex projects, that's maybe a few hours of real work before you're sitting there waiting for the reset.

> *"I had the $200 plan before. I downgraded. The unfortunate truth is the limits of Claude just don't work for how I code."* — Developer testing GLM vs Claude Opus

I found a solution that's been quietly transforming how developers approach AI-assisted coding: the GLM Coding Plan powered by GLM-4.7. After testing it extensively in my projects at LongevAI, here's everything you need to know.

## What is the GLM Coding Plan?

Z.ai created a subscription specifically for AI-powered coding tools. The GLM Coding Plan gives you access to GLM-4.7 through Claude Code, Cline, Roo Code, Kilo Code, OpenCode, and other popular coding agents.

GLM-4.7 isn't some unknown model. It just hit the top spot for open-source models on Code Arena's leaderboard with millions of users participating in blind tests. On SWE-bench Verified (the gold standard for evaluating real-world coding), it scores 73.8%. For comparison, that puts it right alongside Claude Sonnet 4.5 in practical coding tasks.

The pricing changes everything:

| Plan | Price | Usage (per 5 hours) | Compared to Claude |
|------|-------|---------------------|-------------------|
| Lite | $3/month | ~120 prompts | 3x Claude Pro ($20)
| **Pro** | **$30/quarter** | **~600 prompts** | **3x Claude Max 5x ($100)** |
| Max | $60/quarter | ~2,400 prompts | 3x Claude Max 20x ($200) |

That's not a typo. The Pro plan at $30/quarter (about $10/month) gives you roughly **3x the usage** of Claude Max 5x which costs $100/month.

## Why I Recommend the Pro Plan

For serious developers, the Pro plan hits the sweet spot. Here's the math:

Claude Max 5x at $100/month gives you approximately 50-200 prompts every five hours, with 140-280 hours of Sonnet 4 weekly. GLM Coding Plan Pro at ~$10/month gives you approximately 600 prompts every five hours. That's significantly more runway for complex projects.

But the real advantage isn't just quantity. GLM-4.7 generates over 55 tokens per second. When you're iterating on code, that speed difference is immediately noticeable. Claude's rate limits also mean you're constantly managing your usage. With GLM's quotas, you can actually focus on building.

The Pro plan also unlocks features the Lite plan doesn't have:

- Vision Understanding MCP (analyze screenshots, diagrams, error images directly)
- Web Search MCP (1,000 searches included for docs and references)
- Web Reader MCP (fetch full documentation pages)
- Zread MCP (search and read GitHub repositories)
- 40-60% faster response times compared to Lite

## Real-World Performance: GLM-4.7 vs Claude

I ran both models through the same project: building an AI UGC video generation platform with Superbase auth, Stripe payments, script generation, image generation, and video synthesis.

Claude Opus 4.5 on the $20 plan? Hit the usage limit after a single prompt cycle before even setting up Superbase integration.

GLM-4.7 on the coding plan? Built the entire working prototype, including debugging multiple API integrations, in under 90 minutes of actual coding time. The login worked. The script generator worked. The image generation worked. The video synthesis worked.

GLM-4.7 excels specifically in areas that matter for real coding:

| Benchmark | GLM-4.7 | What it means |
|-----------|---------|--------------|
| SWE-bench Verified | 73.8% | Fixes real GitHub issues correctly |
| SWE-bench Multilingual | 66.7% | Handles non-English codebases |
| Terminal Bench 2.0 | 41.0% | Sequences terminal commands correctly |
| τ²-Bench | 87.4% | Plans multi-step tool use accurately |
| LiveCodeBench V6 | 84.9% | Generates working code for new problems |

The Terminal Bench score deserves attention. GLM-4.6 scored 24.5%, which made it painful for agentic work. GLM-4.7 jumped to 41%. Commands execute in the right order. State gets maintained. Recovery from errors actually works.

## The "Preserved Thinking" Advantage

GLM-4.7 introduced something called Preserved Thinking that fundamentally improves agentic coding sessions. Here's the problem it solves:

Most models reason fresh every turn. They forget what they decided earlier. By turn five or six, your agent is contradicting itself, re-deriving conclusions, and drifting from the original plan.

Preserved Thinking means GLM-4.7 retains its reasoning blocks across turns. It reuses existing conclusions instead of starting from scratch. In practice, this means longer coding sessions stay coherent. Your agent remembers the architecture decisions from an hour ago.

Combined with Interleaved Thinking (the model reasons before every response and tool call), you get something that feels less like a chatty assistant and more like a focused coworker who actually tracks the project state.

## How to Set Up the GLM Coding Plan with Claude Code

The setup takes about 30 seconds:

### Step 1: Get Your API Key
1. Go to [Z.ai Open Platform](https://z.ai/subscribe?ic=W6HKMD2UL3)
2. Create an account and subscribe to the Pro plan
3. Generate an API key from the dashboard

### Step 2: Configure Claude Code

Edit your `~/.claude/settings.json` file:

```json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "your_zai_api_key",
    "ANTHROPIC_BASE_URL": "https://api.z.ai/api/anthropic",
    "API_TIMEOUT_MS": "3000000"
  }
}
```

Or run the automated script:
```bash
curl -O "https://cdn.bigmodel.cn/install/claude_code_zai_env.sh" && bash ./claude_code_zai_env.sh
```

### Step 3: Start Claude Code

Navigate to your project and run:
```bash
claude
```

That's it. Claude Code now uses GLM-4.7 instead of Claude's models. The interface stays exactly the same. Your muscle memory stays intact. You just get more usage and faster responses.

## Setting Up the MCP Tools (Pro/Max Only)

The MCP tools are what make the Pro plan worth it over Lite. Here's how to enable them:

### Web Search MCP
```bash
claude mcp add -s user -t http web-search-prime https://api.z.ai/api/mcp/web_search_prime/mcp --header "Authorization: Bearer your_api_key"
```

### Web Reader MCP
```bash
claude mcp add -s user -t http web-reader https://api.z.ai/api/mcp/web_reader/mcp --header "Authorization: Bearer your_api_key"
```

### Vision MCP (analyze screenshots and diagrams)
```bash
claude mcp add -s user zai-mcp-server --env Z_AI_API_KEY=your_api_key Z_AI_MODE=ZAI -- npx -y "@z_ai/mcp-server"
```

### Zread MCP (GitHub repo search and code reading)
```bash
claude mcp add -s user -t http zread https://api.z.ai/api/mcp/zread/mcp --header "Authorization: Bearer your_api_key"
```

Now your coding agent can search the web for documentation, read full pages, analyze error screenshots, and navigate GitHub repos without leaving your workflow.

## Who Should Use This?

The GLM Coding Plan makes sense if you:

- Run Claude Code or similar agents regularly
- Hit rate limits on your current Claude subscription
- Work on complex multi-file projects
- Want to run background agents without burning through quotas
- Need fast iteration cycles (55+ tokens/second matters)
- Build frontends (GLM-4.7's "Vibe Coding" produces cleaner UI)

It doesn't make sense if:

- You only need occasional AI assistance (Claude Pro handles light usage fine)
- You specifically need Claude's newest Opus features
- Your workflow requires features only available in Claude's ecosystem

## The Workflow I Use

My setup combines both tools strategically:

**GLM Coding Plan Pro** handles 90% of daily work. Script generation, debugging, feature implementation, refactoring, test writing. The high quotas mean I can leave agents running without constantly watching token counts.

**Claude Opus 4.5** gets reserved for the genuinely difficult problems. Complex architectural decisions. Subtle bugs that need deeper reasoning. Maybe 10% of my actual coding time.

This hybrid approach costs roughly $110/month total ($10 GLM Pro + $100 Claude Max 5x) but delivers far more effective capacity than either subscription alone.

## Christmas Deal: 50% Off First Purchase

Z.ai is running a promotion right now. Your first purchase gets 50% off, and using [my referral link](https://z.ai/subscribe?ic=W6HKMD2UL3) adds an extra 10-20% discount on top.

That brings the quarterly Pro plan down to around $12-15 for your first quarter. Three months of serious coding usage for less than a single month of Claude Max 5x.

## Conclusion

The AI coding landscape shifted when GLM-4.7 released in December 2025. An open-weight model matching Claude Sonnet 4.5 on coding benchmarks changes the economics of AI-assisted development.

The GLM Coding Plan packages that capability into something practical: unlimited-feeling usage for complex projects, integrated MCP tools, and pricing that doesn't require justifying to your finance team.

If you've been frustrated by Claude Code's rate limits, or you want to run agents more freely, [try the Pro plan](https://z.ai/subscribe?ic=W6HKMD2UL3). At $30/quarter with the current discounts, the risk is basically nonexistent.

The model earns its keep or it doesn't. But if it saves you from hitting rate limits during a critical coding session even once, it's already paid for itself.

---

*Using GLM-4.7 or have questions about the setup? Drop a comment below or reach out. I'm happy to share more specifics from my experience at LongevAI.*

*Tags: #ClaudeCode #GLM #AICoding #DeveloperTools #Productivity*
