import Link from 'next/link';
import * as Button from '@/components/ui/button';
import { RiGithubFill } from '@remixicon/react';

export default function Home() {
  return (
    <div className='container mx-auto flex-1 px-5'>
      <div className='mt-48 flex flex-col items-center'>

        <div className='mt-6 flex gap-4'>
          <Button.Root variant='neutral' mode='stroke' asChild>
            <Link href='https://alignui.com/docs' target='_blank'>
              Read AlignUI docs
            </Link>
          </Button.Root>
        </div>
      </div>
    </div>
  );
}
