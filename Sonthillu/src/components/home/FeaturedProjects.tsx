import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/project/ProjectCard';
import type { PublicProject } from '@/types/search';

interface FeaturedProjectsProps {
  projects?: PublicProject[];
  loading?: boolean;
}

function ProjectCardSkeleton() {
  return (
    <Card hover={false}>
      <div className="aspect-[16/9] animate-pulse bg-cream-dark" />
      <div className="p-4 space-y-3 bg-white">
        <div className="h-5 w-1/4 animate-pulse rounded-full bg-cream-dark" />
        <div className="h-5 w-3/4 animate-pulse rounded bg-cream-dark" />
        <div className="h-4 w-1/2 animate-pulse rounded bg-cream-dark" />
        <div className="flex items-center justify-between pt-2">
          <div className="h-6 w-1/3 animate-pulse rounded bg-cream-dark" />
          <div className="h-4 w-1/4 animate-pulse rounded bg-cream-dark" />
        </div>
      </div>
    </Card>
  );
}

function EmptyState() {
  return (
    <div className="py-12 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/10">
        <svg
          className="h-8 w-8 text-brand-gold-dark"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6.75h1.5m-1.5 3h1.5m-1.5 3h1.5M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
          />
        </svg>
      </div>
      <h3 className="text-lg font-bold text-brand-navy">No projects available yet</h3>
      <p className="mt-2 text-text-secondary">
        We&apos;re developing amazing new projects. Check back soon.
      </p>
    </div>
  );
}

export function FeaturedProjects({ projects = [], loading = false }: FeaturedProjectsProps) {
  if (!loading && projects.length === 0) {
    return null;
  }

  return (
    <section className="bg-cream py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-brand-gold/5 opacity-50 blur-3xl"></div>
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand-gold/5 opacity-50 blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="mb-12 flex flex-col items-center text-center md:mb-16">
          <Badge className="mb-4 bg-brand-gold/20 text-brand-gold-dark border-0 tracking-widest font-bold">
            NEW DEVELOPMENTS
          </Badge>
          <SectionHeading
            title="Featured Projects"
            subtitle="Explore our exclusive new developments and upcoming projects."
            align="center"
          />
        </div>

        {loading ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <ProjectCardSkeleton key={n} />
            ))}
          </div>
        ) : (
          <>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            <div className="mt-14 text-center">
              <Link href="/projects">
                <Button
                  variant="secondary"
                  className="min-w-[200px] border-brand-gold text-brand-gold-dark hover:bg-brand-gold hover:text-brand-navy font-bold"
                >
                  View All Projects
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
