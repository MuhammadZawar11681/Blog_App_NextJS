import { signIn, signOut } from "../../../../../auth.config"
import { Button } from "@/app/ui/components/button"

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server"
        await signIn(provider)
      }}
    >
      <Button
         {...props}
         className="w-full p-0 bg-green-600 text-white hover:bg-yellow-500 transition-colors"
       >
         Sign In
       </Button>
    </form>
  )
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
      className="w-full"
    >
      <Button
       variant="destructive"
         className="w-full p-0 bg-red-600 text-white hover:bg-red-700 transition-colors"
         {...props}
       >
         Sign Out
       </Button>
    </form>
  )
}
