// lib/sanity.ts
import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

function getClient() {
  return createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: '2024-01-01',
    useCdn: true,
  });
}

export function fetchSanity<T = any>(query: string, params?: Record<string, unknown>): Promise<T> {
  return getClient().fetch<T>(query, params as any);
}

function localImageBuilder(src: string) {
  const builder: any = {
    url: () => src,
    width: () => builder,
    height: () => builder,
    auto: () => builder,
    fit: () => builder,
    quality: () => builder,
    format: () => builder,
  };
  return builder;
}

function resolveLocalSrc(source: any): string | null {
  if (typeof source === 'string') {
    if (/^image-/.test(source) && /\d+x\d+/.test(source)) return null;
    return source;
  }
  if (source?.asset?.url && !source?._ref && !source?.asset?._ref) return source.asset.url;
  return null;
}

export function urlFor(source: any) {
  const localSrc = resolveLocalSrc(source);
  if (localSrc !== null) return localImageBuilder(localSrc);

  const ref = source?._ref || source?.asset?._ref;
  if (!ref) return localImageBuilder('');

  return createImageUrlBuilder(getClient()).image(source);
}

export function isValidImageRef(image: any): boolean {
  return !!image?._ref && image._ref.startsWith('image-') && image._ref.length > 6;
}