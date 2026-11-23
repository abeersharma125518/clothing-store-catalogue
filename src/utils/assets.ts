/** Prefix root-relative public assets with the deployment base (e.g. GitHub Pages). */
export function assetUrl(path: string): string {
  return path.startsWith('/') ? `${import.meta.env.BASE_URL}${path.slice(1)}` : path
}
