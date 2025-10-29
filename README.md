# mcp-performance
A Gemini CLI extension and MCP server to analyze web page performance

## Running Standalone

This project can be run as a standalone MCP server using `npx`:

```bash
npx github:mcclatchy/mcp-performance
```

## Gemini CLI Extension

This project can be installed as a Gemini CLI extension. To install it, use the following command:

```bash
gemini extensions install https://github.com/mcclatchy/mcp-performance
```

## Local Development

For developers working on the `mcp-performance` project, follow these steps:

### Installation

This project requires Node.js and npm. To install the development dependencies, run the following command:

```bash
npm install
```

### Running the MCP Server Locally

To run the MCP server for local development, use the following command:

```bash
npm start
```

This will start the MCP server and make it available for testing with the Gemini CLI or other MCP clients.

### Using Performance Marks

The `performance-entries` tool can wait for a specific `performance.mark` to be set on the page before collecting performance metrics. This is particularly useful for measuring custom events or ensuring that a specific part of the application has loaded or executed.

To use this feature, provide the `mark` parameter with the name of the performance mark you wish to wait for. For example, if your webpage sets a mark like `performance.mark('myCustomEvent')`, you can instruct the tool to wait for it.

Example (when used with Gemini CLI):

```bash
gemini performance-entries --url "https://example.com" --mark "myCustomEvent"
```

