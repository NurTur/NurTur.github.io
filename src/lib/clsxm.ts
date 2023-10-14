import type { ClassValue } from 'clsx';
import clsx from 'clsx';

function mergeTailwindClasses(classes: string): string {
  const classList = classes.split(' ');
  const nonEmptyClasses = classList.filter(cls => cls !== '');
  const mergedTailwindClasses = nonEmptyClasses.join(' ');
  return mergedTailwindClasses;
}

export default function clsxm(...classes: ClassValue[]) {
  const mergedClasses = clsx(...classes);
  const tailwindClasses = mergeTailwindClasses(mergedClasses);
  return tailwindClasses;
}
