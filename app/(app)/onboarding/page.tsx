'use client';

import { useRef } from 'react';
import { useOutsideClick } from '@/hooks/use-outside-click';

export default function OnboardingPage() {
  const ref = useRef<HTMLDivElement>(null);
  
  useOutsideClick(ref, () => {
    console.log('Clicked outside');
  });

  return (
    <div ref={ref}>
      <h1>Onboarding</h1>
    </div>
  );
}


