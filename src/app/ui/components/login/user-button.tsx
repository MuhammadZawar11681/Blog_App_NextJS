import { Avatar, AvatarFallback, AvatarImage } from "@/app/ui/components/avatar"
import { Button } from "@/app/ui/components/button"
import { auth } from "../../../../../auth.config"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/app/ui/components/dropdown-menu"
import { SignIn, SignOut } from "./auth-component"

export default async function UserButton() {
  const session = await auth()

  if (!session?.user) return <SignIn />

    const userName = session.user.name?.split(" ")[0];


  return (
     <div className="relative flex gap-2 items-center bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg shadow-lg">


       <span className="hidden text-sm sm:inline-flex text-white font-semibold">        
       {userName}
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Button
            variant="ghost"
             className="relative w-10 h-10 rounded-full p-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
           >
            <Avatar className="w-8 h-8">
              {session.user.image && (
                <AvatarImage
                  src={
                    session.user.image ??
                    "https://source.boringavatars.com/beam/120"
                  }
                  alt={session.user.name ?? ""}
                />
              )}
              <AvatarFallback>{session.user.email}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {session.user.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {session.user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <SignOut />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
