# FLASH-UI Prompt Data Layer

## Purpose
This folder converts the `FLASH-UI-Site-Ideas-&-Prompts.md` prompt bank into reusable JSON data for future FLASH-UI site generation, static prompt directories, partner profile generation, Notion import, GPT knowledge uploads, and automation workflows.

## Source
- Source markdown: `FLASH-UI-Site-Ideas-&-Prompts.md`

## Grouping
The markdown is organized into themed output batches. This folder keeps the first major prompt-heavy portion of the source and groups related batches into a smaller set of cohesive JSON collections.

## Master File
`master-flash-ui-prompts.json` merges every extracted item from the themed group files and adds group metadata so the master can stand alone.

## Schema Flexibility
Each item only includes fields the source actually supports. Every item has `id`, `name`, `source_group`, and `source_order`, and items with usable prompts include `flash_ui_prompt`. Extra fields such as `brand`, `category`, `type`, `visual_style`, `visitor_psychology`, `primary_cta`, and `hero_message` are preserved when they appear in the source.

## Generated Files
- `business-funding-affiliate-prompts.json` - 40 items
- `affinity-brand-prompts.json` - 77 items
- `affiliate-ops-prompts.json` - 35 items
- `ai-agent-automation-prompts.json` - 25 items
- `business-acquisition-prompts.json` - 2 items
- `affinity-community-prompts.json` - 16 items
- `adult-creator-tech-prompts.json` - 45 items
- `partner-dashboard-prompts.json` - 65 items
- `master-flash-ui-prompts.json` - compiled library

## Suggested Future Uses
- FLASH-UI prompt library
- static site generator input
- partner profile page generator
- directory / filter UI
- Notion import
- GPT knowledge file
- GitHub Pages or Vercel static prompt directory

## Notes
The later strategy-heavy repeat sections in the source were intentionally left out of this first pass to keep the library focused on the prompt-bank material.
