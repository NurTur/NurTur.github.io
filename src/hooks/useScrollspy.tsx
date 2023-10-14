import { useEffect, useState } from 'react';

import throttle from '@/lib/lodash.throttle';

export default function useScrollSpy() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const throttleMs = 1000;

  const actionSectionScrollSpy = throttle(() => {
    const sections = document.getElementsByClassName('hash-anchor');
    let prevBBox = null;
    let currentSectionId = activeSection;

    for (let i = 0; i < sections.length; i += 1) {
      const section = sections[i];

      if (!currentSectionId) {
        currentSectionId = section?.getAttribute('href')?.split('#')[1] ?? null;
      }
      if (section) {
        const bbox = section.getBoundingClientRect();
        const prevHeight = prevBBox ? bbox.top - prevBBox.bottom : 0;
        const offset = Math.max(200, prevHeight / 4);

        // GetBoundingClientRect returns values relative to viewport
        if (bbox.top - offset < 0) {
          currentSectionId = section.getAttribute('href')?.split('#')[1] ?? null;

          prevBBox = bbox;
        } else {
          // No need to continue loop, if last element has been detected
          break;
        }
      }
    }
    setActiveSection(currentSectionId);
  }, throttleMs);

  useEffect(() => {
    window.addEventListener('scroll', actionSectionScrollSpy);

    actionSectionScrollSpy();

    return () => {
      window.removeEventListener('scroll', actionSectionScrollSpy);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return activeSection;
}
