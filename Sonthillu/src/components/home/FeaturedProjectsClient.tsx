'use client';

import { useEffect, useState } from 'react';
import { FeaturedProjects } from './FeaturedProjects';
import type { PublicProject } from '@/types/search';
import { CRM_CONFIG } from '@/lib/constants';
import { toPublicProject } from '@/lib/dto';

function getCrmUrl() {
  return process.env.NEXT_PUBLIC_CRM_API_BASE_URL || 'http://localhost:3000/api/v1';
}
function getCrmApiKey() {
  return process.env.NEXT_PUBLIC_CRM_API_KEY || '';
}

export function FeaturedProjectsClient() {
  const [projects, setProjects] = useState<PublicProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const brand = CRM_CONFIG.brandParameter;
    const url = `${getCrmUrl()}/public/${brand}/projects?limit=6`;

    fetch(url, {
      headers: { 'x-api-key': getCrmApiKey() },
      cache: 'no-store',
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const list = Array.isArray(data) ? data : [];
        setProjects(list.map(toPublicProject));
      })
      .catch((err) => {
        console.warn('FeaturedProjectsClient: failed to load projects', err);
        setProjects([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return <FeaturedProjects projects={projects} loading={loading} />;
}
