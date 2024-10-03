export async function GET() {
  const baseURL = "https://raw.githubusercontent.com/grkndev/languages/refs/heads/main/list.json"
  const response = await fetch(baseURL);
  const data = await response.json();
  return Response.json(data);
}
