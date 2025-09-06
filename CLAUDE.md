# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.5.2 application using the App Router, TypeScript, and Tailwind CSS v4. The project was bootstrapped with create-next-app and uses Turbopack for both development and production builds.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack  
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

- **Framework**: Next.js with App Router
- **Styling**: Tailwind CSS v4 with custom CSS variables for theming
- **TypeScript**: Strict configuration with path aliases (`@/*` � `./src/*`)
- **Fonts**: Geist Sans and Geist Mono via next/font/google

## Project Structure

```
src/
  app/
    layout.tsx      # Root layout with font configuration
    page.tsx        # Landing page
    globals.css     # Global styles and Tailwind imports
```

## Tools and Search Preferences

- **ast-grep**: Use `ast-grep --lang typescript -p '<pattern>'` for syntax-aware searches and structural code matching. Set language appropriately (javascript, tsx, etc). Default to this over text-only tools unless plain-text search is specifically requested.
- **gh**: Use this command for all GitHub interactions instead of GitHub APIs or MCP tools.
- **context7**: Always use the context7 MCP server when I need code generation, setup or configuration steps, or 
library/API documentation. This means you should automatically use the Context7 MCP tools to resolve library id and get library docs without me having to explicitly ask.

## Configuration Details

- **ESLint**: Uses Next.js core web vitals and TypeScript presets
- **Tailwind**: v4 with inline theme configuration in globals.css
- **TypeScript**: Strict mode enabled with Next.js plugin

