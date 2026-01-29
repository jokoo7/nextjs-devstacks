import { Button } from '@/components/ui/button';
import { signIn } from '@/lib/auth';

export default function page() {
  return (
    <div className="flex flex-col gap-4">
      <form
        action={async () => {
          'use server';
          await signIn('google');
        }}
      >
        <Button type="submit">Signin with Google</Button>
      </form>

      <form
        action={async () => {
          'use server';
          await signIn('github');
        }}
      >
        <Button type="submit">Signin with Github</Button>
      </form>
    </div>
  );
}
