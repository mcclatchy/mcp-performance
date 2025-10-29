# Project Overview

This project is a Gemini CLI extension that provides tools to analyze web page performance. It uses the Model Context Protocol (MCP) to communicate with the Gemini CLI and `puppeteer-core` to control a headless Chrome browser.

The main functionality is provided by the `performance-entries` tool, which loads a webpage and returns a detailed timeline of performance metrics as a JSON array of `PerformanceEntry` objects. This is useful for diagnosing performance bottlenecks and measuring key events like First Contentful Paint (FCP). The tool can also be configured to wait for a specific `performance.mark` to measure custom events.

## Building and Running

This project is a Node.js application. To run the MCP server, you can use the following command:

```bash
npm start
```

This will start the MCP server and make it available to the Gemini CLI.

## Development Conventions

The project uses the `@modelcontextprotocol/sdk` for creating the MCP server and tools. The code is written in JavaScript and uses the `zod` library for input validation.

The main tool, `performance-entries`, is defined in `mcp/server.js`. This file contains the logic for launching `puppeteer`, navigating to a URL, and extracting the performance entries. The `mcp/stdio.js` file is the entry point for the MCP server and handles the communication with the Gemini CLI.
