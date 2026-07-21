import { Prompt } from '@/components/prompt';
import { TerminalWindow } from '@/components/terminal';
import { courses } from '@/lib/shared';

// The collections listing, styled as a terminal running `ls`. Driven by the
// course registry — add an entry and a new line appears here.
export function Collections() {
  return (
    <section className="mt-14">
      <h2 className="sr-only">Collections</h2>
      <TerminalWindow>
        <Prompt>ls</Prompt>

        <ul className="mt-2">
          {courses.map((course) => (
            <li key={course.slug}>
              <a
                href={`/${course.slug}`}
                aria-label={`${course.title}: ${course.description}`}
                className="group -mx-2 flex flex-col rounded px-2 py-1 hover:bg-white/5 sm:flex-row sm:items-baseline sm:gap-3"
              >
                <span className="text-sky-400 group-hover:underline">
                  {course.slug}/
                </span>
                <span className="text-zinc-500"># {course.description}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-2 text-zinc-600"># more collections on the way</div>

        <Prompt className="mt-2">
          <span
            className="inline-block h-4 w-2 animate-pulse bg-zinc-300 align-middle"
            aria-hidden="true"
          />
        </Prompt>
      </TerminalWindow>
    </section>
  );
}
