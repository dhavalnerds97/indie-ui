import { cn } from "@/src/utils/cn"

//======================================Neubrutalism
export const Button_v1 = () => {
  return (
    <button
      className={cn(
        "px-5 py-2 duration-200 font-semibold rounded-sm",
        "border-[0.5px] dark:border-white/70 border-black transition hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.7)]"
      )}
    >
      Hover me
    </button>
  )
}

//======================================Shine
export const Button_v2 = () => {
  return (
    <button
      className={cn(
        "px-5 py-2 duration-500 rounded font-semibold",
        "group/button relative inline-flex items-center justify-center overflow-hidden transition-all ease-in-out hover:scale-105 hover:shadow-lg",
        // light mode
        "text-white bg-gradient-to-tr from-zinc-900 to-zinc-700 hover:shadow-zinc-500/30",
        // dark mode
        "dark:text-zinc-900 dark:bg-gradient-to-tr dark:from-zinc-50 dark:to-zinc-100 dark:hover:shadow-zinc-900/30"
      )}
    >
      <span>Hover me</span>
      <span className="absolute inset-0 flex size-full justify-center [transform:skew(-14deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-14deg)_translateX(100%)]">
        <span className="relative h-full w-8 bg-white/20 dark:bg-black/10" />
      </span>
    </button>
  )
}

//======================================
export const Button_v3 = () => {
  return (
    <button
      className={cn(
        "relative rounded px-5 py-2 overflow-hidden group font-semibold hover:ring-2 hover:ring-offset-2 transition-all ease-out duration-300 hover:bg-gradient-to-r",
        // light mode
        "bg-zinc-900 hover:from-zinc-800 hover:to-zinc-700 text-white hover:ring-zinc-900",
        // dark mode
        "dark:bg-white dark:hover:from-zinc-50 dark:hover:to-zinc-100 dark:text-zinc-800 dark:hover:ring-white dark:ring-offset-black"
      )}
    >
      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white dark:bg-zinc-900 opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
      <span className="relative">Hover me</span>
    </button>
  )
}

//======================================3D
export const Button_v4 = () => {
  return (
    <button
      className={cn(
        "px-5 py-2 duration-500 rounded-lg font-semibold",
        "group relative inline-flex cursor-pointer items-center justify-center overflow-hidden border-b-2 border-l-2 border-r-2 bg-gradient-to-tr shadow-lg transition duration-100 ease-in-out active:translate-y-0.5  active:shadow-none",
        // light mode
        "active:border-zinc-600 border-zinc-900 from-zinc-800 to-zinc-700 text-white",
        // dark mode
        "dark:active:border-zinc-600 dark:border-zinc-500 dark:from-zinc-50 dark:to-zinc-100 dark:text-zinc-800"
      )}
    >
      <span className="absolute size-0 rounded-full bg-white dark:bg-black opacity-10 transition-all duration-300 ease-out group-hover:h-32 group-hover:w-32"></span>
      <span className="relative font-medium">Hover me</span>
    </button>
  )
}