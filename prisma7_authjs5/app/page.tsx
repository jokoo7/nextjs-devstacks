import { Button, buttonVariants } from '@/components/ui/button';
import { auth, signOut } from '@/lib/auth';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Page = async () => {
  const session = await auth();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="rounded-lg p-6 max-w-xl w-full">
        <h1 className=" text-xl mb-4 text-center">Auth.js + Prisma</h1>

        {!session ? (
          <div className="text-center">
            <Link className={cn(buttonVariants({ variant: 'default' }))} href="/login">
              Login
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-gray-800">Signed in as:</p>
              <p className="text-black">{session.user?.name}</p>
              <p className="text-black">{session.user?.email}</p>
            </div>

            <div className="text-center">
              <p className="text-gray-800">Data fetched from DB with Prisma:</p>
            </div>

            <div className="text-center">
              <form
                action={async () => {
                  'use server';
                  await signOut();
                }}
              >
                <Button type="submit">Logout</Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
