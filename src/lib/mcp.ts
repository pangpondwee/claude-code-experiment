const MCP_URL = process.env.MCP_URL ?? "http://127.0.0.1:3845/mcp";

type McpRequest = {
  jsonrpc: "2.0";
  id: number | string;
  method: string;
  params?: unknown;
};

type McpResponse<T = unknown> = {
  jsonrpc: "2.0";
  id: number | string;
  result?: T;
  error?: { code: number; message: string; data?: unknown };
};

let _requestId = 0;

export async function mcpCall<T = unknown>(
  method: string,
  params?: unknown
): Promise<T> {
  const id = ++_requestId;
  const body: McpRequest = { jsonrpc: "2.0", id, method, params };

  const res = await fetch(MCP_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`MCP HTTP error: ${res.status} ${res.statusText}`);
  }

  const json: McpResponse<T> = await res.json();

  if (json.error) {
    throw new Error(`MCP error ${json.error.code}: ${json.error.message}`);
  }

  return json.result as T;
}
