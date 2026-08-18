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

export function urlFor(source: any) {
  return createImageUrlBuilder(getClient()).image(source);
}