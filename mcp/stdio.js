#!/usr/bin/env node

/*
 * This MCP server contains tools to communicate with the public API
 */

import server from "./server.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

/*
 * Setup the transport and connect the server
 */

const transport = new StdioServerTransport();
console.log(`MCP Server: Stdio transport initialized and listening...`);
await server.connect(transport);
